import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "../Paged/Paged.module.css";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { setCurrentPage } from "../../Redux/Actions/Paged";

export default function Paged({ allDev }) {
  let dispatch = useDispatch();
  let currentPage = useSelector((state) => state.devUser.page);
  let devPerPage = useSelector((state) => state.devUser.devPerPage);
  let pageNumbers = [];
  let totalPages = Math.ceil(allDev / devPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={s.body}>
      <button
        className={s.buttonPaged2}
        disabled={currentPage - 1 === 0}
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
      >
        <span>
          <GiPreviousButton />
        </span>
      </button>

      {pageNumbers?.map((num) => {
        return (
          <button
            key={num}
            disabled={num === currentPage}
            className={s.button}
            onClick={() => dispatch(setCurrentPage(num))}
          >
            {num}
          </button>
        );
      })}

      <button
        className={s.buttonPaged2}
        disabled={currentPage === totalPages}
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
      >
        <GiNextButton />
      </button>
    </nav>
  );
}
