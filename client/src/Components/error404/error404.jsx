import React from "react";
import { useNavigate } from "react-router-dom";

import s from "./error404.module.css";

export default function Error404() {
  const navigate = useNavigate();
  return (
    <div className={s.container}>
      <h1 className={s.titulo}>ERROR</h1>
      {/* <p className={s.zoom_area}>Página no encontrada</p> */}
      <section className={s.error_container}>
        <span>
          <span>4</span>
        </span>
        <span>0</span>
        <span>
          <span>4</span>
        </span>
      </section>
      <div class="link-container">
        <button
          onClick={() => navigate("/")}
          target="_blank"
          className={s.more_link}
          rel="noreferrer"
        >
          HOME
        </button>
      </div>
    </div>
  );
}
