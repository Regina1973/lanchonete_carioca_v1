const categoryService = require(
  "../services/category.service"
);

// LISTAR
exports.getCategories = (req, res) => {
  const categories =
    categoryService.getAllCategories();

  return res.json({
    success: true,
    data: categories
  });
};

// BUSCAR POR ID
exports.getCategoryById = (req, res) => {
  const { id } = req.params;

  const category =
    categoryService.getCategoryById(id);

  if (!category) {
    return res.status(404).json({
      success: false,
      message: "Categoria não encontrada"
    });
  }

  return res.json({
    success: true,
    data: category
  });
};

// CRIAR CATEGORIA
exports.createCategory = (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({
      success: false,
      message: "Nome é obrigatório"
    });
  }

  const category = {
    id: Date.now(),
    nome
  };

  categoryService.createCategory(category);

  return res.status(201).json({
    success: true,
    data: category
  });
};
//ATUALIZAR CATEGORIA
exports.updateCategory = (req, res) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;

    if (!nome) {
      return res.status(400).json({
        success: false,
        message: "Nome é obrigatório"
      });
    }

    const updatedCategory =
      categoryService.updateCategory(id, {
        nome
      });

    if (!updatedCategory) {
      return res.status(404).json({
        success: false,
        message: "Categoria não encontrada"
      });
    }

    return res.json({
      success: true,
      data: updatedCategory
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Erro ao atualizar categoria"
    });
  }
};