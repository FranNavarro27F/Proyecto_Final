import React from 'react';
import s from "./Login.module.css";

function Login() {
  return (
    <div className={s.login}>
    <input type="text" placeholder='Username' name='username' className={s.inputUser}/>
    <input type="password" placeholder='Password' name='password' className={s.inputPass}/>
    <input type="submit" value="LOG IN" className={s.submit}/>
    <span className={s.loginOr}>or</span>
    <span className={s.loginGoogle}>Login with Google</span>+
    </div>
  )
}

export default Login;