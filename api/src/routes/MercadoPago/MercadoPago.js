const express = require("express");
const router = express.Router();

const PaymentController = require("../../controllers/MercadoPago/PaymentController");
const PaymentService = require("../../controllers/MercadoPago/PaymentService");
const PaymentInstance = new PaymentController(new PaymentService());

router.get("/", function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link",
    "/consult": "consult a subscription/payment status",
  });
});

router.get("/consultPay/:id", function (req, res, next) {
  const { id } = req.params;
  PaymentInstance.getPaymentConsult(req, res, id);
});

router.get("/consultSub/:id", function (req, res, next) {
  const { id } = req.params;

  PaymentInstance.getSubscriptionConsult(req, res, id);
});

router.post("/payment", function (req, res, next) {
  const { price } = req.body;
  console.log(price);
  PaymentInstance.getPaymentLink(req, res, price);
});

router.post("/subscription", function (req, res, next) {
  const { user_id } = req.body;

  PaymentInstance.getSubscriptionLink(req, res, user_id);
});

module.exports = router;
//ROMPI EL BACK//
