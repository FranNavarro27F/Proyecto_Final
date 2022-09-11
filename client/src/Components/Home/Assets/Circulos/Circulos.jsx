import React from "react";
import s from "./Circulos.module.css";
import circulos from "./circulos.png";

export default function Circulos() {
  return (
    <div className={s.body}>
      <div className={s.circulos}>
        <img className={s.imgCirculo} src={circulos} alt="" />
      </div>
    </div>
  );
}
 // a ver si se arregla 