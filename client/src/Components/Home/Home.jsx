import React from "react";
import s from "./Home.module.css";
import Girl1 from "./Assets/girl/girl1";
import Circulos from "./Assets/Circulos/Circulos";
import Circulo from "./Assets/Circulo/Circulo";

export default function Home() {
  return (
    <div className={s.body}>
      <div className={s.container}>
        <div className={s.luz}></div>
        <div className={s.circulo}>
          <Circulos />
        </div>
        <div>
          <Circulo />
        </div>
        <div className={s.girl}>
          <Girl1 />
        </div>
      </div>
    </div>
  );
}
