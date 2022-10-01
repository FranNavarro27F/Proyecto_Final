import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { consultSub, subscriptionMp } from "../Redux/Actions/MercadoPago";
import { useFetchUsers } from "./useFetchUsers";
import useUser from "./useUser";

export default function useFetchSubscription(id) {
  const dispatch = useDispatch();

  const Subscription = useSelector((state) => state.mercadoPago.Subscription);

  useEffect(() => {
    if (!Subscription.length) dispatch(subscriptionMp());
  }, [Subscription.length, dispatch]);

  return { Subscription };
}
