// import { useAuth0 } from "@auth0/auth0-react";
// import React, { useEffect, useRef, useState } from "react";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../../../Redux/Actions/DevUser";
import s from "./ButtonProfile.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useUser from "../../../../Hooks/useUser";

export default function ButtonProfile({
  // user,
  isAuthenticated,
  logout,
  open,
  setOpen,
}) {
  const navigate = useNavigate();
  const refSelect = useRef();
  const dispatch = useDispatch();
  const user = useUser();
  const userByEmail = useSelector((state) => state.devUser.userByEmail);

  useEffect(() => {
    dispatch(getUserEmail(user?.email));
  }, [dispatch, user?.email]);

  return (
    <div className={s.container}>
      {
        <div onClick={() => setOpen(!open)} className={s.buttonImg}>
          <img
            src={
              userByEmail?.profilePicture
              // ? user?.profilePicture
              // : user?.picture
            }
            alt={user?.name}
            className={s.picture}
          />
        </div>
      }
      {open && (
        <div ref={refSelect} className={s.bodySelect}>
          <div id="test" className={s.select}>
            <button
              onClick={() => navigate(`/work/details/${userByEmail?.id} `)}
              className={s.buttonSelect}
              value=""
            >
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
