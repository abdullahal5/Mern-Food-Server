const { default: mongoose } = require("mongoose");
const Order = require("../../../models/Order");

const addAOrder = async (req, res) => {
  const order = req.body;
  const result = await Order.create(order);
  const cardIds = order?.cartItems?.map(
    (id) => new mongoose.Types.ObjectId(id)
  );
  const deletedCardRequest = await Order.deleteMany({
    _id: { $in: cardIds },
  });
  res.send({ result, deletedCardRequest });
};

module.exports = addAOrder;
