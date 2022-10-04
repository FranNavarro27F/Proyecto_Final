import { async } from "@firebase/util";
import axios from "axios";
// este era para el pago de srtripe
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
    try {
      let propuestaCont = await axios.post(`/contratos`, propuestaContrato);
    } catch (e) {
      console.log("error en el cach de setear contrato", e);
    }
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

export function aceptarContrato(id) {
  return async function (dispatch) {
    try {
      const contratoAceptado = await axios.put(`/contratos/accept/${id}`);
    } catch (error) {
      console.error("Error en la Accion de aceptar contrato", error);
    }
  };
}

export function rechazarContrato(id) {
  return async function (dispatch) {
    try {
      await axios.put(`/contratos/cancel/${id}`);
    } catch (error) {
      console.error("Error en la Accion de rechazar contrato", error);
    }
  };
}

export function putContrato(id, data) {
  return async function (dispatch) {
    try {
      let modificacionContrato = await axios.put(`/contratos/${id}`, data);
    } catch (e) {
      console.log("**error en action el catch de putcontrato**", e);
    }
  };
}

export function resetContract() {
  return {
    type: "RESET_CONTRACT",
  };
}
