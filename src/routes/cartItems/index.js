const AddAItem = require("../../api/cartItems/controllers/AddAItem");
const deleteAItem = require("../../api/cartItems/controllers/deleteAItem");
const findAll = require("../../api/cartItems/controllers/findAll");
const getSingleItem = require("../../api/cartItems/controllers/getSingleItem");
const updateAItem = require("../../api/cartItems/controllers/updateAItem");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router()

router.post("/cartItems", verifyToken, verifyAdmin, AddAItem);
router.get("/cartItems", findAll);
router.get("/cartItems/:id", getSingleItem);
router.patch("/cartItems/:id", verifyToken, verifyAdmin, updateAItem);
router.delete("/cartItems/:id", verifyToken, verifyAdmin, deleteAItem)

module.exports = router