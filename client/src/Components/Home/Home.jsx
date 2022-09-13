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
        <div className={s.luz}></div>

        <Circulo className={s.circulo} />

        <Circulos className={s.circulos} />
        <Girl1 />

        <img className={s.diamante} src={diamante} alt="diamante" />
        <div className={s.luzDiamante}></div>
      </div>
      <div className={s.divTextHome}>
        <h2>About me</h2>
        <p className={s.textP}>
          A lifelong computer enthusiast and I would like to be allowed to work
          with one of the prestigious company. I am an excellent fit for a
          company given my passion and skills. Read more...
        </p>
      </div>
    </div>
  );
}
