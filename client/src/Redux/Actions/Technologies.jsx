import axios from "axios";

export function getTechnologies() {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "GET_TECHNOLOGIES",
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
