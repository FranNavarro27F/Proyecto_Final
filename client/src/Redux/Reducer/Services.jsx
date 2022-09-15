const initialState = {
  allServices: [],
};

export default function services(state = initialState, action) {
  switch (action.type) {
    case "GET_SERVICES":
      return {
        ...state,
        allServices: action.payload,
      };

    default:
      return state;
  }
}
