import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsersPremium } from "../Redux/Actions/DevUser";

export default function useFetchUsersPremium() {
  const dispatch = useDispatch();

  const usersPremium = useSelector((state) => state.devUser.usersPremium);

  useEffect(() => {
    if (!usersPremium.length) dispatch(getUsersPremium());
  }, [dispatch, usersPremium.length]);
  return { usersPremium };
}
