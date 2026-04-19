const products = require("../data/products");

const getAllProducts = () => {
  return products;
}

const getProductById = (id) => {
  return products.find((p) => p.id === id);
}

const getProductsByCategory = (category) => {
  return products.filter((p) => p.category.name === category);
}

const searchProductsByTitle = (title) => {
  return products.filter((p) => 
    p.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
  )
}

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  searchProductsByTitle
}