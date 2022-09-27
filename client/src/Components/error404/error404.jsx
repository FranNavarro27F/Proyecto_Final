import React from "react";
import { useNavigate } from "react-router-dom";

import s from "./error404.module.css";

export default function Error404() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className={s.titulo}> 404 Error</h1>
      <p className={s.zoom_area}>El url que solicita no existe.</p>
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
          VOLVER
        </button>
      </div>
    </div>
  );
}
