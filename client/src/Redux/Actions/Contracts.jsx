import axios from "axios";

export function setearContratoGlobal(contrato) {
  return async function (dispatch) {
    return dispatch({
      type: "SETEO_CONTRATO_GLOBAL",
      payload: contrato,
    });
  };
}

export function setearContrato(propuestaContrato) {
  return async function (dispatch) {
    
    let propuestaCont = await axios.post(`/contratos`, propuestaContrato);

    console.log("****", propuestaCont, "*****");
  };
}

export function getContratoId(idContrato) {
  return async function (dispatch) {
    const idC = (await axios.get(`/contratos/${idContrato}`)).data;
    // console.log(idC, "789415213612");
    return dispatch({
      type: "GET_ID_CONTRATO",
      payload: idC,
    });
  };
}

export function aceptarContrato(id){
  return async function(dispatch){
    try {
      console.log(id,"actions contratos aceptar contrato")
      const contratoAceptado = await axios.put(`/contratos/accept/${id}`);
      console.log(contratoAceptado)
      
    } catch (error) {
      console.error("Error en la Accion de aceptar contrato", error)
    }
  }
}
