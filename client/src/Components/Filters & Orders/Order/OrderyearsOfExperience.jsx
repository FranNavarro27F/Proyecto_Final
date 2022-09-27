import React from "react";
import { useSelector } from "react-redux";
import s from "./OrderyearsOfExperience.module.css";
import Select from "react-select";
export default function OrderyearsOfExperience({
  setActualFilter,
  setOrder,
  setCacheFilter,
  cacheFilter,
  customStyles,
  actualFilter,
  refExperience,
}) {
  const optionsOrderExp = [
    { value: "default", label: "Todos" },
    { value: "asc", label: "Mayor Experiencia" },
    { value: "dsc", label: "Menor Experiencia" },
  ];

  const handleOrderExp = (e) => {
    setActualFilter((state) => {
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
            // setOrder(`Ordenado: ${e.map((e) => e.label)}`);
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
  );
}
