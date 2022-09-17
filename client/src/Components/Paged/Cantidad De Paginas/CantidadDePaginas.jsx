import React from "react";
import { useDispatch } from "react-redux";
import { devPerPage, setCurrentPage } from "../../../Redux/Actions/Paged";

import s from "../Cantidad De Paginas/CantidadDePaginas.module.css";

export default function CantidadDePaginas() {
  const dispatch = useDispatch();

  const handlerPage = (e) => {
    dispatch(devPerPage(e.target.value));
    dispatch(setCurrentPage(1));
  };
  return (
    <div className={s.containerPages}>
      <label> Devs por pagina</label>
      <select onChange={(e) => handlerPage(e)}>
        <option value="1">8</option>
        <option value="12">12</option>
        <option value="16">16</option>
        <option value="24">24</option>
        <option value="48">48</option>
      </select>
    </div>
  );
}
