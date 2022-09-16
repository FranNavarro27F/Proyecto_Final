import React from "react";
import s from "./FIlterCountries.module.css";

import { useSelector } from "react-redux";
import Select from "react-select";

export default function FIlterCountries({ setActualFilter, setOrder }) {
  const countries = useSelector((state) => state.countries.allCountries);

  const optionsCountries = countries.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  const handleCountries = (e) => {
    setActualFilter((state) => {
      return {
        ...state,
        filterCountries: e.map((e) => e.value),
      };
    });
    setOrder(`Ordenado: ${e.map((e) => e.label)}`);
  };

  return (
    <div>
      <Select
        onChange={(e) => handleCountries(e)}
        className={s.select}
        isDisabled={false}
        options={optionsCountries}
        isClearable={true}
        isSearchable={true}
        isMulti={true}
        placeholder="Seleciona un pais..."
      />
    </div>
  );
}
