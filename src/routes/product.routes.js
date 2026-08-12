const express = require("express");
const router = express.Router();

const productController = require(
  "../controllers/product.controller"
);

// Listar produtos
router.get(
  "/",
  productController.getProducts
);

// Buscar produto por ID
router.get(
  "/:id",
  productController.getProductById
);

// Criar produto
router.post(
  "/",
  productController.createProduct
);

//Atualizar produto
router.put(
  "/:id",
  productController.updateProduct
);
module.exports = router;;