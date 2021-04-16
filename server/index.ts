import express from "express";
import cors from "cors";

const data = require("./products.json");

const app = express();
app.use(cors());
app.use(express.json());

const port = 4000;

app.get("/products", (_req, res) => {
  return res.json(data);
});

app.listen(port, () => {
  console.log(`Store backend running on http://localhost:${port}`);
});
