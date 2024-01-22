const { model, Schema, default: mongoose } = require("mongoose");

const OrderSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  itemName: {
    type: [String],
    required: true,
  },
  cartItems: {
    type: [{ type: mongoose.Schema.Types.ObjectId }],
    required: true,
  },
  menuItems: {
    type: [{ type: mongoose.Schema.Types.ObjectId }],
    required: true,
  },
  orderDate: {
    type: String,
    required: true,
  },
});

const Order = model("order", OrderSchema, "order");

module.exports = Order;
