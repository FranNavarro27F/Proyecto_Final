import React from "react";
import { useSelector } from "react-redux";
import Select from "react-select";

import s from "./FIlterTecnologie.module.css";

export default function FIlterTecnologie({ setActualFilter, setOrder }) {
  const tecnologies = useSelector((state) => state.tecnologies.allTecnologies);

  const optionsTecnologias = tecnologies.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  const handleTecnologies = (e) => {
    setActualFilter((state) => {
      return {
        ...state,
        filterTecnologies: e.map((e) => e.label),
      };
    });
    setOrder(`Ordenado: ${e.map((e) => e.label)}`);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#85858566",
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "##c961de" : "#c961de",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "red" : "blue",
      },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),
  };

  return (
    <div>
      <Select
        id="selectTecnologie"
        onChange={(e) => handleTecnologies(e)}
        className={s.select}
        isDisabled={false}
        options={optionsTecnologias}
        isClearable={true}
        isSearchable={true}
        isMulti={true}
        placeholder="Filtra por tecnología..."
        styles={customStyles}
      />
    </div>
  );
}
