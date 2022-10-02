const axios = require("axios");
require("dotenv").config();
const { Contratos } = require("../../db");

class PaymentService {
  async createPayment() {
    // const price = async (id) => {
    //   const res = await Contratos.findByPk(id);
    //   return res.dataValues.price;
    // };
    const url = "https://api.mercadopago.com/checkout/preferences";
    const body = {
      payer_email: "test_user_20874669@testuser.com",
      reason: "CONTRATAR DESARROLLADOR",
      items: [
        {
          title: "CONTRATAR DESARROLLADOR",
          description: "CONTRATAR DESARROLLADOR MEDIANTE PROGRAMAX",
          picture_url:
            "https://cdn.discordapp.com/attachments/826954908258402374/1021209817035055247/icon-1200x1200.png",
          category_id: "category123",
          quantity: 1,
          unit_price: 3000,
          // await price(id),

          installments: 12,
        },
      ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/https://programax.vercel.app/work",
      },
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    // console.log(payment.data);
    return payment.data;
  }

  async createConsultPay(id) {
    const url = `https://api.mercadopago.com/checkout/preferences/${id}`;

    const consult = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });
    return consult.data;
  }

  async createSubscription(user_id) {
    const url = "https://api.mercadopago.com/preapproval";

    const body = {
      payer_email: "test_user_20874669@testuser.com",

      reason: "SUSCRIPCION  MENSUAL A PROGRAMAX",
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: 1000,
        currency_id: "ARS",
        // start_date: new Date(),
        // end_date: "2023-07-20T15:59:52.581Z",
      },

      back_url: `https://programax.vercel.app/work/details/${user_id}`,

      auto_return: "all",
    };
    const subscription = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return subscription.data;
  }

  async createConsultSub(id) {
    const url = `https://api.mercadopago.com/preapproval/${id}`;

    const consult = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return consult.data;
  }
}
module.exports = PaymentService;
