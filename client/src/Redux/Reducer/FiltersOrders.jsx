const initialState = {
 
  
};

export default function FiltersOrders(state = initialState, action) {
  switch (action.type) {
    case "FILTERS_ORDERS":
      let {filterTecnologies, filterServices, filterLanguajes } = action.payload
      let devUser = [...state.devUser]
      devUser = devUser.filter(s => s.tecnologies)

      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
}