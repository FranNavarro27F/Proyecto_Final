import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import s from "./LoginButton.module.css";

const LoginButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className={s.buttonLg}
    >
      <span> Ingresar</span>
    </button>
  );
};

export default LoginButton;
