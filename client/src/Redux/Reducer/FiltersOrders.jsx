import { initialState as stateUsers} from './DevUser'

const initialState={
    allUs:[...stateUsers.allUsers],
}

export default function FiltersOrders(state = initialState, action) {
  switch (action.type) {
    case "FILTERS_ORDERS":
        //const devUserFilter = allUsers;
      let {filterTecnologies, filterServices, filterLanguajes } = action.payload;
      console.log(allUs,"estamosaca")
     return{
        ...state,
        // allUsers: devUserFilter,
      };

    default:
      return state;
  }
}