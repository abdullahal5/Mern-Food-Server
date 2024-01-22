const { default: mongoose } = require("mongoose");
const Order = require("../../../models/Order");

const deleteAOrder = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new mongoose.Types.ObjectId(id) };
  const result = await Order.deleteOne(filter);
  res.send(result);
};

module.exports = deleteAOrder