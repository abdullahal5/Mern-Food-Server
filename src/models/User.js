const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["User", "Admin"],
    default: "User",
  },
});

const user = model("user", UserSchema, "users");
module.exports = user;
