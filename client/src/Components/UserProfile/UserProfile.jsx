import { useAuth0 } from "@auth0/auth0-react";
import s from "./UserProfile.module.css";
import React from "react";
import SideMenu from "../Landing/SideMenu/SideMenu";
import Logout from "../Login/Logout";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDevUsers, getUsersBd } from "../../Redux/Actions/DevUser";
import { getCountries } from "../../Redux/Actions/Countries";

export default function UserProfile() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  const allUsers = useSelector((state) => state.devUser.allUsers);
  const country = useSelector((state) => state.countries.allCountries);
  const email = user?.email;
  // const validateEmail = users?.filter((e) => e.email === email);
  useEffect(() => {
    dispatch(getUsersBd());
  }, [dispatch]);

  const userDb = allUsers?.filter((e) => e.email === email);
  console.log(userDb);

  if (isLoading && !user?.email) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  console.log(country.map((e) => e.id === userDb.country));

  return isAuthenticated && user?.email ? (
    <div>
      <SideMenu />
      <article className={s.modal}>
        <div className={s.container}>
          <img
            src={userDb?.map((e) => e.profilePicture)}
            alt={userDb?.map((e) => e.name)}
            className={s.picture}
          />
          <h2>{`${userDb?.map((e) => e.name)} ${userDb?.map(
            (e) => e.lastName
          )}`}</h2>
          <p>{userDb?.map((e) => e.email)}</p>
          <p
            className={user?.email_verified ? s.verificacionT : s.verificacionF}
          >
            Verificacion de email:
            {user?.email_verified ? " ✔" : " ❌"}
          </p>
          {/* <p>Pais: {country.map((e) => e.name.includes(userDb.paiseId))}</p> */}
          <Logout />
        </div>
      </article>
    </div>
  ) : (
    loginWithRedirect()
  );
}
