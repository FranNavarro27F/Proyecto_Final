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
import UserProfile from "react-user-profile";

export default function DevProfile() {
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

  if (isLoading && !user?.email) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const location = userDb.map((e) => e.country);
  console.log(location);

  return isAuthenticated && user?.email ? (
    <div>
      <SideMenu />
      <article className={s.modal}>
        <div className={s.container}>
          <img
            src={userDb ? userDb?.map((e) => e.profilePicture) : user?.picture}
            alt={userDb ? userDb?.map((e) => e.name) : user?.name}
            className={s.picture}
          />
          <h2>{`${userDb ? userDb?.map((e) => e.name) : user?.given_name} ${
            userDb ? userDb?.map((e) => e.lastName) : user?.family_name
          }`}</h2>
          <p>{userDb ? userDb?.map((e) => e.email) : user?.email}</p>
          <p
            className={user?.email_verified ? s.verificacionT : s.verificacionF}
          >
            Verificacion de email:
            {user?.email_verified ? " ✔" : " ❌"}
          </p>
          {userDb && <p>Pais: {userDb.country?.map((e) => e)}</p>}
          <Logout />
        </div>
      </article>
    </div>
  ) : (
    loginWithRedirect()
  );
}
