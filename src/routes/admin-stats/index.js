const adminStats = require("../../api/admin-stats/controllers/admin-stats");

const router = require("express").Router();

router.get("/admin-stats", adminStats)
module.exports = router