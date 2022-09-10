import React from "react";
import s from "./Home.module.css";
import Girl1 from "./Assets/girl/girl1";

import Landing from "../Landing/Landing";
import diamante from "./Assets/Diamante/diamante.png";
import Circulos from "./Assets/Circulos/Circulos";
import Circulo from "./Assets/circulo/circulo.jsx";

export default function Home() {
  return (
    <div>
      <Landing />
      <div className={s.body}>
        <div className={s.container}>
          <div className={s.luz}></div>
          <div className={s.circulo1}>
            <Circulos />
          </div>
          <div>
            <Circulo />
          </div>
          <div className={s.girl}>
            <Girl1 />
          </div>
          <div>
            <img className={s.diamante} src={diamante} alt="diamante" />
            <div className={s.luzDiamante}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
