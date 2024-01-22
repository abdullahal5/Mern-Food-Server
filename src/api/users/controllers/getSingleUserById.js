const users = require("../../../models/User");

const getSingleUserById = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await users.findOne(query);
  res.send(result);
};

module.exports = getSingleUserById