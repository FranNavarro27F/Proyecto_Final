import React from "react";
import { useRef } from "react";
import s from "./NavMenuHome.module.css";

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
          LANDING
        </li>
        <li onClick={() => scrollToSeccion(home)} className={s.link}>
          HOME
        </li>
        <li onClick={() => scrollToSeccion(home)} className={s.link}>
          ABOUT
        </li>
        <li onClick={() => scrollToSeccion(work)} className={s.link}>
          WORK
        </li>
      </ui>
    </div>
  );
}
