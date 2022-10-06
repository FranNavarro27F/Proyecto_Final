import React from "react";
// import { useRef } from "react";
import s from "./NavMenuHome.module.css";
import logo from "./Logo/logo chico.png";
import ButtonProfile from "./ButtonProfile/ButtonProfile";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function NavMenuHome({
  scrollToSeccion,
  work,
  home,
  landing,
  setOpen,
  open,
}) {
  const navigate = useNavigate();
  const {
    user,
    isAuthenticated,
    // isLoading,
    // loginWithRedirect,
    logout,
  } = useAuth0();
  return (
    <div className={s.container}>
      <ul>
        <li onClick={() => scrollToSeccion(landing)} className={s.link}>
          BIENVENIDO
        </li>
        <li onClick={() => scrollToSeccion(home)} className={s.link}>
          ACERCA DE
        </li>
        <li onClick={() => scrollToSeccion(home)} className={s.link}>
          <img className={s.imgLogo} src={logo} alt="logo" />
        </li>
        <li
          onClick={() => {
            scrollToSeccion(home);
            navigate("/about");
          }}
          className={s.link}
        >
          ABOUT
        </li>
        <li onClick={() => scrollToSeccion(work)} className={s.link}>
          DESTACADOS
        </li>
      </ul>
      {isAuthenticated && (
        <ButtonProfile
          user={user}
          logout={logout}
          setOpen={setOpen}
          open={open}
        />
      )}
    </div>
  );
}
