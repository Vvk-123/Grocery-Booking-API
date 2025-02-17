import { DataTypes } from "sequelize";
import sequelize from "../db/db";
const Order = sequelize.define("Order", {
  items: DataTypes.JSON,
  total: DataTypes.FLOAT,
});
export default Order;
