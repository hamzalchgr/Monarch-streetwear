const cartService = require("../services/cart.service");

const getCart = (req, res) => {
  res.json(cartService.getCart());
}

const addToCart = (req, res) => {
  const product = req.body;
  res.json(cartService.addToCart(product));
}

const removeFromCart = (req, res) => {
  res.json(cartService.removeFromCart(req.params.id));
}

const clearCart = (req, res) => {
  res.json(cartService.clearCart());
}

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart
}