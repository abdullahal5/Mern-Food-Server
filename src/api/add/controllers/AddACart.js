const add = require("../../../models/AddCart");

const AddACart = async (req, res) => {
  const cartItem = req.body;
  const result = await add.create(cartItem);
  res.send(result);
};

module.exports = AddACart