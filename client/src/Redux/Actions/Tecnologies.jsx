import axios from "axios";

export function getTecnologies() {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "GET_TECNOLOGIES",
        payload: (await axios(`/tecnologias`)).data,
      });
    } catch (error) {
      console.error(
        error.message,
        "error en el pedido de todos las tecnologias: actions"
      );
    }
  };
}
