import axios from "axios";

// const { nombreContratista, mailContrado } = req.body;
export function pagosMp(id, email) {
  return async function (dispatch) {
    console.log(id, email, "action");
    try {
      return dispatch({
        type: "MP_PAYMENT",
        payload: (await axios.get(`/pago/payment`, id, email)).data,
      });
    } catch (e) {
      console.error(e, "error catch action subscription MercadoPago");
    }
  };
}

export function subscriptionMp(payload) {
  console.log(payload, "action");
  return async function (dispatch) {
    try {
      return dispatch({
        type: "MP_SUBSCRIPTION",
        payload: (await axios.get(`/pago/subscription`, payload)).data,
      });
    } catch (e) {
      console.error(e, "error catch action payment MercadoPago");
    }
  };
}
