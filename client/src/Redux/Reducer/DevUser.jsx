const initialState = {};

export default function countries(state = initialState, action) {
  switch (action.type) {
    case "POST_DEVUSER":
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
}
