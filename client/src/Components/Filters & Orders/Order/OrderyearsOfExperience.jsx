import React from "react";
import { useSelector } from "react-redux";
import s from "./OrderyearsOfExperience.module.css";
import Select from "react-select";
export default function OrderyearsOfExperience({ setActualFilter, setOrder }) {
  const optionsOrderExp = [
    { value: "default", label: "Todos" },
    { value: "asc", label: "Mayor Experiencia" },
    { value: "dsc", label: "Menor Experiencia" },
  ];

  const handleOrderExp = (e) => {
    setActualFilter((state) => {
      // console.log(e.value, "exp");
      return {
        ...state,
        OrderExp: e.value,
      };
    });
    setOrder(`Ordenado: ${e.value}`);
  };

  return (
    <div>
      <Select
        onChange={(e) => handleOrderExp(e)}
        className={s.select}
        isDisabled={false}
        options={optionsOrderExp}
        isClearable={false}
        isSearchable={false}
        isMulti={false}
        placeholder="Ordenar por experiencia"
      />
    </div>
  );
}
