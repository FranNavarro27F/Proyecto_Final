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
import makeAnimated from "react-select/animated";

//actions
import { filtersOrders } from "../../Redux/Actions/FiltersOrders";
import { HiOutlineSearch } from "react-icons/hi";
import Selectores from "../Selectores/Selectores";

export default function NavBar() {
  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();
  const {
    optionsOrderBudget,
    optionsOrderExp,
    optionsTecnologias,
    optionsLanguajes,
    optionsCountries,
    optionsServices,
  } = Selectores();

  const filtrados = useSelector((state) => state.devUser.filteredUsers);

  // const [checked, setChecked] = useState(false);
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
    name: cacheFilter?.name ? cacheFilter?.name : "",
  });

  const refCountries = useRef();
  const refServices = useRef();
  const refLanguajes = useRef();
  const refTecnologies = useRef();
  const refExperience = useRef();
  const refBudget = useRef();
  const refSearch = useRef();

  const handleClear = () => {
    refSearch.current.value = "";
    refCountries.current.clearValue();
    refServices.current.clearValue();
    refLanguajes.current.clearValue();
    refTecnologies.current.clearValue();
    refExperience.current.setValue({
      value: "default",
      label: "Ordenar por costo diario",
    });
    refBudget.current.setValue({
      value: "default",
      label: "Ordenar por costo diario",
    });

    setActualFilter({
      name: "",
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
      name: ("name", ""),
    });
  };
  const handleDefault = cacheFilter?.filterLanguajes
    ? cacheFilter?.filterLanguajes.map((e) => {
        return {
          label: e,
        };
      })
    : false;

  const handleDefaultCountrie = cacheFilter?.filterCountries
    ? cacheFilter?.filterCountries.map((e) => {
        return {
          label: e,
        };
      })
    : false;

  const handleDefaultService = cacheFilter?.filterServices
    ? cacheFilter?.filterServices.map((e) => {
        return {
          label: e,
        };
      })
    : false;
  const handleDefaultTecnologies = cacheFilter?.filterTecnologies
    ? cacheFilter?.filterTecnologies.map((e) => {
        return {
          label: e,
        };
      })
    : false;

  // if (window.performance) {
  //   console.info("window.performance works fine on this browser");
  // }

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
        <span> Limpiar filtros</span>
        <AiOutlineClear />
      </button>

      <div className={s.bodySearch}>
        <form>
          <span>
            <HiOutlineSearch />
          </span>

          <input
            value={cacheFilter?.name}
            className={s.searchBar}
            type={"search"}
            placeholder={"Buscar..."}
            onChange={(e) => {
              // if(!checked){
              //   dispatch( searchInput(e.target.value) )
              //   console.log("checked", e.target.value)
              // }else{
              // console.log("no check", e.target.value)
              e.preventDefault();
              setActualFilter({
                ...actualFilter,
                name: e.target.value,
              });
              setCacheFilter({
                ...cacheFilter,
                name: e.target.value,
              });
              // }
            }}
            ref={refSearch}
          ></input>
        </form>
      </div>
      <div className={s.divGen}>
        <div className={s.filterCountrie}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
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
            defaultValue={handleDefaultCountrie}
            theme={(theme) => ({
              ...theme,
              borderRadius: 20,
              colors: {
                ...theme.colors,
                text: "#adadad",
                font: "#9b5cffb9",
                primary25: "#9b5cffb9",
                primary: "#9b5cffb9",
                neutral80: "#464646c7",
                neutral50: "#ffffffc8",
                color: "black",
              },
            })}
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
            closeMenuOnSelect={false}
            components={animatedComponents}
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
            defaultValue={handleDefault}
            theme={(theme) => ({
              ...theme,
              borderRadius: 20,
              colors: {
                ...theme.colors,
                text: "#adadad",
                font: "#9b5cffb9",
                primary25: "#9b5cffb9",
                primary: "#9b5cffb9",
                neutral80: "#464646c7",
                neutral50: "#ffffffc8",
                color: "black",
              },
            })}
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
            closeMenuOnSelect={false}
            components={animatedComponents}
            ref={refServices}
            className={s.select}
            set-value={cacheFilter?.filterServices}
            isDisabled={false}
            options={optionsServices}
            isClearable={true}
            isSearchable={true}
            isMulti={true}
            defaultValue={handleDefaultService}
            placeholder="Filtra por servicios..."
            theme={(theme) => ({
              ...theme,
              borderRadius: 20,
              colors: {
                ...theme.colors,
                text: "#adadad",
                font: "#9b5cffb9",
                primary25: "#9b5cffb9",
                primary: "#9b5cffb9",
                neutral80: "#464646c7",
                neutral50: "#ffffffc8",
                color: "black",
              },
            })}
            styles={customStyles}
          />
        </div>
        <div>
          <Select
            onChange={(e) => {
              console.log(e);
              setActualFilter({
                ...actualFilter,
                filterTecnologies: e.map((e) => e.label),
              });
              setCacheFilter({
                ...cacheFilter,
                filterTecnologies: e.map((e) => e.label),
              });
            }}
            closeMenuOnSelect={false}
            components={animatedComponents}
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
            defaultValue={handleDefaultTecnologies}
            theme={(theme) => ({
              ...theme,
              borderRadius: 20,
              colors: {
                ...theme.colors,
                text: "#adadad",
                font: "#9b5cffb9",
                primary25: "#9b5cffb9",
                primary: "#9b5cffb9",
                neutral80: "#464646c7",
                neutral50: "#ffffffc8",
                color: "black",
              },
            })}
          />
        </div>
        <div>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
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
            theme={(theme) => ({
              ...theme,
              borderRadius: 20,
              colors: {
                ...theme.colors,
                text: "#adadad",
                font: "#9b5cffb9",
                primary25: "#9b5cffb9",
                primary: "#9b5cffb9",
                neutral80: "#ffffffc8",
                neutral50: "#ffffffc8",
                color: "black",
              },
            })}
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
            closeMenuOnSelect={false}
            components={animatedComponents}
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
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                text: "#adadad",
                font: "#9b5cffb9",
                primary25: "#9b5cffb9",
                primary: "#9b5cffb9",
                neutral80: "#ffffffc8",
                neutral50: "#ffffffc8",
                color: "black",
              },
            })}
          />
        </div>

        {/* <button className={s.puntuacion}>Puntuación</button> */}
      </div>
    </header>
  );
}
