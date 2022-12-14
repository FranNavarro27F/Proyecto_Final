import React from "react";
import Planeta from "./Assets/Planeta/Planeta";
import PlanetasChicos from "./Assets/PlanetasChicos/PlanetasChicos";
import ButtonLanding from "./ButtonLanding/ButtonLanding";
// import SideMenu from "./SideMenu/SideMenu";
import s from "./Landing.module.css";
import { useAuth0 } from "@auth0/auth0-react";
// import Loader from "../Loader/Loader";
// import { BsChevronDoubleDown } from "react-icons/bs";
import ButtonScrollSection from "../Home/ButtonScrollSection";
import { useSelector } from "react-redux";

// import { useSelector } from "react-redux";

export default function Landing({
  landing,
  // scrollTo,
  goToSectionRef,
  // open,
  setOpen,
}) {
  // const { user, isAuthenticated, isLoading, loginWithRedirect, home } =
  //   useAuth0();
  const { user } = useAuth0();
  const detailPropio = useSelector((state) => state.devUser.detailPropio);
  // console.log(user);

  return (
    <div ref={landing} onClick={() => setOpen(false)} className={s.bodyLanding}>
      <PlanetasChicos />
      <Planeta />
      {/* <SideMenu /> */}

      <div className={s.textLanding}>
        <div className={s.text1landing}>
          {user ? (
            <span>
              <span className={s.programax}>
                {detailPropio?.name || user?.name},
              </span>{" "}
              bienvenido de nuevo !
            </span>
          ) : (
            <span>
              Bienvenido a <span className={s.programax}>Programax</span>
              <i>!</i>
            </span>
          )}
        </div>
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
