const initialState = {
  allTechnologies: [],
};

export default function technologies(state = initialState, action) {
  switch (action.type) {
    case "GET_TECHNOLOGIES":
      return {
        ...state,
        allTechnologies: action.payload,
      };

    default:
      return state;
  }
}
