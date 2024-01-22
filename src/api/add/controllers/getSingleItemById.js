const { default: mongoose } = require("mongoose");
const add = require("../../../models/AddCart");

const getSingleItemById = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new mongoose.Types.ObjectId(id) };
  const result = await add.findOne(filter);
  res.send(result);
};

module.exports = getSingleItemById;