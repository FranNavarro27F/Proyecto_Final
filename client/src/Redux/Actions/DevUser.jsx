import axios from "axios";

export function putDevUser(payload) {
  return async function (dispatch) {
    console.log("PUT action", payload);
    try {
      let json = (await axios.put(`/usuarios`, payload)).data;
      return dispatch({
        type: "PUT_DEVUSER",
        payload: json,
      });
    } catch (error) {
      console.log("Catch del post");
      console.error(error.message, "error en el post: actions");
    }
  };
}
export function postDevUser(payload) {
  return async function (dispatch) {
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
      console.log(error.message, "Error en el get DevUsers,actions");
    }
  };
}
export function getUserId(id) {
  return async function (dispatch) {
    try {
      const userId = (await axios.get(`/usuarios/${id}`)).data;
      return dispatch({
        type: "GET_USER_ID",
        payload: userId,
      });
    } catch (error) {
      console.log(error, "error TryCatch user by id");
    }
  };
}

export function getUserEmail(email) {
  return async function (dispatch) {
    try {
      const userEmail = (await axios.get(`/usuarios?email=${email}`)).data;
      return dispatch({
        type: "GET_USER_EMAIL",
        payload: userEmail,
      });
    } catch (error) {
      console.log(error, "error TryCatch");
    }
  };
}
export function detailReset() {
  return {
    type: "DETAIL_RESET",
  };
}

export function getUserSearchBar() {
  return async function (dispatch) {
    const userSB = (await axios.get(`/usuarios`)).data;
    return dispatch({
      type: "GET_USER_SEARCHBAR",
      payload: userSB,
    });
  };
}

export function detailIdDev(id) {
  return function (dispatch) {
    return dispatch({
      type: "DETAIL_ID_DEV",
      payload: id,
    });
  };
}

export function getUserContrato(email) {
  return async function (dispatch) {
    let userId = (await axios.get(`/usuarios?=${email}`)).data;
    return dispatch({
      type: "USER_CONTRATO",
      payload: userId,
    });
  };
}

export function setUserVisible(visible, id) {
  console.log(visible, "botyy");
  console.log(id, "id");
  return async function (dispatch) {
    try {
      return dispatch({
        type: "USER_VISIBLE",
        payload: (await axios.put(`/usuarios/visible/${id}`, { visible })).data,
      });
    } catch (e) {
      console.error(e, "error catch action subscription MercadoPago");
    }
  };
}
