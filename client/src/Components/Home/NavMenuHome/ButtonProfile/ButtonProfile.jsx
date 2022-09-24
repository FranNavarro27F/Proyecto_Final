import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import s from "./ButtonProfile.module.css";

export default function ButtonProfile({ user, isAuthenticated }) {
  return (
    <div>
      <div className={s.divImg}>
        {user.picture && (
          <img src={user?.picture} alt={user?.name} className={s.picture} />
        )}
      </div>
      <button className={s.buttonImg}></button>
    </div>
  );
}
