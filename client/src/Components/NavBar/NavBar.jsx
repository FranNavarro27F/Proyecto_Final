import React, { useEffect } from "react";
import s from "../NavBar/NavBar.module.css";
import Select from "react-select";
import { HiOutlineSearch } from "react-icons/hi";
import { getCountries } from "../../Redux/Actions/Countries";

import { getServices } from "../../Redux/Actions/Services";
import { useDispatch, useSelector } from "react-redux";
import { getLanguajes } from "../../Redux/Actions/Languajes";
import { useState } from "react";
import { filtersOrders } from "../../Redux/Actions/FiltersOrders";
import { getUsersBd } from "../../Redux/Actions/DevUser";

import { getTecnologies } from "../../Redux/Actions/Tecnologies";
import FIlterTecnologie from "../Filters & Orders/Filters/FIlterTecnologie";
import FIlterServices from "../Filters & Orders/Filters/FilterServices";
import FIlterLenguajes from "../Filters & Orders/Filters/FeilterLenguajes";

export default function NavBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersBd());
    dispatch(getCountries());
    dispatch(getTecnologies());
    dispatch(getServices());
    dispatch(getLanguajes());
  }, [dispatch]);

  const countries = useSelector((state) => state.countries.allCountries);

  const [actualFilter, setActualFilter] = useState({
    filterTecnologies: [],
    filterServices: [],
    filterLanguajes: [],
  });

  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(filtersOrders(actualFilter));
  }, [dispatch, actualFilter]);

  const optionsCountries = countries.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  return (
    <header>
      <div className={s.divGen}>
        <form>
          <input
            className={s.searchBar}
            type="text"
            placeholder="Search..."
          ></input>
          <HiOutlineSearch />
        </form>

        <Select
          className={s.select}
          isDisabled={false}
          options={optionsCountries}
          isClearable={true}
          isSearchable={true}
          isMulti={true}
          placeholder="Seleciona Paises"
        />

        <FIlterLenguajes
          setOrder={setOrder}
          setActualFilter={setActualFilter}
        />

        <FIlterServices setOrder={setOrder} setActualFilter={setActualFilter} />

        <FIlterTecnologie
          setOrder={setOrder}
          setActualFilter={setActualFilter}
        />

        <button className={s.puntuacion}>Puntuación</button>
      </div>
    </header>
  );
}
