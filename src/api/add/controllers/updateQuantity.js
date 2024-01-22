const { default: mongoose } = require("mongoose");
const add = require("../../../models/AddCart");

const updateQuantity = async (req, res) => {
  const id = req.params.id;
  const { quantity } = req.body;
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      quantity: parseInt(quantity, 10),
    },
  };
  const result = await add.updateOne(query, updatedDoc, options);
  res.send(result);
};

module.exports = updateQuantity;
