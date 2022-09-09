const initialState = {};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USERS": //puse users para que no rompa
      break;

    default:
      return state;
  }
}
