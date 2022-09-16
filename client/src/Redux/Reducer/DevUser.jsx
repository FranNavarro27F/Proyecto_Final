export let initialState = {
  allUsers: [],
  filteredUsers: [],
};

export default function devUser(state = initialState, action) {
  switch (action.type) {
    case "POST_DEVUSER":
      return {
        ...state,
        allUsers: action.payload,
      };

    case "GET_USERSBD":
      return {
        ...state,
        allUsers: action.payload,
        filteredUsers: action.payload,
      };

    case "FILTERS_ORDERS":
      let { filterTecnologies, filterServices, filterLanguajes } =
        action.payload;

      let filtro = [...state.allUsers];
      if (filterTecnologies?.length !== 0)
        filtro = [...state.allUsers]?.filter((ele) =>
          ele.tecnologias?.includes(filterTecnologies.toString())
        );

      if (filterServices?.length !== 0)
        filtro = [...state.allUsers]?.filter((ele) =>
          ele.servicios?.includes(filterServices.toString())
        );

      if (filterLanguajes?.length !== 0)
        filtro = [...state.allUsers]?.filter((ele) =>
          ele.lenguajes?.includes(filterLanguajes.toString())
        );

      return {
        ...state,
        filteredUsers: filtro,
      };
    default:
      return state;
  }
}
