const Cart = require("../../../models/CartItems");

const getAllMenu = async (req, res) => {
  const result = await Cart.find()
  res.send(result);
};

module.exports = getAllMenu