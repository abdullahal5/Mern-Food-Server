const { default: mongoose } = require("mongoose");
const users = require("../../../models/User");

const makeAdminAUser = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const updatedDoc = {
    $set: {
      role: "Admin",
    },
  };
  const result = await users.updateOne(query, updatedDoc);
  res.send(result);
};

module.exports = makeAdminAUser