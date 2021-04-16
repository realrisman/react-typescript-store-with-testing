import { Order } from "./../src/shared/types";
import express from "express";
import cors from "cors";

const data = require("./products.json");

const orders: Order[] = [];

const app = express();
app.use(cors());
app.use(express.json());

const port = 4000;

app.get("/products", (_req, res) => {
  return res.json(data);
});

app.post("/checkout", (req, res) => {
  const newOrder = req.body;
  orders.push(newOrder);
  res.json({ success: true, orderId: orders.length - 1 });
});

app.get("/order/:orderId", (req, res) => {
  const { orderId } = req.params;
  const order = orders[Number(orderId)];

  if (order) {
    return res.json({
      success: true,
      products: order.products,
    });
  } else {
    return res.json({
      success: false,
    });
  }
});

app.listen(port, () => {
  console.log(`Store backend running on http://localhost:${port}`);
});
