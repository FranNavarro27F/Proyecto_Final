import React from "react";
import s from "./FIlterLenguajes.module.css";
import Select from "react-select";
import useFetchAllData from "../../../Hooks/useFetchAllData";

export default function FIlterLenguajes({
  setActualFilter,
  setCacheFilter,
  cacheFilter,
  customStyles,
  actualFilter,
  refLanguajes,
}) {
  const { languajes } = useFetchAllData();

  const optionsLanguajes = languajes.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  return (
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
  );
}
