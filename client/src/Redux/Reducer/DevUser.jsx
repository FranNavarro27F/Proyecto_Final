const initialState = {
  allUsers: [],
  details: [],
  filteredUsers: [],
  page: 1,
  devPerPage: 10,
  usuariosSB: [],
  userByEmail: [],
  flag: true,
  idDev: "",
  employer: [],
  loader: true,
};

export default function devUser(state = initialState, action) {
  switch (action.type) {
    case "POST_DEVUSER":
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };

    case "PUT_DEVUSER":
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };

    case "GET_USERSBD":
      return {
        ...state,
        allUsers: action.payload,
        filteredUsers: action.payload,
        scroll: false,
        loader: false,
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
        name,
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
          ele.paiseId?.includes(filterCountries.toString())
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

      //-----------------searchBar----------------------
      if (name) {
        let nameFilter = filtro.filter((cur) =>
          cur.name.toLowerCase().includes(name.toLowerCase())
        );

        let lastNameFilter = filtro.filter((cur) =>
          cur.lastName.toLowerCase().includes(name.toLowerCase())
        );

        let dailyBudgetFilter = filtro.filter((cur) => cur.dailyBudget == name);

        let paisesFilter = filtro.filter((cur) =>
          cur.paiseId.toLowerCase().includes(name.toLowerCase())
        );

        let lenguajesFilter6 = filtro.filter((cur) => {
          let hayL = cur.lenguajes.filter((curr) =>
            curr.toLowerCase().includes(name.toLowerCase())
          );
          if (hayL.length !== 0) {
            return true;
          } else {
            return false;
          }
        });
        let serviciosFilter = filtro.filter((cur) => {
          let hayS = cur.servicios.filter((cur) =>
            cur.toLowerCase().includes(name.toLowerCase())
          );
          if (hayS.length !== 0) {
            return true;
          } else {
            return false;
          }
        });
        let tecnologiasFilter = filtro.filter((cur) => {
          let hayT = cur.tecnologias.filter((cur) =>
            cur.toLowerCase().includes(name.toLowerCase())
          );
          if (hayT.length !== 0) {
            return true;
          } else {
            return false;
          }
        });
        let resultadosConcatenados = [
          ...nameFilter,
          ...lastNameFilter,
          ...dailyBudgetFilter,
          ...paisesFilter,
          ...lenguajesFilter6,
          ...serviciosFilter,
          ...tecnologiasFilter,
        ];

        function removeDuplicates(originalArray, prop) {
          let arr = [];
          let lookupObject = {};
          for (let i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
          }
          for (let j in lookupObject) {
            arr.push(lookupObject[j]);
          }
          return arr;
        }

        var uniqueArray = removeDuplicates(resultadosConcatenados, "email");

        filtro = uniqueArray;
      }

      return {
        ...state,
        filteredUsers: filtro,
      };
    //-------------------------------------------
    case "SEARCH_INPUT":
      let Usuarios = [...state.usuariosSB];

      console.log(action.payload);

      let nameFilter = Usuarios.filter((cur) =>
        cur.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      let lastNameFilter = Usuarios.filter((cur) =>
        cur.lastName.toLowerCase().includes(action.payload.toLowerCase())
      );

      let dailyBudgetFilter = Usuarios.filter(
        (cur) => cur.dailyBudget == action.payload
      );

      let paisesFilter = Usuarios.filter((cur) =>
        cur.paiseId.toLowerCase().includes(action.payload.toLowerCase())
      );

      let lenguajesFilter6 = Usuarios.filter((cur) => {
        let hayL = cur.lenguajes.filter((curr) =>
          curr.toLowerCase().includes(action.payload.toLowerCase())
        );
        if (hayL.length !== 0) {
          return true;
        } else {
          return false;
        }
      });
      let serviciosFilter = Usuarios.filter((cur) => {
        let hayS = cur.servicios.filter((cur) =>
          cur.toLowerCase().includes(action.payload.toLowerCase())
        );
        if (hayS.length !== 0) {
          return true;
        } else {
          return false;
        }
      });
      let tecnologiasFilter = Usuarios.filter((cur) => {
        let hayT = cur.tecnologias.filter((cur) =>
          cur.toLowerCase().includes(action.payload.toLowerCase())
        );
        if (hayT.length !== 0) {
          return true;
        } else {
          return false;
        }
      });
      let resultadosConcatenados = [
        ...nameFilter,
        ...lastNameFilter,
        ...dailyBudgetFilter,
        ...paisesFilter,
        ...lenguajesFilter6,
        ...serviciosFilter,
        ...tecnologiasFilter,
      ];

      function removeDuplicates(originalArray, prop) {
        let arr = [];
        let lookupObject = {};
        for (let i in originalArray) {
          lookupObject[originalArray[i][prop]] = originalArray[i];
        }
        for (let j in lookupObject) {
          arr.push(lookupObject[j]);
        }
        return arr;
      }

      var uniqueArray2 = removeDuplicates(resultadosConcatenados, "email");

      return {
        ...state,
        filteredUsers: uniqueArray2,
        loader: false,
      };

    case "GET_USER_ID":
      return {
        ...state,
        details: action.payload,
        loader: false,
      };

    case "GET_USER_EMAIL":
      return {
        ...state,
        userByEmail: action.payload,
      };

    case "DETAIL_RESET":
      return {
        ...state,
        details: [],
      };
    case "GET_USER_SEARCHBAR":
      return {
        ...state,
        usuariosSB: action.payload,
      };

    case "DETAIL_ID_DEV":
      return {
        ...state,
        idDev: action.payload,
      };

    case "USER_CONTRATO":
      return {
        ...state,
        employer: action.payload,
      };

    default:
      return state;
  }
}
