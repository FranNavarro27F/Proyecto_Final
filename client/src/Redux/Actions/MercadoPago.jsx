import axios from "axios";

// const { nombreContratista, mailContrado } = req.body;
export function pagosMp(id, email) {
  return async function (dispatch) {
    console.log(id, email);
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

export function subscriptionMp(id, email) {
  return async function (dispatch) {
    console.log(id, email);
    try {
      return dispatch({
        type: "MP_SUBSCRIPTION",
        payload: (await axios.get(`/pago/subscription`, id, email)).data,
      });
    } catch (e) {
      console.error(e, "error catch action payment MercadoPago");
    }
  };
}
