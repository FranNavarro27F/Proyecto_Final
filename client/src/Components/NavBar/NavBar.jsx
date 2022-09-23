import React, { useEffect } from "react";
import s from "../NavBar/NavBar.module.css";
import logo from "../../Logo/Logo-Sin-Fondo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { customStyles } from "./StyleSelect";
import { AiOutlineClear } from "react-icons/ai";

//actions
import { filtersOrders } from "../../Redux/Actions/FiltersOrders";

//modularizacion
import FIlterTecnologie from "../Filters & Orders/Filters/FIlterTecnologie";
import FIlterServices from "../Filters & Orders/Filters/FilterServices";
import FIlterLenguajes from "../Filters & Orders/Filters/FilterLenguajes";
import FIlterCountries from "../Filters & Orders/Filters/FilterCountries";
import OrderyearsOfExperience from "../Filters & Orders/Order/OrderyearsOfExperience";
import OrderDailyBudget from "../Filters & Orders/Order/OrderDailyBudget";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  const dispatch = useDispatch();

  const filtrados = useSelector((state) => state.devUser.filteredUsers);

  const [cacheFilter, setCacheFilter] = useLocalStorage({});
  const [actualFilter, setActualFilter] = useState({
    filterTecnologies: cacheFilter?.filterTecnologies
      ? cacheFilter?.filterTecnologies
      : [],
    filterServices: cacheFilter?.filterServices
      ? cacheFilter?.filterServices
      : [],
    filterLanguajes: cacheFilter?.filterLanguajes
      ? cacheFilter?.filterLanguajes
      : [],
    filterCountries: cacheFilter?.filterCountries
      ? cacheFilter?.filterCountries
      : [],
    OrderExp: cacheFilter?.OrderExp ? cacheFilter?.OrderExp : "",
    OrderBud: cacheFilter?.OrderBud ? cacheFilter?.OrderBud : "",
    name: "",
  });

  const handleClear = () => {
    setActualFilter({
      filterTecnologies: [],
      filterServices: [],
      filterLanguajes: [],
      filterCountries: [],
      OrderExp: "",
      OrderBud: "",
    });
    setCacheFilter({
      filterTecnologies: ("filterTecnologies", []),
      filterServices: ("filterServices", []),
      filterLanguajes: ("filterLanguajes", []),
      filterCountries: ("filterCountries", []),
      OrderExp: ("OrderExp", ""),
      OrderBud: ("OrderBud", ""),
    });
  };

  useEffect(() => {
    if (cacheFilter) dispatch(filtersOrders(actualFilter));
  }, [dispatch, actualFilter, cacheFilter]);

  return (
    <header className={s.container}>
      <Link to="/">
        <img src={logo} alt="programax" className={s.logo} />
      </Link>
      <button
        className={!filtrados.length ? s.buttonClearAlert : s.buttonClear}
        onClick={() => handleClear()}
      >
        <span> LIMPIAR FILTROS</span>
        <AiOutlineClear />
      </button>
      <SearchBar setActualFilter={setActualFilter} />
      <div className={s.divGen}>
        <FIlterCountries
          setActualFilter={setActualFilter}
          actualFilter={actualFilter}
          setCacheFilter={setCacheFilter}
          cacheFilter={cacheFilter}
          customStyles={customStyles}
        />
        <FIlterLenguajes
          setActualFilter={setActualFilter}
          actualFilter={actualFilter}
          setCacheFilter={setCacheFilter}
          cacheFilter={cacheFilter}
          customStyles={customStyles}
        />
        <FIlterServices
          customStyles={customStyles}
          setActualFilter={setActualFilter}
          actualFilter={actualFilter}
          setCacheFilter={setCacheFilter}
          cacheFilter={cacheFilter}
        />
        <FIlterTecnologie
          customStyles={customStyles}
          setActualFilter={setActualFilter}
          actualFilter={actualFilter}
          setCacheFilter={setCacheFilter}
          cacheFilter={cacheFilter}
        />
        <OrderyearsOfExperience
          customStyles={customStyles}
          setActualFilter={setActualFilter}
          actualFilter={actualFilter}
          setCacheFilter={setCacheFilter}
          cacheFilter={cacheFilter}
        />
        <OrderDailyBudget
          customStyles={customStyles}
          setActualFilter={setActualFilter}
          actualFilter={actualFilter}
          setCacheFilter={setCacheFilter}
          cacheFilter={cacheFilter}
        />

        {/* <button className={s.puntuacion}>Puntuación</button> */}
      </div>
    </header>
  );
}
