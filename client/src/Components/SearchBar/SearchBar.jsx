import React, { useState } from "react";
import s from "../SearchBar/SearchBar.module.css";
import { HiOutlineSearch } from "react-icons/hi";

export default function SearchBar({ setActualFilter }) {
  const [searchedCountry, setSearchedCountry] = useState({ value: "" });

  const handleInputChange = (e) => {
    setSearchedCountry({ value: e.target.value });
    e.preventDefault();

    setActualFilter((state) => {
      return { ...state, name: searchedCountry.value.trim() };
    });
  };

  const handleOnSubmit = (e) => {};

  return (
    <div className={s.bodySearch}>
      <form>
        <span>
          <HiOutlineSearch />
        </span>

        <input
          className={s.searchBar}
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
          value={searchedCountry.value}
        ></input>
      </form>
    </div>
  );
}
