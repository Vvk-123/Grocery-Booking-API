import { Request, Response } from "express";
import {
  addGrocery,
  getGroceries,
  deleteGrocery,
  updateGrocery,
  manageInventory,
} from "../services/adminService";

export const addGroceryItem = async (req: Request, res: Response) => {
  const { name, price, quantity } = req.body;
  try {
    const item = await addGrocery(name, price, quantity);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: "Failed to add grocery item" });
  }
};

export const viewGroceryItems = async (_req: Request, res: Response) => {
  try {
    const items = await getGroceries();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch grocery items" });
  }
};

export const removeGroceryItem = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    await deleteGrocery(id);
    res.status(200).json({ message: "Grocery item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete grocery item" });
  }
};

export const updateGroceryItem = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const item = await updateGrocery(id, req.body);
    res.status(200).json({ message: "Grocery item updated successfully", item });
  } catch (error) {
    res.status(500).json({ error: "Failed to update grocery item" });
  }
};

export const manageInventoryItem = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const item = await manageInventory(id, req.body.quantity);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: "Failed to manage inventory" });
  }
};
