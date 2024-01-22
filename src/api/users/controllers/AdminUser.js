const users = require("../../../models/User");

const adminUser = async (req, res, next) => {
  try {
    const email = req?.params?.email;

    if (email !== req?.decoded?.email) {
      return res.status(403).send({ message: "forbidden access" });
    }
    const query = { email: email };
    const user = await users.findOne(query);

    let admin = false;
    if (user) {
      admin = user?.role === "Admin";
    }
    res.send({ admin });
  } catch (err) {
    next(err);
  }
};

module.exports = adminUser;
