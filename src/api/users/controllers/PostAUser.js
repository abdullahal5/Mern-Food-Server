const users = require("../../../models/User");

const postAUser = async (req, res) => {
  const body = req.body;
  const query = { email: body.email };
  const isExist = await users.findOne(query);
  if (isExist) {
    return res.status(302).json({ message: "user already exists" });
  } else {
    const result = await users.insertOne(body);
    res.send(result);
  }
};

module.exports = postAUser