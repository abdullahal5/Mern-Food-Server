const { default: mongoose } = require("mongoose");
const Order = require("../../../models/Order");

const getSingleOrderById = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new mongoose.Types.ObjectId(id) };
  const result = await Order.findOne(filter);
  res.send(result);
};

module.exports = getSingleOrderById;