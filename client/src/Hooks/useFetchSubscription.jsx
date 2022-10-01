import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { consultSub, subscriptionMp } from "../Redux/Actions/MercadoPago";
import { useFetchUsers } from "./useFetchUsers";
import useUser from "./useUser";

export default function useFetchSubscription() {
  const dispatch = useDispatch();
  const user = useUser();
  const { isAuthenticated } = useAuth0();

  const Subscription = useSelector((state) => state.mercadoPago.Subscription);
  const { userByEmail } = useFetchUsers(user?.email);

  const status = userByEmail?.premium;

  useEffect(() => {
    if (isAuthenticated && !Subscription.length)
      dispatch(subscriptionMp(status));
  }, [Subscription.length, dispatch, isAuthenticated, status]);

  return { Subscription };
}

// const handleAceptar = () => {
//   dispatch(aceptarContrato(id)).then((data) => dispatch(getContratoId(id)));
// };
