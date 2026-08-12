const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "../data/products.json"
);

function getProducts() {
  const data = fs.readFileSync(filePath);

  return JSON.parse(data);
}
//Salva produtos
function saveProducts(products) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(products, null, 2)
  );
}

//Listar produtos
function getAllProducts() {
  return getProducts();
}

//Buscar produto
function getProductById(id) {
  const products = getProducts();

  return products.find(
    product => product.id == id
  );
}

//Criar produto
function createProduct(product) {
  const products = getProducts();

  products.push(product);

  saveProducts(products);

  return product;
}
//Atualizar Produto
function updateProduct(id, updatedData) {
  const products = getProducts();

  const index = products.findIndex(
    product => product.id == id
  );

  if (index === -1) {
    return null;
  }

  products[index] = {
    ...products[index],
    ...updatedData
  };

  saveProducts(products);

  return products[index];
}

//EXCLUIR PRODUTOS
function deleteProduct(id) {
  const products = getProducts();

  const index = products.findIndex(
    product => product.id == id
  );

  if (index === -1) {
    return null;
  }

  const deletedProduct = products[index];

  products.splice(index, 1);

  saveProducts(products);

  return deletedProduct;
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};