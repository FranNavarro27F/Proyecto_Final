import { useAuth0 } from "@auth0/auth0-react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserEmail } from "../../../../Redux/Actions/DevUser";
import s from "./ButtonProfile.module.css";

export default function ButtonProfile({ user, isAuthenticated, logout }) {
  const [open, setOpen] = useState(false);
  const refSelect = useRef();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getUserEmail(user?.email));
  };

  return (
    <div>
      {user.picture && (
        <div onClick={() => setOpen(!open)} className={s.buttonImg}>
          <img src={user?.picture} alt={user?.name} className={s.picture} />
        </div>
      )}
      {open && (
        <div ref={refSelect} className={s.bodySelect}>
          <div id="test" className={s.select}>
            <button onClick={handleClick} className={s.buttonSelect} value="">
              PERFIL
            </button>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className={s.buttonSelect}
              value=""
            >
              CERRAR SESION
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
