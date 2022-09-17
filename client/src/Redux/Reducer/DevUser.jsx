const initialState = {
  allUsers: [],
  details: [],
  filteredUsers: [],
  page: 1,
  devPerPage: 12,
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

    case "SET_CURRENT_PAGE":
      return {
        ...state,
        page: action.payload,
      };

    case "DEV_PER_PAGE":
      return {
        ...state,
        devPerPage: action.payload,
      };

    case "FILTERS_ORDERS":
      let {
        filterTecnologies,
        filterServices,
        filterLanguajes,
        filterCountries,
        OrderExp,
        OrderBud,
      } = action.payload;

      let filtro = [...state.allUsers];
      if (filterTecnologies?.length !== 0)
        filtro = [...state.allUsers]?.filter((ele) =>
          ele.tecnologias?.includes(filterTecnologies.toString())
        );

      if (filterServices?.length !== 0)
        filtro = [...filtro]?.filter((ele) =>
          ele.servicios?.includes(filterServices.toString())
        );

      if (filterLanguajes?.length !== 0)
        filtro = [...filtro]?.filter((ele) =>
          ele.lenguajes?.includes(filterLanguajes.toString())
        );

      if (filterCountries?.length !== 0)
        filtro = [...filtro]?.filter((ele) =>
          ele.country?.includes(filterCountries.toString())
        );

      //ORDENAMIENTOS
      // "yearsOfExperience": 1,
      //    "dailyBudget": 30,

      if (OrderExp === "asc") {
        filtro.sort((a, b) =>
          a.yearsOfExperience < b.yearsOfExperience ? -1 : 1
        );
      }
      if (OrderExp === "dsc") {
        filtro.sort((a, b) =>
          a.yearsOfExperience > b.yearsOfExperience ? -1 : 1
        );
      }
      if (OrderBud === "asc") {
        filtro.sort((a, b) => (a.dailyBudget < b.dailyBudget ? -1 : 1));
      }
      if (OrderBud === "dsc") {
        filtro.sort((a, b) => (a.dailyBudget > b.dailyBudget ? -1 : 1));
      }

      return {
        ...state,
        filteredUsers: filtro,
      };

    case "GET_USER_ID":
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
}
