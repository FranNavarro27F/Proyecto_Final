const initialState = {
  allLanguajes: [],
};

export default function countries(state = initialState, action) {
  switch (action.type) {
    case "GET_LANGUAJES":
      return {
        ...state,
        allLanguajes: action.payload,
      };

    default:
      return state;
  }
}
