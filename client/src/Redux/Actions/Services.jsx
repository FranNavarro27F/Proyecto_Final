import axios from "axios";

export function getServices() {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "GET_SERVICES",
        payload: (await axios(`/servicios`)).data,
      });
    } catch (error) {
      console.error(
        error.message,
        "error en el pedido de todos los servicios: actions"
      );
    }
  };
}
