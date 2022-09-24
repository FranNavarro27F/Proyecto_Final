import React from "react";
import { useRef } from "react";
import s from "./NavMenuHome.module.css";
import logo from "./Logo/logo chico.png";
import ButtonProfile from "./ButtonProfile/ButtonProfile";

export default function NavMenuHome({
  scrollToSeccion,
  work,
  home,
  landing,
  isAuthenticated,
  user,
  // about,
}) {
  console.log(user);
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
          <img className={s.imgLogo} src={logo} alt="logo" />
        </li>
        <li onClick={() => scrollToSeccion(home)} className={s.link}>
          ABOUT
        </li>
        <li onClick={() => scrollToSeccion(work)} className={s.link}>
          WORK
        </li>
      </ui>
      {isAuthenticated && <ButtonProfile user={user} />}
    </div>
  );
}
