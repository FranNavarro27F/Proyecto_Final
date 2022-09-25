import React from "react";
import Ellipse from "./Assets/Ellipse/Ellipse";
import s from "./CardHome.module.css";
import CardW1 from "./CardW/CardW1";
import CardW2 from "./CardW/CardW2";
import CardW3 from "./CardW/CardW3";

export default function CardHome({ work }) {
  return (
    <div ref={work} className={s.divcarhome}>
      <Ellipse />
      <h1 className={s.titlew}>Trabajos recientes</h1>
      <div>
    <section class="container">
    <div id="carousel" style="transform: translateZ(-288px) rotateY(-360deg);">
     
        <CardW1 />
        <CardW2 />
        <CardW3 />
    </div>
  </section>
      </div>
    </div>
  );
}
