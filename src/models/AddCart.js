const { model, Schema, default: mongoose, Types } = require("mongoose");

const AddaSchema = new Schema({
  menuItemId: {
    type: Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const add = model("add", AddaSchema, "add");

module.exports = add