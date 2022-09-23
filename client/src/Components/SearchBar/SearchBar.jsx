import React, { useState } from "react";
import s from "../SearchBar/SearchBar.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getUserSearchBar } from "../../Redux/Actions/DevUser";
import { searchInput } from "../../Redux/Actions/FiltersOrders";


export default function SearchBar({ setActualFilter }) {
  // const [searchedCountry, setSearchedCountry] = useState({ value: "" });

  // const handleInputChange = (e) => {
  //   setSearchedCountry({ value: e.target.value });
  //   e.preventDefault();

  //   setActualFilter((state) => {
  //     return { ...state, name: searchedCountry.value.trim() };
  //   });
  // };

  // const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserSearchBar())
  }, [])


  const handleInputChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    dispatch(searchInput(e.target.value));
  };

  return (
    <div className={s.bodySearch}>
      <form>
        <span>
          <HiOutlineSearch />
        </span>

        <input
          className={s.searchBar}
          type={"text"}
          placeholder={"Buscar..."}
          onChange={(e)=> handleInputChange(e)}
          
        ></input>
      </form>
    </div>
  );
}
