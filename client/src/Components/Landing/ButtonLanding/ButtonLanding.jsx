import React from "react";
import s from "./ButtonLanding.module.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../Login/LoginButton";

export default function ButtonLanding() {
  const { loginWithRedirect } = useAuth0;
  return (
    <div>
      <Link to={"/work"}>
        <div className={s.possitionL}>
          <button className={s.buttonL}>Work</button>
        </div>
      </Link>
      <div className={s.possitionLg}>
        <LoginButton />
      </div>
    </div>
  );
}
