import axios from "axios";

export function getLanguajes() {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "GET_LANGUAJES",
        payload: (await axios(`/lenguajes`)).data,
      });
    } catch (error) {
      console.error(
        error.message,
        "error en el pedido de todos los lenguajes: actions"
      );
    }
  };
}
