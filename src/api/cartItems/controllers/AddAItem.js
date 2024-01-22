const Cart = require("../../../models/CartItems");

const AddAItem = async (req, res) => {
  const body = req.body;
  const result = await Cart.create(body);
  res.send({ message: "Item successfully added", insertedId: result._id });
};

module.exports = AddAItem;
