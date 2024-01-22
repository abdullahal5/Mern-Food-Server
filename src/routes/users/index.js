const postAUser = require("../../api/users/controllers/PostAUser");
const deleteAUser = require("../../api/users/controllers/deleteAUser");
const allUser = require("../../api/users/controllers/getAllUser");
const getSingleUserById = require("../../api/users/controllers/getSingleUserById");
const makeAdminAUser = require("../../api/users/controllers/makeAdminAUser");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/users", postAUser)
router.get("/users", verifyToken, allUser);
router.get("/users/:id", verifyToken, verifyAdmin, getSingleUserById);
router.patch("/users/:id", verifyToken, verifyAdmin, makeAdminAUser);
router.delete("/users/:id", verifyToken, verifyAdmin, deleteAUser);


module.exports = router