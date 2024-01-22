const { model, Schema } = require("mongoose");

const cartItemsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  recipe: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Cart = model("cartItem", cartItemsSchema, "cartItems");

module.exports = Cart;
