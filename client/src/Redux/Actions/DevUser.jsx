import axios from "axios";

export function postDevUser(payload) {
  return async function (dispatch) {
    console.log(payload, "Post action ");
    try {
      let json = (await axios.post(`/usuarios`, payload)).data;
      return dispatch({
        type: "POST_DEVUSER",
        payload: json,
      });
    } catch (error) {
      console.log("Catch del post");
      console.error(error.message, "error en el post: actions");
    }
  };
}

export function getUsersBd() {
  return async function (dispatch) {
    try {
      const users = (await axios.get(`/usuarios`)).data;
      return dispatch({
        type: "GET_USERSBD",
        payload: users,
      });
    } catch (error) {
      console.error("Error userBd");
    }
  };
}

export function getDevUsers(payload) {
  return async function (dispatch) {
    try {
      const devUsers = (await axios.get(`/usuarios`, payload)).data;
      return dispatch({
        type: "GET_DEVUSERS",
        payload: devUsers,
      });
    } catch (error) {
      console.error(error.message, "Error en el get DevUsers,actions");
    }
  };
}

export function getUserId(id) {
  console.log(id);
  return async function (dispatch) {
    try {
      const userId = (await axios.get(`/usuarios/${id}`)).data;
      console.log(userId, "este es el user id");
      return dispatch({
        type: "GET_USER_ID",
        payload: userId,
      });
    } catch (error) {
      console.log(error, "error TryCatch");
    }
  };
}
export function detailReset() {
  return function(dispatch) {
    return dispatch({
      type: "DETAIL_RESET",
      payload: [],
    })
  }
  
}