import React from "react";
import s from "./Planeta.module.css";
import planetas1 from "../PlanetasImages/planetas.png";

export default function Planeta() {
  return (
    <div className={s.landing}>
      <div className={s.planetas}>
        <img className={s.imgPlanet} src={planetas1} alt="planetas"></img>
      </div>
    </div>
  );
}
