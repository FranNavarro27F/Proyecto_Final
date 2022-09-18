import React from "react";
import s from "./Login.module.css";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0;
  return (
    <div className={s.login}>
      <button onClick={() => loginWithRedirect()}></button>
    </div>
  );
}

export default Login;
