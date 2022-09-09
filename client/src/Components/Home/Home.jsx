import React from "react";
import s from "./Home.module.css";
import Girl1 from "./Assets/girl/girl1";
import Circulo from "./Assets/circulo/circulo";

export default function Home() {
  return (
    <div className={s.body}>
      <div className={s.luz}></div>

      <div className={s.container}>
        <div className={s.circulo}>
          <Circulo />
        </div>
        <div className={s.girl}>
          <Girl1 />
        </div>
      </div>
    </div>
  );
}
