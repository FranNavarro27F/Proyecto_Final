import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { consultSub } from "../Redux/Actions/MercadoPago";

export default function useFetchConsultSub(id) {
  const dispatch = useDispatch();

  const { isAuthenticated } = useAuth0();

  const consultaSub = useSelector(
    (state) => state.mercadoPago.SubscriptionConsult
  );

  useEffect(() => {
    if (isAuthenticated && !consultaSub.length) dispatch(consultSub(id));
  }, [consultaSub.length, dispatch, id, isAuthenticated, consultaSub.status]);

  return { consultaSub };
}
