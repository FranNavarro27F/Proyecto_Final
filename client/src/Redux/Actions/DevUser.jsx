import axios from "axios";

export function postDevUser(payload) {
  return async function (dispatch) {
    try {
      let json = (await axios.post(`/usuarios`, payload)).data;
      return dispatch({
        type: "POST_DEVUSER",
        payload: json,
      });
    } catch (error) {
      console.error(error.message, "error en el post: actions");
    }
  };
}
