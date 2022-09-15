const initialState = {
  devUser: [],
};

export default function FiltersOrders(state = initialState, action) {
  switch (action.type) {
    case "FILTER":
      
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
}