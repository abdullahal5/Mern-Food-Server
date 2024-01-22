const { default: mongoose } = require("mongoose");
const Cart = require("../../../models/CartItems");

const updateAItem = async (req, res) => {
  const id = req.params.id;
  const { name, recipe, category, image, price } = req.body;
  const filter = { _id: new mongoose.Types.ObjectId(id) };
  const option = { upsert: true };
  const updatedDoc = {
    $set: {
      name: name,
      recipe: recipe,
      category: category,
      image: image,
      price: price,
    },
  };
  const result = await Cart.updateOne(filter, updatedDoc, option);
  res.send(result);
};

module.exports = updateAItem