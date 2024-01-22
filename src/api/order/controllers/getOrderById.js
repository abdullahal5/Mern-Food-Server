const Order = require("../../../models/Order");

const getOrderById = async (req, res) => {
  const result = await Order.find()
  res.send(result);
};

module.exports = getOrderById;