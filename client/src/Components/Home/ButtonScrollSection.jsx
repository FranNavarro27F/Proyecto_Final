import React from "react";
import s from "./ButtonScrollSection.module.css";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function ButtonScrollSection({ goToSectionRef }) {
  const scrollTo = (section) => {
    section.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className={s.divButton}>
      <button onClick={() => scrollTo(goToSectionRef)} className={s.buttonDown}>
        <BsChevronDoubleDown />
      </button>
    </div>
  );
}
