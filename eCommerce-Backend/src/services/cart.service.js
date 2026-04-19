let cart = [];

const getCart = () => cart;

const addToCart = (product) => {
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({...product, quantity: 1})
  }

  return cart;
}

const removeFromCart = (id) => {
  cart = cart.filter((item) => item.id !== id);
  return cart;
}

const clearCart = () => {
  cart = [];
  return cart;
}

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart
}