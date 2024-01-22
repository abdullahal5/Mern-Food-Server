const { default: mongoose } = require("mongoose");
const Order = require("../../../models/Order");

const updateOrderStatus = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new mongoose.Types.ObjectId(id) };
  const option = { upsert: true };
  const updatedDoc = {
    $set: {
      status: "Order confirmed",
    },
  };
  const result = await Order.updateOne(filter, updatedDoc, option);
  res.send(result);
};

module.exports = updateOrderStatus;