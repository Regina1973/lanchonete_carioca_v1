const express = require("express");
const app = express();

app.use(express.json());

app.use("/auth", require("./routes/auth.routes"));
app.use("/products", require("./routes/products.routes"));
app.use("/orders", require("./routes/orders.routes"));

module.exports = app;