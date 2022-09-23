import s from "./FIlterCountries.module.css";

import { useSelector } from "react-redux";
import Select from "react-select";
import useFetchAllData from "../../../Hooks/useFetchAllData";
import { useRef } from "react";

export default function FIlterCountries({
  setActualFilter,
  setCacheFilter,
  cacheFilter,
  customStyles,
  actualFilter,
  handleClear,
}) {
  const { countries } = useFetchAllData();

  const refCountries = useRef();
  handleClear = () => {
    refCountries.current.clearValue();
  };

  const optionsCountries = countries.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });
  console.log(refCountries, "componente ref");
  return (
    <div className={s.filterCountrie}>
      <Select
        ref={refCountries}
        set-value={cacheFilter?.filterCountries}
        options={optionsCountries}
        onChange={(e) => {
          setActualFilter({
            ...actualFilter,
            filterCountries: e.map((e) => e.value),
          });
          setCacheFilter({
            ...cacheFilter,
            filterCountries: e.map((e) => e.value),
          });
        }}
        className={s.select}
        isDisabled={false}
        isClearable={true}
        isSearchable={true}
        isMulti={true}
        placeholder="Filtra por país..."
        styles={customStyles}
      />
    </div>
  );
}
