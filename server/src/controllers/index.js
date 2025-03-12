import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import foodRouter from "./routes/food.routes.js";
import orderRouter from "./routes/order.routes.js";

dotenv.config();

const app = express();
const port = 3000;

// MongoDB холболт
mongoose
  .connect(process.env.MONGO_URI || process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("MongoDB холбогдлоо"))
  .catch((err) => console.log("MongoDB холбогдох үед алдаа:", err));

app.use(express.json());

// Маршрутууд
app.use("/user", userRouter);
app.use("/food", foodRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);

app.listen(port, () => {
  console.log(`Сервер ${port} порт дээр ажиллаж байна`);
});
