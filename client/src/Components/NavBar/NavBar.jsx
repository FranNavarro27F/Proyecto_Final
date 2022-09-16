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
import { AiOutlineClear } from "react-icons/ai";
import { getTecnologies } from "../../Redux/Actions/Tecnologies";
import FIlterTecnologie from "../Filters & Orders/Filters/FIlterTecnologie";
import FIlterServices from "../Filters & Orders/Filters/FilterServices";
import FIlterLenguajes from "../Filters & Orders/Filters/FilterLenguajes";
import FIlterCountries from "../Filters & Orders/Filters/FilterCountries";
import OrderyearsOfExperience from "../Filters & Orders/Order/OrderyearsOfExperience";
import OrderDailyBudget from "../Filters & Orders/Order/OrderDailyBudget";

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
  });

  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(filtersOrders(actualFilter));
  }, [dispatch, actualFilter]);

  const handleClear = () => {
    document.getElementById("selectTecnologie").selectedIndex = 0;
    // document.getElementById("selectContinent").selectedIndex = 0;
    // document.getElementById("selectAz").selectedIndex = 0;
    // document.getElementById("selectPop").selectedIndex = 0;
  };

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

        <FIlterCountries
          setOrder={setOrder}
          setActualFilter={setActualFilter}
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
        <OrderyearsOfExperience
          setOrder={setOrder}
          setActualFilter={setActualFilter}
        />
        <OrderDailyBudget
          setOrder={setOrder}
          setActualFilter={setActualFilter}
        />
        <button className={s.buttonClear} onClick={handleClear}>
          <AiOutlineClear />
        </button>
        <button className={s.puntuacion}>Puntuación</button>
      </div>
    </header>
  );
}
