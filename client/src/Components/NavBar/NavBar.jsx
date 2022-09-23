import React, { useEffect, useRef } from "react";
import s from "../NavBar/NavBar.module.css";
import logo from "../../Logo/Logo-Sin-Fondo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { customStyles } from "./StyleSelect";
import { AiOutlineClear } from "react-icons/ai";
import Select from "react-select";
import SearchBar from "../SearchBar/SearchBar";
import Selectores from "../Selectores/Selectores";

//actions
import { filtersOrders } from "../../Redux/Actions/FiltersOrders";
import { getUsersBd } from "../../Redux/Actions/DevUser";

export default function NavBar() {
  const {
    optionsOrderBudget,
    optionsOrderExp,
    optionsTecnologias,
    optionsLanguajes,
    optionsCountries,
    optionsServices,
  } = Selectores();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersBd());
  }, [dispatch]);

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

  const refCountries = useRef();
  const refServices = useRef();
  const refLanguajes = useRef();
  const refTecnologies = useRef();
  const refExperience = useRef();
  const refBudget = useRef();

  const handleClear = () => {
    refCountries.current.clearValue();
    refServices.current.clearValue();
    refLanguajes.current.clearValue();
    refTecnologies.current.clearValue();
    refExperience.current.setValue({ value: "default", label: "Todos" });
    refBudget.current.setValue({ value: "default", label: "Todos" });

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
        <div className={s.filterCountrie}>
          <Select
            ref={refCountries}
            set-value={cacheFilter?.filterCountries}
            options={optionsCountries}
            onChange={(e) => {
              setActualFilter({
                ...actualFilter,
                filterCountries: e.map((e) => e.value),
              });
              setCacheFilter({
                ...cacheFilter,
                filterCountries: e.map((e) => e.value),
              });
            }}
            className={s.select}
            isDisabled={false}
            isClearable={true}
            isSearchable={true}
            isMulti={true}
            placeholder="Filtra por país..."
            styles={customStyles}
          />
        </div>
        <div>
          <Select
            onChange={(e) => {
              setActualFilter({
                ...actualFilter,
                filterLanguajes: e.map((e) => e.label),
              });
              setCacheFilter({
                ...cacheFilter,
                filterLanguajes: e.map((e) => e.label),
              });
            }}
            ref={refLanguajes}
            set-value={cacheFilter?.filterLanguajes}
            className={s.select}
            isDisabled={false}
            options={optionsLanguajes}
            isClearable={true}
            isSearchable={true}
            isMulti={true}
            placeholder="Filtra por lenguaje..."
            styles={customStyles}
          />
        </div>
        <div>
          <Select
            onChange={(e) => {
              setActualFilter({
                ...actualFilter,
                filterServices: e.map((e) => e.label),
              });
              setCacheFilter({
                ...cacheFilter,
                filterServices: e.map((e) => e.label),
              });
            }}
            ref={refServices}
            className={s.select}
            set-value={cacheFilter?.filterServices}
            isDisabled={false}
            options={optionsServices}
            isClearable={true}
            isSearchable={true}
            isMulti={true}
            placeholder="Filtra por servicios..."
            styles={customStyles}
          />
        </div>
        <div>
          <Select
            onChange={(e) => {
              setActualFilter({
                ...actualFilter,
                filterTecnologies: e.map((e) => e.label),
              });
              setCacheFilter({
                ...cacheFilter,
                filterTecnologies: e.map((e) => e.label),
              });
            }}
            ref={refTecnologies}
            set-value={cacheFilter?.filterTecnologies}
            className={s.select}
            isDisabled={false}
            options={optionsTecnologias}
            isClearable={true}
            isSearchable={true}
            isMulti={true}
            placeholder="Filtra por tecnología..."
            styles={customStyles}
          />
        </div>
        <div>
          <Select
            ref={refExperience}
            set-value={cacheFilter?.OrderExp}
            onChange={(e) => {
              setActualFilter({
                ...actualFilter,
                OrderExp: e.value,
              });
              setCacheFilter({
                ...cacheFilter,
                OrderExp: e.value,
              });
            }}
            className={s.select}
            isDisabled={false}
            options={optionsOrderExp}
            isClearable={false}
            isSearchable={false}
            isMulti={false}
            placeholder="Ordenar por experiencia"
            styles={customStyles}
          />
        </div>
        <div>
          <Select
            ref={refBudget}
            onChange={(e) => {
              setActualFilter({
                ...actualFilter,
                OrderBud: e.value,
              });
              setCacheFilter({
                ...cacheFilter,
                OrderBud: e.value,
              });
            }}
            set-value={cacheFilter?.OrderBud}
            className={s.select}
            isDisabled={false}
            options={optionsOrderBudget}
            isClearable={false}
            isSearchable={false}
            isMulti={false}
            placeholder="Ordenar por costo diario"
            styles={customStyles}
          />
        </div>

        {/* <button className={s.puntuacion}>Puntuación</button> */}
      </div>
    </header>
  );
}
