import axios from "axios";

// const { nombreContratista, mailContrado } = req.body;
export function emailer(payload) {
  return async function() {
    try {
      await axios.post(`/emailer`, payload);
    } catch (e) {
      console.error(e, "error catch action emailer");
    }
  };
}

export function emailerPagado(payload) {
  return async function() {
    try {
      let response= await axios.post(`/emailer/pagado`, payload)
     // console.log("++++del back, empailer pagado",response,"del back, empailer pagado++++")
    } catch(e) {
      console.error(e, "error catch action emailer de pagado");
    }
  }
}

export function traerUsuarioID(id) {
  return async function(dispatch) {
    try {
      let info = (await axios.get(`/usuarios/${id}`)).data;
      
      return dispatch({
        type: "TRAER_USUARIO_ID",
        payload: info
      })
    } catch(e) {
      console.error(e, "error catch action TRAER USUARIO ID");
    }
  }
}

export function traerDeveloperID(id) {
  
  return async function(dispatch) {
    try {
      let info = (await axios.get(`/usuarios/${id}`)).data;
      
      return dispatch({
        type: "TRAER_DEVELOPER_ID",
        payload: info
      })
    } catch(e) {
      console.error(e, "error catch action TRAER DEVELOPER ID");
    }
  }
}
