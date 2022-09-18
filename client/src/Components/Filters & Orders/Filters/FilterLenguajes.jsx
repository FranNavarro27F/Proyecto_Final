import React from "react";
import s from "./FIlterLenguajes.module.css";

import { useSelector } from "react-redux";
import Select from "react-select";

export default function FIlterLenguajes({
  setActualFilter,
  customStyles,
  setOrder,
}) {
  const languajes = useSelector((state) => state.languajes.allLanguajes);

  const optionsLanguajes = languajes.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  const handleLenguajes = (e) => {
    setActualFilter((state) => {
      return {
        ...state,
        filterLanguajes: e.map((e) => e.label),
      };
    });
    setOrder(`Ordenado: ${e.map((e) => e.label)}`);
  };

  return (
    <div>
      <Select
        onChange={(e) => handleLenguajes(e)}
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
  );
}
