import React from "react";
import Circulos from "./CardW/Circulos/Circulos";
import Ellipse from "./Assets/Ellipse/Ellipse";
import s from "./CardHome.module.css";
import CardW1 from "./CardW/CardW1";
import CardW2 from "./CardW/CardW2";
import CardW3 from "./CardW/CardW3";
import useFetchUsersPremium from "../../Hooks/useFetchUsersPremium";

export default function CardHome({ work }) {
  const { usersPremium } = useFetchUsersPremium();

  // const userSlice = usersPremium.slice(0, 3);

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
            <CardW1 userPremium={usersPremium[0]} />
            <CardW2 userPremium={usersPremium[1]} />
            <CardW3 userPremium={usersPremium[2]} />
          </div>
        </section>
      </div>
    </div>
  );
}
