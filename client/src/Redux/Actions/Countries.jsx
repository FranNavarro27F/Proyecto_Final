import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "GET_COUNTRIES",
        payload: (await axios(`/paises`)).data,
      });
    } catch (error) {
      console.error(
        error.message,
        "error en el pedido de todos los countries: actions"
      );
    }
  };
}
