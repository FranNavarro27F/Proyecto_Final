import React from "react";
import Select from "react-select";
import useFetchAllData from "../../../Hooks/useFetchAllData";

import s from "./FIlterTecnologie.module.css";

export default function FIlterTecnologie({
  setActualFilter,
  setOrder,
  setCacheFilter,
  cacheFilter,
  actualFilter,
  customStyles,
}) {
  const { tecnologies } = useFetchAllData();

  const optionsTecnologias = tecnologies.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  return (
    <div>
      <Select
        // ref={selectInputRef}
        onChange={(e) => {
          setActualFilter({
            ...actualFilter,
            filterTecnologies: e.map((e) => e.label),
          });
          setCacheFilter({
            ...cacheFilter,
            filterTecnologies: e.map((e) => e.label),
          });
        }}
        set-value={cacheFilter?.filterTecnologies}
        className={s.select}
        // onChange={setSelected}
        isDisabled={false}
        options={optionsTecnologias}
        isClearable={true}
        isSearchable={true}
        isMulti={true}
        placeholder="Filtra por tecnología..."
        styles={customStyles}
      />
      {/* <button>CLEAR</button> */}
    </div>
  );
}
