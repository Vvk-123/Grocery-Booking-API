import express from "express";
import { placeOrder, viewGroceries } from "../controllers/userController";

const router = express.Router();
router.post("/order", placeOrder);
router.get("/items", viewGroceries);
export default router;
