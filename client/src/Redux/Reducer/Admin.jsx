const initialState = {
    lengAdmin: [],
    paisAdmin: [],
    tecnAdmin: [],
    servAdmin: [],
    allUserAdmin: []
}


export default function adminAct(state = initialState, action){
    switch(action.type){
        case "GET_LEN_ADMIN":
            return{
                ...state,
                lengAdmin: action.payload
            }
        case "GET_SERV_ADMIN":
            return{
                ...state,
                servAdmin: action.payload
            }
        case "GET_PAISES_ADMIN":
            return{
                ...state,
                paisAdmin: action.payload
            }
        case "GET_TEC_ADMIN":
            return{
                ...state,
                tecnAdmin: action.payload
            }
        case "GET_USUARIOS_ADMIN":
            return{
                ...state,
                allUserAdmin: action.payload
            }
            default:
                return state
    }
}