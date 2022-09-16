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
export function getCountriesId(id){
  return async function(dispatch){
    const paisesId= (await axios (`/paises/${id}`)).data;
    return dispatch({
      type: "GET_COUNTRIES_ID",
      payload: paisesId
    })
  }
}
