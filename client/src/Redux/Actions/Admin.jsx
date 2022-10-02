import axios from "axios";

export function getLenAd(){

    return async function(dispatch){
        let lengAd = await axios.get(`/admin/lenguajes`)
        return dispatch({
            type: "GET_LEN_ADMIN",
            payload: lengAd.data
        })
    }

}


export function getServAd(){
    return async function(dispatch){
        let servAd = await axios.get(`/admin/servicios`)
        return dispatch({
            type: "GET_SERV_ADMIN",
            payload: servAd.data
        })
    }
}

export function getTecnAdmin(){
    return async function(dispatch){
        let tecAd = await axios.get(`/admin/tecnologias`)
        return dispatch({
            type: "GET_TEC_ADMIN",
            payload: tecAd.data
        })
    }
}


export function getPaisesAd(){
    return async function(dispatch){
        let paisesAd = await axios.get(`/admin/paises`)
        return dispatch({
            type: "GET_PAISES_ADMIN",
            payload: paisesAd.data
        })
    }
}


export function getUsersAdmin(){
    return async function(dispatch){
        let userAd = await axios.get(`/admin/usuarios`)
        return dispatch({
            type: "GET_USUARIOS_ADMIN",
            payload: userAd.data
        })
    }
}