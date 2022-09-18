import { useAuth0 } from "@auth0/auth0-react";
import s from "./Profile.module.css";
import React from "react";
import SideMenu from "../../Landing/SideMenu/SideMenu";
import Logout from "../Logout";

export default function Profile() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  // console.log(user);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <div>
      <SideMenu />
      <article className={s.modal}>
        <div className={s.container}>
          <img src={user.picture} alt={user.name} className={s.picture} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p className={s.verificacion}>
            {user.email_verified && user.email_verified}
          </p>
          <Logout />
        </div>
      </article>
    </div>
  ) : (
    loginWithRedirect()
  );
}
