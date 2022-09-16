const initialState = {
  allTecnologies: [],
};

export default function tecnologies(state = initialState, action) {
  switch (action.type) {
    case "GET_TECNOLOGIES":
      return {
        ...state,
        allTecnologies: action.payload,
      };

    default:
      return state;
  }
}
