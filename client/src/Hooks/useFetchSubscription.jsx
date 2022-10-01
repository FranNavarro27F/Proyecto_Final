import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { consultSub, subscriptionMp } from "../Redux/Actions/MercadoPago";
import { useFetchUsers } from "./useFetchUsers";
import useUser from "./useUser";

export default function useFetchSubscription(id) {
  const dispatch = useDispatch();
  const user = useUser();

  const Subscription = useSelector((state) => state.mercadoPago.Subscription);
  const { userByEmail } = useFetchUsers(user?.email);

  const status = userByEmail?.premium;

  useEffect(() => {
    if (!Subscription.length) dispatch(subscriptionMp(status));
  }, [Subscription.length, dispatch, status]);

  return { Subscription };
}

// const handleAceptar = () => {
//   dispatch(aceptarContrato(id)).then((data) => dispatch(getContratoId(id)));
// };
