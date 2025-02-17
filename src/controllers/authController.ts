import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const secretkey = process.env.JWT_SECRET as string;

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "password") {
    const token = jwt.sign({ user: "admin" }, secretkey, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
