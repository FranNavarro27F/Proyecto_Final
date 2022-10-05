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


export function putPaisesAdmin(payload){
    return async function(dispatch){
        try {
            let putPais = await axios.put(`/admin/paises`, payload)
            //console.log("Ingrese y ¿modifique?", putPais.data)
            return dispatch({
                type: "PUT_PAISES_ADMIN",
                payload: putPais.data
            })
        } catch (error) {
            console.log(error.message, "Error en el putPaises Admin, admin actions");
        }
    }
}

export function putLenguajesAdmin(payload){
    return async function(dispatch){
        try {
            let putLen = await axios.put(`/admin/lenguajes`, payload)
            return dispatch({
                type: "PUT_LEN_ADMIN",
                payload: putLen.data
            })
        } catch (error) {
            console.log(error.message, "Error en el putLenguajes Admin, admin actions");
        }
    }
}

export function putServiciosAdmin(payload){
    return async function(dispatch){
        try {
            let putServ = await axios.put(`/admin/servicios`, payload)
            return dispatch({
                type: "PUT_SERV_ADMIN",
                payload: putServ.data
            })
        } catch (error) {
            console.log(error.message, "Error en el putServicios Admin, admin actions");
        }
    }
}

export function putTecnologiasAdmin(payload){
    return async function(dispatch){
        try {
            let putTec = await axios.put(`/admin/tecnologias`, payload)
            return dispatch({
                type: "PUT_TEC_ADMIN",
                payload: putTec.data
            })
        } catch (error) {
            console.log(error.message, "Error en el putTecnologias Admin, admin actions");
        }
    }
}

export function putUsuarioAdmin(payload){
    return async function(dispatch){
        try {
            let putUser = await axios.put(`/admin/usuarios`, payload)
            return dispatch({
                type: "PUT_USER_ADMIN",
                payload: putUser.data
            })
        } catch (error) {
            console.log(error.message, "Error en el putUsuario Admin, admin actions");
        }
    }
}


export function newPaisAdmin(payload){
    return async function(dispatch){
        try {
            let postPais = await axios.post(`/admin/paises`, payload)
            return dispatch({
                type: "POST_PAIS_ADMIN",
                payload: postPais.data
            })
        } catch (error) {
            console.log(error.message, "Error en el post Admin, admin actions");
        }
    }
}

export function newLenguajeAdmin(payload){
    return async function(dispatch){
        try {
            let postLen = await axios.post(`/admin/lenguajes`, payload)
            return dispatch({
                type: "POST_LEN_ADMIN",
                payload: postLen.data
            })
        } catch (error) {
            console.log(error.message, "Error en el postLenguaje Admin, admin actions");
        }
    }
}

export function newServicioAdmin(payload){
    return async function(dispatch){
        try {
            let postServ = await axios.post(`/admin/servicios`, payload)
            return dispatch({
                type: "POST_SERV_ADMIN",
                payload: postServ.data
            })
        } catch (error) {
            console.log(error.message, "Error en el postServicio Admin, admin actions");
        }
    }
}


export function newTecnologiaAdmin(payload){
    return async function(dispatch){
        try {
            let postTec = await axios.post(`/admin/tecnologias`, payload)
            return dispatch({
                type: "POST_TEC_ADMIN",
                payload: postTec.data
            })
        } catch (error) {
            console.log(error.message, "Error en el postTecnologias Admin, admin actions");
        }
    }
}


export function cambioTabla(payload){
    try {
        return {
            type: "CAMBIO_TABLA",
            payload: payload
        }
        
    } catch (error) {
        
    }
}