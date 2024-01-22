const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) =>{
    return jwt.sign(user, process.env.JWT_TOKEN, {
      expiresIn: "1hr",
    });
}

module.exports = generateToken