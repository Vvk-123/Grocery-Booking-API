import { Request, Response } from "express";
import GroceryItem from "../models/GroceryItem";
import { createOrder, getAvailableGroceries } from "../services/userService";

export const viewGroceries = async (_req: Request, res: Response) => {
  try {
    const items = await getAvailableGroceries();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch groceries" });
  }
};

const calculateTotal = async (
  items: { id: number; quantity: number }[]
): Promise<number> => {
  let total = 0;
  for (const item of items) {
    const grocery = await GroceryItem.findByPk(item.id);
    if (grocery) {
      total += grocery.getDataValue("price") * item.quantity;
    }
  }
  return total;
};

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const total = await calculateTotal(req.body.items);
    const order = await createOrder(req.body.items, total);
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: "Failed to place order", details: error.message });
    } else {
      res.status(500).json({ error: "Failed to place order" });
    }
  }
};
