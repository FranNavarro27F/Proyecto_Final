import React from "react";
import Planeta from "./Assets/Planeta/Planeta";
import PlanetasChicos from "./Assets/PlanetasChicos/PlanetasChicos";
import ButtonLanding from "./ButtonLanding/ButtonLanding";
import SideMenu from "./SideMenu/SideMenu";
import s from "./Landing.module.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Landing() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  // console.log(user);
  return (
    <div>
      <PlanetasChicos />
      <Planeta />
      <SideMenu />
      <ButtonLanding />
      <div className={s.textLanding}>
        <p className={s.text1landing}>
         Programax
        </p>
      </div>
    </div>
  );
}
