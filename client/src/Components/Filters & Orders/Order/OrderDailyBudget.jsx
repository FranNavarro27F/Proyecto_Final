import React from "react";
import { useSelector } from "react-redux";

import Select from "react-select";
import s from "./OrderDailyBudget.module.css";

export default function OrderDailyBudget({
  setActualFilter,
  setOrder,
  setCacheFilter,
  cacheFilter,
  customStyles,
  actualFilter,
}) {
  const optionsOrderBudget = [
    { value: "default", label: "Todos" },
    { value: "asc", label: "Mayor costo diario" },
    { value: "dsc", label: "Menor costo diario" },
  ];

  const handleOrderBud = (e) => {
    setActualFilter((state) => {
      // console.log(e.value, "exp");
      return {
        ...state,
        OrderBud: e.value,
      };
    });
    setOrder(`Ordenado: ${e.value}`);
  };

  return (
    <div>
      <Select
        onChange={(e) => {
          setActualFilter({
            ...actualFilter,
            OrderBud: e.value,
          });
          setCacheFilter({
            ...cacheFilter,
            OrderBud: e.value,
            // setOrder(`Ordenado: ${e.map((e) => e.label)}`);
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
  );
}
