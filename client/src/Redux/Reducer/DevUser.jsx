export const initialState = {
  allUsers:[]
};

export default function devUser(state = initialState, action) {
  switch (action.type) {
    case "POST_DEVUSER":
      return {
        ...state,
        allUsers: action.payload,
      };
      
  
        case "GET_USERSBD":
        return{
          ...state,
          allUsers:action.payload,
        };
    default:
      return state;
  }
}

