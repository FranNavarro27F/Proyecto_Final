import s from "./FIlterCountries.module.css";

import { useSelector } from "react-redux";
import Select from "react-select";
import useFetchAllData from "../../../Hooks/useFetchAllData";

export default function FIlterCountries({
  setActualFilter,
  setOrder,
  setCacheFilter,
  cacheFilter,
  customStyles,
  actualFilter,
}) {
  const { countries } = useFetchAllData();

  const optionsCountries = countries.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  return (
    <div className={s.filterCountrie}>
      <Select
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
            // setOrder(`Ordenado: ${e.map((e) => e.label)}`);
          });
        }}
        className={s.select}
        isDisabled={false}
        isClearable={true}
        isSearchable={true}
        isMulti={true}
        placeholder="Filtra por país..."
        styles={customStyles}
        // components={{ ClearIndicator: () => <div>Clear</div> }}
      />
    </div>
  );
}
