import express from "express";
import {
  addGroceryItem,
  viewGroceryItems,
  updateGroceryItem,
  removeGroceryItem,
  manageInventoryItem,
} from "../controllers/adminController";
const router = express.Router();
router.post("/add", addGroceryItem);
router.get("/items", viewGroceryItems);
router.put("/update/:id", updateGroceryItem);
router.delete("/delete/:id", removeGroceryItem);
router.patch("/inventory/:id", manageInventoryItem);
export default router;
