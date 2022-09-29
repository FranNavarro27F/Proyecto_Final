import axios from "axios";


export function setearContratoGlobal(contrato){
    return async function(dispatch){
        return dispatch({
            type: "SETEO_CONTRATO_GLOBAL",
            payload: contrato
        })
    }
}


export function setearContrato(propuestaContrato){
    return async function (dispatch){
        // console.log("***actions/contratos", propuestaContrato ,"action/contratos****")

        let propuestaCont= await axios.post(`/contratos`, propuestaContrato)

        console.log("****",propuestaCont,"*****")
    }
}