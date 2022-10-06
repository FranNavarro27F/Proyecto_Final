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
  const detailPropio = useSelector((state) => state.devUser.detailPropio);

  useEffect(() => {
    dispatch(getUserEmail(user?.email));
  }, [dispatch, user?.email]);

  return isLoader ? (
    <Loader />
  ) : (
    <div className={s.container}>
      {
        <div onClick={() => setOpen(!open)} className={s.buttonImg}>
          {userByEmail?.profilePicture ? (
            <img
              src={
                userByEmail?.profilePicture
                // || user?.picture
                // : user?.picture
              }
              alt={userByEmail?.name}
              className={s.picture}
            />
          ) : (
            <svg
              className={s.picture}
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
            </svg>
          )}
        </div>
      }
      {open && (
        <div ref={refSelect} className={s.bodySelect}>
          <div id="test" className={s.select}>
            <Link to={`/work/details/${userByEmail?.id}`}>
              <button className={s.buttonSelect}>PERFIL</button>
            </Link>

            {detailPropio?.isAdmin && (

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
