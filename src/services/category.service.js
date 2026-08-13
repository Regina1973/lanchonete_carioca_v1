const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "../data/categories.json"
);
//LISTA CATEGORIAS
function getCategories() {
  const data = fs.readFileSync(filePath);

  return JSON.parse(data);
}
//SALVA CATEGORIAS
function saveCategories(categories) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(categories, null, 2)
  );
}
//LISTA TODAS CATEGORIAS
function getAllCategories() {
  return getCategories();
}
//LISTA  CATEGORIA POR ID
function getCategoryById(id) {
  const categories = getCategories();

  return categories.find(
    category => category.id == id
  );
}
//CRIAR CATEGORIAS
function createCategory(category) {
  const categories = getCategories();

  categories.push(category);

  saveCategories(categories);

  return category;
}
//ATUALIZA CATEGORIAS
function updateCategory(id, updatedData) {
  const categories = getCategories();

  const index = categories.findIndex(
    category => category.id == id
  );

  if (index === -1) {
    return null;
  }

  categories[index] = {
    ...categories[index],
    ...updatedData
  };

  saveCategories(categories);

  return categories[index];
}

function deleteCategory(id) {
  const categories = getCategories();

  const index = categories.findIndex(
    category => category.id == id
  );

  if (index === -1) {
    return null;
  }

  const deletedCategory =
    categories[index];

  categories.splice(index, 1);

  saveCategories(categories);

  return deletedCategory;
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};