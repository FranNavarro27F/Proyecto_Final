import React from "react";
import s from "./ButtonLanding.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../Login/LoginButton";
import { useSelector } from "react-redux";

export default function ButtonLanding() {
  const users = useSelector((state) => state.devUser.allUsers);
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const userByEmail = useSelector((state) => state.devUser.userByEmail);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const validateEmail = users?.filter((e) => e.email === user?.email);
  // useEffect(()=>{

  // },)

  return (
    <div>
      <Link to={"/work"}>
        <div className={s.possitionL}>
          <button className={s.buttonL}>Postulaciones</button>
        </div>
      </Link>

      {validateEmail && isAuthenticated ? (
        // <Link to={`/work/details/${userByEmail?.id}`}>
        <div className={s.possitionLg}>
          <button
            onClick={() => navigate(`/work/details/${userByEmail?.id}`)}
            className={s.buttonLg}
          >
            Perfil
          </button>
        </div>
      ) : // </Link>
      !isAuthenticated ? (
        <div>
          <LoginButton />
        </div>
      ) : (
        <Link to={"/create"}>
          <div className={s.possitionLg}>
            <button className={s.buttonLg}>Postularme</button>
          </div>
        </Link>
      )}
    </div>
  );
}
