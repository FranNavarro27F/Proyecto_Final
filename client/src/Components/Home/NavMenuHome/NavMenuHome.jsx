import React from "react";
import { useRef } from "react";
import s from "./NavMenuHome.module.css";
import logo from "./Logo/logo chico.png";

export default function NavMenuHome({
  scrollToSeccion,
  work,
  home,
  landing,
  // about,
}) {
  return (
    <div className={s.container}>
      <ui>
        <li onClick={() => scrollToSeccion(landing)} className={s.link}>
          BIENVENIDO
        </li>
        <li onClick={() => scrollToSeccion(home)} className={s.link}>
          INICIO
        </li>
        <li onClick={() => scrollToSeccion(home)} className={s.link}>
          <img className={s.imgLogo} src={logo} alt="logo" />
        </li>
        <li onClick={() => scrollToSeccion(home)} className={s.link}>
          ACERCA DE
        </li>
        <li onClick={() => scrollToSeccion(work)} className={s.link}>
          DESTACADOS
        </li>
      </ui>
    </div>
  );
}
