const { default: mongoose } = require("mongoose");
const Cart = require("../../../models/CartItems");

const getSingleItem = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const result = await Cart.findOne(query);
  res.send(result);
};

module.exports = getSingleItem