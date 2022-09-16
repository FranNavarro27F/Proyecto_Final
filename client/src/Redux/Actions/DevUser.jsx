import axios from "axios";

export function postDevUser(payload) {
  return async function (dispatch) {
    console.log(payload)
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

export function getUsersBd() {
  return async function (dispatch) {
    try {
      const users = (await axios.get(`/usuarios`)).data;
      return dispatch({
        type: "GET_USERSBD",
        payload: users
      })
    } catch (error) {
      console.error("Error userBd")
    }
  }
}

export function getDevUsers(payload){
  return async function(dispatch){
    try{
      const devUsers = (await axios.get(`/usuarios`, payload)).data;
      return dispatch({
        type: "GET_DEVUSERS",
        payload: devUsers
      })
    }catch(error){
    console.error(error.message,"Error en el get DevUsers,actions")
    }
  }
}
