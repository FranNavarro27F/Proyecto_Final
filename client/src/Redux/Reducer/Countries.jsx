 const initialState = {
  allCountries: [],
  contrato:{}

};

export default function countries(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        allCountries: action.payload,
      };
      case "SETEO_CONTRATO_GLOBAL":
        return {
          ...state,
          contrato: action.payload,
        };
    
    default:
      return state;
  }
}


