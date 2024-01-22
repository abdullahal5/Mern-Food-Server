const payment = require("../../api/payment/controllers/payment");

const router = require("express").Router();

router.post('/create-payment-intent', payment);

module.exports = router