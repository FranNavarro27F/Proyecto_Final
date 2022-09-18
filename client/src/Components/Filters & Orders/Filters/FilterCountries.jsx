import s from "./FIlterCountries.module.css";

import { useSelector } from "react-redux";
import Select from "react-select";

export default function FIlterCountries({
  actualFilter,
  setActualFilter,
  setOrder,
  defaultvalue,
  defaultValueOption,
}) {
  const countries = useSelector((state) => state.countries.allCountries);

  const optionsCountries = countries.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  const handleCountries = (e) => {
    setActualFilter((state) => {
      return {
        ...state,
        filterCountries: e.map((e) => e.value),
      };
    });
    setOrder(`Ordenado: ${e.map((e) => e.label)}`);
  };

  return (
    <div className={s.filterCountrie}>
      <Select
        onChange={(e) => handleCountries(e)}
        className={s.select}
        isDisabled={false}
        options={optionsCountries}
        isClearable={true}
        isSearchable={true}
        isMulti={true}
        placeholder="Filtra por país..."
        defaultValue={defaultvalue === true ? defaultValueOption : false}
      />
    </div>
  );
}
