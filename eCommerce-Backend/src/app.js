const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/product.routes")
const cartRoutes = require("./routes/cart.routes")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

module.exports = app;