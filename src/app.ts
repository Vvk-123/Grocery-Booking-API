import express, { RequestHandler } from "express";
import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import authMiddleware from "./middleware/authMiddleware";
import errorMiddleware from "./middleware/errorMiddleware";

const app = express();

app.use(express.json());

app.use(((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}) as RequestHandler);

app.use("/auth", authRoutes);

app.use("/admin", authMiddleware as RequestHandler, adminRoutes);
app.use("/user", authMiddleware as RequestHandler, userRoutes);

app.use(((err, req, res, next) =>
  errorMiddleware(err, req, res, next)) as express.ErrorRequestHandler);

export default app;
