import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../../../Redux/Actions/DevUser";
import s from "./ButtonProfile.module.css";
import { Link, useNavigate } from "react-router-dom";
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
          <img
            src={
              userByEmail?.profilePicture || user?.picture
              // : user?.picture
            }
            alt={userByEmail?.name}
            className={s.picture}
          />
        </div>
      }
      {open && (
        <div ref={refSelect} className={s.bodySelect}>
          <div id="test" className={s.select}>
            <Link to={`/work/details/${userByEmail?.id}`}>
              <button className={s.buttonSelect}>PERFIL</button>
            </Link>
            {!userByEmail?.isAdmin && (
              <Link to={`/admin/${user?.user_id}`}>
                <button className={s.buttonSelect} value="">
                  PANEL ADMIN
                </button>
              </Link>
            )}
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
