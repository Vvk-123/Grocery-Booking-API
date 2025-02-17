import Order from "../models/Order";
import GroceryItem from "../models/GroceryItem";
import { Op } from "sequelize";

interface OrderItem {
  id: number;
  quantity: number;
}

export const createOrder = async (items: OrderItem[], total: number) => {
  return await Order.create({ items, total });
};

export const getAvailableGroceries = async () => {
  return await GroceryItem.findAll({ where: { quantity: { [Op.gt]: 0 } } });
};
