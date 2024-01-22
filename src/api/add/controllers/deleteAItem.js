const { default: mongoose } = require("mongoose");
const add = require("../../../models/AddCart");

const deleteAItem = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const result = await add.deleteOne(query);
  res.send(result);
};

module.exports = deleteAItem