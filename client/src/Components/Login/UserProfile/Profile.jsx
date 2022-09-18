import { useAuth0 } from "@auth0/auth0-react";

import React from "react";
import SideMenu from "../../Landing/SideMenu/SideMenu";
import Logout from "../Logout";

export default function Profile() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <div>
      <SideMenu />
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <Logout />
    </div>
  ) : (
    loginWithRedirect()
  );
}
