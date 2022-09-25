import React from "react";
import s from "./FIlterServices.module.css";

import { useSelector } from "react-redux";
import Select from "react-select";
import useFetchAllData from "../../../Hooks/useFetchAllData";

export default function FIlterServices({
  setActualFilter,
  setCacheFilter,
  cacheFilter,
  customStyles,
  actualFilter,
  refServices,
}) {
  const { services } = useFetchAllData();
  const optionsServices = services.map((e) => {
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
            filterServices: e.map((e) => e.label),
          });
          setCacheFilter({
            ...cacheFilter,
            filterServices: e.map((e) => e.label),
          });
        }}
        ref={refServices}
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
