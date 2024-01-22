const add = require("../../../models/AddCart");

const getItemByEmail = async (req, res) => {
  const email = req.query.email;
  const filter = { email: email };
  const result = await add.find(filter);
  res.send(result);
};

module.exports = getItemByEmail