import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../../../Redux/Actions/DevUser";
import s from "./ButtonProfile.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useUser from "../../../../Hooks/useUser";
import Loader from "../../../Loader/Loader";

export default function ButtonProfile({
  isAuthenticated,
  logout,
  open,
  setOpen,
  isLoader,
}) {
  const navigate = useNavigate();
  const refSelect = useRef();
  const dispatch = useDispatch();
  const user = useUser();
  const userByEmail = useSelector((state) => state.devUser.userByEmail);

  useEffect(() => {
    dispatch(getUserEmail(user?.email));
  }, [dispatch, user?.email]);

  return isLoader ? (
    <Loader />
  ) : (
    <div className={s.container}>
      {
        <div onClick={() => setOpen(!open)} className={s.buttonImg}>
          <img src={user?.picture} alt={user?.name} className={s.picture} />
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
