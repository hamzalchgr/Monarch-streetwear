const productService = require("../services/product.service");

const getProducts = (req, res) => {
  const { category, title } = req.query;

  if (category) {
    return res.json(productService.getProductsByCategory(category));
  }

  if (title) {
    return res.json(productService.searchProductsByTitle(title));
  }

  return res.json(productService.getAllProducts());
}

const getProduct = (req, res) => {
  const product = productService.getProductById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
}

module.exports = {
  getProducts,
  getProduct
}