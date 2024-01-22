const Cart = require("../../../models/CartItems");

const findAll = async (req, res, next) => {
  try {
    const result = await Cart.find();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = findAll;
