import React from "react";
import s from "../Landing/Landing.module.css";
import planetas1 from "./Assets/planetas/planetas.png";

export default function Landing() {
  return (
    <div className={s.landing}>
      <div className={s.planetas}>
        <img className={s.imgPlanet} src={planetas1}></img>
      </div>
    </div>
  );
}
