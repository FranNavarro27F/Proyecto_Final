const initialState = {
  devUsers: [],
  allUsers:[]
};

export default function countries(state = initialState, action) {
  switch (action.type) {
    case "POST_DEVUSER":
      return {
        ...state,
        countries: action.payload,
      };
      
      case "GET_DEVUSERS":
        return{
          ...state,
          devUsers: action.payload,

        }
        case "GET_USERSBD":
        return{
          ...state,
          allUsers:action.payload,
        };
    default:
      return state;
  }
}
