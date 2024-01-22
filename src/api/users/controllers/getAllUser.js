const users = require("../../../models/User");

const allUser = async (req, res) => {
  const result = await users.find()
  res.send(result);
};

module.exports = allUser;
