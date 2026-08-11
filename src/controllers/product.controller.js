const productService = require(
  "../services/product.service"
);

// LISTAR PRODUTOS funciona
exports.getProducts = (req, res) => {
  try {
    const products =
      productService.getAllProducts();

    return res.json({
      success: true,
      data: products
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Erro ao listar produtos"
    });
  }
};

// BUSCAR PRODUTO POR ID
exports.getProductById = (req, res) => {
  try {
    const { id } = req.params;

    const product =
      productService.getProductById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Produto não encontrado"
      });
    }

    return res.json({
      success: true,
      data: product
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Erro ao buscar produto"
    });
  }
};

// CRIAR PRODUTO
exports.createProduct = (req, res) => {
  try {
    const { nome, preco } = req.body;

    if (!nome || !preco) {
      return res.status(400).json({
        success: false,
        message: "Nome e preço são obrigatórios"
      });
    }

    const product = {
      id: Date.now(),
      nome,
      preco
    };

    productService.createProduct(product);

    return res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Erro ao criar produto"
    });
  }
};