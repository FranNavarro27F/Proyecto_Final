import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail, getUsersBd } from "../Redux/Actions/DevUser";

export const useFetchUsers = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.devUser.allUsers);

  useEffect(() => {
    if (!allUsers) dispatch(getUsersBd());
  }, [allUsers, dispatch]);

  return { allUsers };
};
