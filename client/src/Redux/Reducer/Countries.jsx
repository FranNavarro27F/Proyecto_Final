const initialState = {
  allCountries: [],
  countriesId:[]
};

export default function countries(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        allCountries: action.payload,
      };
      case "GET_COUNTRIES_ID":
        return{
          ...state,
          countriesId: action.payload
        }

    default:
      return state;
  }
}


