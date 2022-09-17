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
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
    </div>
  );
}
