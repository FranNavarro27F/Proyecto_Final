const express = require("express");
const router = express.Router();

const PaymentController = require("../../controllers/MercadoPago/PaymentController");
const PaymentService = require("../../controllers/MercadoPago/PaymentService");
const PaymentInstance = new PaymentController(new PaymentService());

router.get("/", function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link",
  });
});

router.post("/payment", function (req, res, next) {
  // const { id, email } = req.body;
  PaymentInstance.getPaymentLink(req, res);
});

router.post("/subscription", function (req, res, next) {
  // const { email, id } = req.body;
  PaymentInstance.getSubscriptionLink(req, res);
});

module.exports = router;
