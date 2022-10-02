import React from "react";
import Circulos from "./CardW/Circulos/Circulos";
import Ellipse from "./Assets/Ellipse/Ellipse";
import s from "./CardHome.module.css";
import CardW1 from "./CardW/CardW1";
import CardW2 from "./CardW/CardW2";
import CardW3 from "./CardW/CardW3";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsersPremium } from "../../Redux/Actions/DevUser";

export default function CardHome({ work }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersPremium());
  });

  return (
    <div ref={work} className={s.divcarhome}>
      <Ellipse />
      <div className={s.circulos}>
        <Circulos />
      </div>
      <h1 className={s.titlew}>Destacados de la semana</h1>
      <div>
        <section>
          <div
            id="carousel"
            className={s.bodyCard}
            // style={{ transform: "translateZ(-288px) rotateY(-360deg)" }}
          >
            <CardW1 />
            <CardW2 />
            <CardW3 />
          </div>
        </section>
      </div>
    </div>
  );
}
