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

      console.log(filterTecnologies, "alla");
      let users = [...state.filteredUsers];

      const filtroFind = users?.filter((ele) =>
        ele.tecnologias?.includes(filterTecnologies.toString())
      );
      // const filtroFind = users?.find((ele) =>
      //   ele.tecnologias?.includes(filterTecnologies.toString())
      // );
      // const filtro2 = Object.entries(filtroFind);
      console.log(filtroFind, "FILTER");

      return {
        ...state,
        filteredUsers:
          filterTecnologies.length === 0 ? [...state.allUsers] : filtroFind,
      };
    default:
      return state;
  }
}
