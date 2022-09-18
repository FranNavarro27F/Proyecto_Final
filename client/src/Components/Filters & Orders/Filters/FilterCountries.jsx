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
  const customStyles = {
    option: (provided, state) => ({
      // ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "green" : "blue",
      // padding: 10,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  };
  return (
    <div className={s.filterCountrie}>
      <Select
        options={optionsCountries}
        onChange={(e) => handleCountries(e)}
        className={s.select}
        isDisabled={false}
        isClearable={true}
        isSearchable={true}
        isMulti={true}
        placeholder="Filtra por país..."
        // styles={customStyles}
        // components={{ ClearIndicator: () => <div>Clear</div> }}
      />
    </div>
  );
}
