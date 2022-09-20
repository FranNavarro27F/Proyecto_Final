import React from "react";
import s from "./FIlterServices.module.css";

import { useSelector } from "react-redux";
import Select from "react-select";

export default function FIlterServices({
  setActualFilter,
  setOrder,
  setCacheFilter,
  cacheFilter,
  customStyles,
  actualFilter,
}) {
  const services = useSelector((state) => state.services.allServices);

  const optionsServices = services.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  const handleServices = (e) => {
    setActualFilter((state) => {
      return {
        ...state,
        filterServices: e.map((e) => e.label),
      };
    });
    setOrder(`Ordenado: ${e.map((e) => e.label)}`);
  };

  return (
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
            // setOrder(`Ordenado: ${e.map((e) => e.label)}`);
          });
        }}
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
  );
}
