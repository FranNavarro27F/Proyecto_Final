import React from "react";
import Planeta from "./Assets/Planeta/Planeta";
import PlanetasChicos from "./Assets/PlanetasChicos/PlanetasChicos";
import ButtonLanding from "./ButtonLanding/ButtonLanding";
import SideMenu from "./SideMenu/SideMenu";
import s from "./Landing.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../Loader/Loader";
import { BsChevronDoubleDown } from "react-icons/bs";
import ButtonScrollSection from "../Home/ButtonScrollSection";

export default function Landing({ landing, scrollTo, goToSectionRef }) {
  const { user, isAuthenticated, isLoading, loginWithRedirect, home } =
    useAuth0();
  // console.log(user);

  return (
    <div ref={landing}>
      <PlanetasChicos />
      <Planeta />
      {/* <SideMenu /> */}

      <div className={s.textLanding}>
        <p className={s.text1landing}>
          {user?.given_name
            ? ` ${user?.given_name} bienvenido a `
            : `Bienvenido a `}
          <span className={s.programax}>Programax</span>
          <i>!</i>
        </p>
        <p className={s.text1landing2}>
          Regístrate, postulate, navega y contrata. Todas tus necesidades al
          alcance de un click<span className={s.puntos}> ...</span>
        </p>
      </div>
      <ButtonLanding />
      <div className={s.divbuttonDown}>
        <ButtonScrollSection goToSectionRef={goToSectionRef} />
      </div>
    </div>
  );
}
