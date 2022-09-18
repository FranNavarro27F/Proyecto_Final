import React, { useEffect } from "react";
import s from "../NavBar/NavBar.module.css";
import logo from "../../Logo/Logo-Sin-Fondo.png";
import { getCountries } from "../../Redux/Actions/Countries";
import { getServices } from "../../Redux/Actions/Services";
import { useDispatch } from "react-redux";
import { getLanguajes } from "../../Redux/Actions/Languajes";
import { useState } from "react";
import { filtersOrders } from "../../Redux/Actions/FiltersOrders";
import { getUsersBd } from "../../Redux/Actions/DevUser";
import { AiOutlineClear } from "react-icons/ai";
import { getTecnologies } from "../../Redux/Actions/Tecnologies";
import FIlterTecnologie from "../Filters & Orders/Filters/FIlterTecnologie";
import FIlterServices from "../Filters & Orders/Filters/FilterServices";
import FIlterLenguajes from "../Filters & Orders/Filters/FilterLenguajes";
import FIlterCountries from "../Filters & Orders/Filters/FilterCountries";
import OrderyearsOfExperience from "../Filters & Orders/Order/OrderyearsOfExperience";
import OrderDailyBudget from "../Filters & Orders/Order/OrderDailyBudget";
import SearchBar from "../SearchBar/SearchBar";
import Profile from "../Login/UserProfile/Profile";

export default function NavBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersBd());
    dispatch(getCountries());
    dispatch(getTecnologies());
    dispatch(getServices());
    dispatch(getLanguajes());
  }, [dispatch]);

  const [actualFilter, setActualFilter] = useState({
    filterTecnologies: [],
    filterServices: [],
    filterLanguajes: [],
    filterCountries: [],
    OrderExp: "",
    OrderBud: "",
    name: "",
  });

  // const handleClear = () => {
  //   setActualFilter({
  //     filterTecnologies: [],
  //     filterServices: [],
  //     filterLanguajes: [],
  //     filterCountries: [],
  //     OrderExp: "",
  //     OrderBud: "",
  //     name: "",
  //   });
  //   setDefaultValue(!defaultvalue);
  // };
  // const [defaultvalue, setDefaultValue] = useState(false);

  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(filtersOrders(actualFilter));
  }, [dispatch, actualFilter]);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#85858566",
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#ca04f1" : "#c961de",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#cd03f5" : "blue",
      },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),
  };

  return (
    <header className={s.container}>
      <img src={logo} alt="programax" className={s.logo} />
      <SearchBar setActualFilter={setActualFilter} />
      <div className={s.divGen}>
        <FIlterCountries
          setOrder={setOrder}
          setActualFilter={setActualFilter}
          // defaultvalue={defaultvalue}
          customStyles={customStyles}
        />

        <FIlterLenguajes
          setOrder={setOrder}
          setActualFilter={setActualFilter}
          actualFilter={actualFilter}
          customStyles={customStyles}
        />

        <FIlterServices
          customStyles={customStyles}
          setOrder={setOrder}
          setActualFilter={setActualFilter}
        />

        <FIlterTecnologie
          customStyles={customStyles}
          setOrder={setOrder}
          setActualFilter={setActualFilter}
        />

        <OrderyearsOfExperience
          customStyles={customStyles}
          setOrder={setOrder}
          setActualFilter={setActualFilter}
        />
        <OrderDailyBudget
          setOrder={setOrder}
          customStyles={customStyles}
          setActualFilter={setActualFilter}
        />

        {/* <button className={s.buttonClear} onClick={() => handleClear()}>
          LIMPIAR FILTROS
          <AiOutlineClear />
        </button> */}

        {/* <button className={s.puntuacion}>Puntuación</button> */}
      </div>
    </header>
  );
}
