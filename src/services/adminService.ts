import GroceryItem from "../models/GroceryItem";

export const addGrocery = async (
  name: string,
  price: number,
  quantity: number
) => {
  return await GroceryItem.create({ name, price, quantity });
};

export const getGroceries = async () => {
  return await GroceryItem.findAll();
};

export const deleteGrocery = async (id: number) => {
  return await GroceryItem.destroy({ where: { id } });
};

export const updateGrocery = async (id: number, data: any) => {
  return await GroceryItem.update(data, { where: { id } });
};

export const manageInventory = async (id: number, quantity: number) => {
  const item = await GroceryItem.findByPk(id);
  if (item) {
    item.quantity = quantity;
    await item.save();
    return item;
  }
  throw new Error("Item not found");
};
