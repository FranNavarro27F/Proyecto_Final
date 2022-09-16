export let initialState = {
  allUsers: [],
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
      };

    case "FILTERS_ORDERS":
      let { filterTecnologies, filterServices, filterLanguajes } =
        action.payload;
      let users = [...state.allUsers];
      let devUserFilter2 = users?.filter((ele) => {
        return ele.tecnologias?.map((ele) => ele === filterTecnologies);
      });
      console.log(devUserFilter2, "FILTER");

      return {
        ...state,
        allUsers: devUserFilter2,
      };
    default:
      return state;
  }
}
