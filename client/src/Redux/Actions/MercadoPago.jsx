import axios from "axios";

// const { nombreContratista, mailContrado } = req.body;
export function pagosMp() {
  return async function (dispatch) {
    
    try {
      return dispatch({
        type: "MP_PAYMENT",
        payload: (await axios.post(`/pago/payment`)).data,
      });
    } catch (e) {
      console.error(e, "error catch action payment MercadoPago");
    }
  };
}

export function subscriptionMp() {
  // console.log(payload, "action");
  return async function (dispatch) {
    try {
      return dispatch({
        type: "MP_SUBSCRIPTION",
        payload: (await axios.post(`/pago/subscription`)).data,
      });
    } catch (e) {
      console.error(e, "error catch action subscription MercadoPago");
    }
  };
}

export function consultSub(id) {
  // console.log(id, "action");
  return async function (dispatch) {
    try {
      return dispatch({
        type: "MP_SUBSCRIPTION_CONSULT",
        payload: (await axios.get(`/pago/consultSub/${id}`)).data,
      });
    } catch (e) {
      console.error(e, "error catch action subscription consult MercadoPago");
    }
  };
}

export function consultPay(id) {
  // console.log(payload, "action");
  return async function (dispatch) {
    try {
      return dispatch({
        type: "MP_PAYMENT_CONSULT",
        payload: (await axios.get(`/pago/consultPay`, id)).data,
      });
    } catch (e) {
      console.error(e, "error catch action payment consult MercadoPago");
    }
  };
}

export function getPurchaseInfo(id) {
  if (id) {
    return async function (dispatch) {
      try {
        const response = await axios(
          `https://api.mercadopago.com/v1/payments/${id}`,
          {
            headers: {
              Authorization:
                "Bearer APP_USR-6913287203050942-081213-9ae4b41c5f23db785ed7c59bdbb34d5e-1178359030",
            },
          }
        );
        dispatch({ type: "GET_PURCHASE_INFO", payload: response.data });
      } catch (error) {
        dispatch({ type: "GET_PURCHASE_INFO", payload: error.response.data });
      }
    };
  } else return { type: "GET_PURCHASE_INFO" };
}
