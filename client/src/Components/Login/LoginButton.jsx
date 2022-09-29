import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import s from "./LoginButton.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={s.possitionLg}>
      <button
        onClick={() => {
          window.localStorage.setItem("url", window.location.pathname);
          loginWithRedirect();
        }}
        className={s.buttonLg}
      >
        Ingresar
      </button>
    </div>
  );
};

export default LoginButton;
