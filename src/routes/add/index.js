const AddACart = require("../../api/add/controllers/AddACart");
const getItemByEmail = require("../../api/add/controllers/getItemByEmail");
const getSingleItemById = require("../../api/add/controllers/getSingleItemById");
const updateQuantity = require("../../api/add/controllers/updateQuantity");
const deleteAItem = require("../../api/add/controllers/deleteAItem");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/add", AddACart)
router.get("/add", getItemByEmail)
router.get("/add/:id", verifyToken, getSingleItemById)
router.put("/add/:id", verifyToken, updateQuantity);
router.delete("/add/:id", verifyToken, deleteAItem);

module.exports = router