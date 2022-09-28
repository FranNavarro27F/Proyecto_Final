import axios from "axios";

// const { nombreContratista, mailContrado } = req.body;
export function pagosMp(id, email) {
  return async function (dispatch) {
    //console.log();
    try {
      return dispatch({
        type: "MP_PAYMENT",
        payload: (await axios.get(`/pago/payment`)).data,
      });
    } catch (e) {
     // console.error(e, "error catch action subscription MercadoPago");
    }
  };
}

export function subscriptionMp() {
  // console.log(payload, "action");
  return async function (dispatch) {
    try {
      return dispatch({
        type: "MP_SUBSCRIPTION",
        payload: (await axios.get(`/pago/subscription`)).data,
      });
    } catch (e) {
      console.error(e, "error catch action payment MercadoPago");
    }
  };
}
