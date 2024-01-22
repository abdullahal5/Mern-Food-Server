const getAllMenu = require("../../api/menu/controllers/getAllMenu");
const getSingleMenu = require("../../api/menu/controllers/getSingleMenu");

const router = require("express").Router();

router.get("/menu", getAllMenu)
router.get("/menu/:id", getSingleMenu)

module.exports = router