import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import s from "./Logout.module.css";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className={s.buttonLg}
    >
      <span>Salir</span>
    </button>
  );
};

export default Logout;
