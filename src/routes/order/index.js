const addAOrder = require("../../api/order/controllers/addAOrder");
const deleteAOrder = require("../../api/order/controllers/deleteAOrder");
const getOrderByEmail = require("../../api/order/controllers/getOrderByEmail");
const getOrderById = require("../../api/order/controllers/getOrderById");
const getSingleOrderById = require("../../api/order/controllers/getSingleOrderById");
const updateOrderStatus = require("../../api/order/controllers/updateOrderStatus");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/order", verifyToken, addAOrder);
router.get("/order", verifyToken, verifyAdmin, getOrderById);
router.get("/orderAdmin/:id", getSingleOrderById);
router.get("/orderAdmin", verifyToken, getOrderByEmail);
router.patch("/orderAdmin/:id", verifyToken, verifyAdmin, updateOrderStatus);
router.delete("/orderAdmin/:id", verifyToken, verifyAdmin, deleteAOrder);


module.exports = router