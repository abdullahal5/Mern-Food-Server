const createToken = require('../../api/authentication/controllers/createToken');
const router = require("express").Router();

router.post("/jwt", createToken);

module.exports = router
