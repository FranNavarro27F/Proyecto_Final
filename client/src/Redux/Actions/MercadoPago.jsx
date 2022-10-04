import axios from "axios";

// const { nombreContratista, mailContrado } = req.body;
export function pagosMp(price, id) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "MP_PAYMENT",
        payload: (await axios.post(`/pago/payment/${id}`, price)).data,
      });
    } catch (e) {
      console.error(e, "error catch action payment MercadoPago");
    }
  };
}

export function subscriptionMp(status, subscription_id, user_id) {
  return async function (dispatch) {
    if (!status && subscription_id !== undefined) {
      try {
        return dispatch({
          type: "MP_SUBSCRIPTION",
          payload: (await axios.post(`/pago/subscription`, { user_id })).data,
        });
      } catch (e) {
        console.error(e, "error catch action subscription MercadoPago");
      }
    }
  };
}

export function consultSub(id) {
  return async function (dispatch) {
    try {
      if (id !== undefined || id !== null) {
        const response = (await axios.get(`/pago/consultSub/${id}`)).data;
        console.log(response);
        return dispatch({
          type: "MP_SUBSCRIPTION_CONSULT",
          payload: response,
        });
      } else {
        console.log("el id esta undefined");
      }
    } catch (e) {
      console.error(e, "error catch action subscription consult MercadoPago");
    }
  };
}

export function consultPay(id) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "MP_PAYMENT_CONSULT",
        payload: (await axios.get(`/pago/consultPay/${id}`)).data,
      });
    } catch (e) {
      console.error(e, "error catch action payment consult MercadoPago");
    }
  };
}

export function setSubscriptionId(payload) {
  const { user_id, subscription_id, status } = payload;
  return async function (dispatch) {
    try {
      return dispatch({
        type: "MP_SET_SUSCRIPTION_ID",
        payload: (
          await axios.put(`/usuarios/sub/${user_id}`, {
            subscription_id,
            status,
          })
        ).data,
      });
    } catch (e) {
      console.error(e, "error catch action SET ID MercadoPago");
    }
  };
}

export function editSuscriptionMp(id, status) {
  return async function (dispatch) {
    try {
      if (id) {
        return dispatch({
          type: "EDIT_SUSCRIPTION",
          payload: (await axios.put(`/pago/subscriptionEdit/${id}`, status))
            .data,
        });
      }
    } catch (e) {
      console.error(e, "error catch action EDIT SUSCRIPTION MercadoPago");
    }
  };
}
