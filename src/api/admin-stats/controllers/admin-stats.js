const Cart = require("../../../models/CartItems");
const Order = require("../../../models/Order");
const user = require("../../../models/User");

const adminStats = async (req, res) => {
  const users = await user.estimatedDocumentCount();
  const menuItems = await Cart.estimatedDocumentCount();
  const orders = await Order.estimatedDocumentCount();
  const result = await Order
    .aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$price",
          },
        },
      },
    ])

  const revenue = result.length > 0 ? result[0].totalRevenue : 0;

  res.send({ users, menuItems, orders, revenue });
}

module.exports = adminStats