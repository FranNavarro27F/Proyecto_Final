const { Usuarios } = require("../../db.js");

const ERROR = "Error @ controllers/MercadoPago/PaymentController/";

// -----------------------------------------------

class PaymentController {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
  }
  async getPaymentLink(req, res, price, id) {
    //
    try {
      //
      const payment = await this.subscriptionService.createPayment(price, id);
      return res.json(payment);
      //
    } catch (error) {
      console.error(`${ERROR}getPaymentLink --> ${error}`);

      return res
        .status(400)
        .json({ error: true, msg: "Failed to create payment" });
    }
  }

  // -----------------------------------------------

  async getPaymentConsult(req, res, id) {
    //
    try {
      const consult = await this.subscriptionService.createConsultPay(id);

      return res.json(consult);
      //
    } catch (error) {
      console.error(`${ERROR}getPaymentConsult --> ${error}`);
      return res
        .status(400)
        .json({ error: true, msg: "Failed to consult Payment" });
    }
  }

  // -----------------------------------------------

  async getSubscriptionLink(req, res, user_id) {
    //
    try {
      const user = await Usuarios.findByPk(user_id);

      if (!user.subscription_id) {
        const subscription = await this.subscriptionService.createSubscription(
          user_id
        );

        return res.json(subscription);
      } else {
        return res.status(400).json({
          error: true,
          msg: "El usuario ya tiene establecida un id de suscripcion!",
        });
      }
      //
    } catch (error) {
      console.error(`${ERROR}getSubscriptionLink --> ${error}`);

      return res
        .status(400)
        .json({ error: true, msg: "Failed to create subscription" });
    }
  }

  // -----------------------------------------------

  async getSubscriptionConsult(req, res, id) {
    //
    try {
      const consult = await this.subscriptionService.createConsultSub(id);
      return res.json(consult);
      //
    } catch (error) {
      console.error(`${ERROR}getSubscriptionConsult --> ${error}`);

      return res
        .status(400)
        .json({ error: true, msg: "Failed to consult Subscription" });
    }
  }

  // -----------------------------------------------

  async editSubscription(req, res, id, status) {
    //
    try {
      const consult = await this.subscriptionService.createEditSubscription(
        id,
        status
      );
      return res.json(consult);
      //
    } catch (error) {
      console.error(`${ERROR}editSubscription --> ${error}`);

      return res
        .status(400)
        .json({ error: true, msg: "Failed to edit Subscription" });
    }
  }
}

// -----------------------------------------------

module.exports = PaymentController;
