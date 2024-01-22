const generateToken = require("../../../utils/generateToken");

const createToken = async (req, res, next) => {
  try {
    const user = req.body;
    const token = generateToken(user);
    res.send({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = createToken;
