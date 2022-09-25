import axios from "axios";


export function setearContratoGlobal(contrato){
    return async function(dispatch){
        return dispatch({
            type: "SETEO_CONTRATO_GLOBAL",
            payload: contrato
        })
    }
}