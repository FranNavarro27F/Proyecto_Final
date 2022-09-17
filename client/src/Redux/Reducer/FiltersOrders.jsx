// import { useSelector } from "react-redux";
// import { initialState as stateUsers } from "./DevUser.jsx";

// const initialState = {
//   allUsers: [...stateUsers.allUsers],
// };
// // console.log(stateUsers, "state");

// export default function FiltersOrders(state = initialState, action) {
//   switch (action.type) {
//     case "FILTERS_ORDERS":
//       let {
//         filterTecnologies,
//         filterServices,
//         filterLanguajes,
//         filterCountries,
//       } = action.payload;

//       let filtro = [...state.allUsers];
//       if (filterTecnologies?.length !== 0)
//         filtro = [...state.allUsers]?.filter((ele) =>
//           ele.tecnologias?.includes(filterTecnologies.toString())
//         );

//       if (filterServices?.length !== 0)
//         filtro = [...filtro]?.filter((ele) =>
//           ele.servicios?.includes(filterServices.toString())
//         );

//       if (filterLanguajes?.length !== 0)
//         filtro = [...filtro]?.filter((ele) =>
//           ele.lenguajes?.includes(filterLanguajes.toString())
//         );

//       if (filterCountries?.length !== 0)
//         filtro = [...filtro]?.filter((ele) =>
//           ele.country?.includes(filterCountries.toString())
//         );

//       //ORDENAMIENTOS
//       // "yearsOfExperience": 1,
//       //    "dailyBudget": 30,
//       console.log(filtro, "aca");

//       return {
//         ...state,
//         filteredUsers: filtro,
//       };
//     default:
//       return state;
//   }
// }
