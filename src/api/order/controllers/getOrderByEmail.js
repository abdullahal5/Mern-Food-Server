const Order = require("../../../models/Order");

const getOrderByEmail = async (req, res) => {
  const email = req.query.email;
  const query = { email: email };
  const decodedEmail = req.decoded.email;
  if (email !== decodedEmail) {
    return res.status(403);
  }
  const result = await Order.find(query)
  res.send(result);
};

module.exports = getOrderByEmail