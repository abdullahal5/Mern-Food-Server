const { default: mongoose } = require("mongoose");
const users = require("../../../models/User");

const deleteAUser = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const result = await users.deleteOne(query);
  res.send(result);
};

module.exports = deleteAUser