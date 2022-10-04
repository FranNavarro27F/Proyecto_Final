import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail, getUsersBd } from "../Redux/Actions/DevUser";

export const useFetchUsers = (email) => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.devUser.allUsers);
  const userByEmail = useSelector((state) => state.devUser.userByEmail);

  useEffect(() => {
    // dispatch(getUsersBd());
    if (!allUsers.length) dispatch(getUsersBd());
    if (!userByEmail.length && email) dispatch(getUserEmail(email));
  }, [allUsers.length, dispatch, email, userByEmail.length]);

  return { allUsers, userByEmail };
};
