const initialState = {
  allCountries: [],
};

export default function countries(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        allCountries: action.payload,
      };

    default:
      return state;
  }
}
