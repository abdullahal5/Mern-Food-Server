const adminUser = require("../../api/users/controllers/AdminUser");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.get("/users/admin/:email", verifyToken, adminUser);

module.exports = router