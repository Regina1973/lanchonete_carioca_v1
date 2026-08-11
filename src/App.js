const express = require("express");

const app = express();

const userRoutes = require("./routes/user.routes");

const productRoutes =
require("./routes/product.routes");

app.use(express.json());
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API funcionando"
  });
});

app.use("/api/users", userRoutes);

module.exports = app;