const Cart = require("../../../models/CartItems");

const getSingleMenu = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const result = await Cart.findOne(filter);
  res.send(result);
};
module.exports = getSingleMenu