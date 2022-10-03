const initialState = {
    lengAdmin: [],
    paisAdmin: [],
    tecnAdmin: [],
    servAdmin: [],
    allUserAdmin: [],
    auxOr: true
}


export default function adminAct(state = initialState, action){
    switch(action.type){
        case "GET_LEN_ADMIN":
            return{
                ...state,
                lengAdmin: action.payload,
                
            }
            
        case "GET_SERV_ADMIN":
            return{
                ...state,
                servAdmin: action.payload
            }

        case "GET_PAISES_ADMIN":
            return{
                ...state,
                paisAdmin: action.payload,
                orderPais: action.payload
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

        case "PUT_PAISES_ADMIN":
            return {
                  ...state,
                  paisAdmin: [...state.paisAdmin, action.payload],
            };
          
        case "PUT_LEN_ADMIN":
            return {
                  ...state,
                  lengAdmin: [...state.lengAdmin, action.payload],
            };
        
        case "PUT_SERV_ADMIN":
            return {
                ...state,
                servAdmin: [...state.servAdmin, action.payload],
            };
              
        case "PUT_TEC_ADMIN":
                    return {
                      ...state,
                      tecnAdmin: [...state.tecnAdmin, action.payload],
                    };

        case "PUT_USER_ADMIN":
            return {
                ...state,
                allUserAdmin: [...state.allUserAdmin, action.payload],
            };

        case "POST_PAISES_ADMIN":
                return {
                    ...state,
                    paisAdmin: [...state.paisAdmin, action.payload],
                };
                      
        case "POST_LEN_ADMIN":
            return {
                ...state,
                lengAdmin: [...state.lengAdmin, action.payload],
            };
                    
        case "POST_SERV_ADMIN":
            return {
                ...state,
                servAdmin: [...state.servAdmin, action.payload],
            };
                          
        case "POST_TEC_ADMIN":
            return {
                 ...state,
                 tecnAdmin: [...state.tecnAdmin, action.payload],
            };
        case "CAMBIO_TABLA":
            return{
                ...state,
                auxOr: action.payload
            }
            default:
                return state
    }
}