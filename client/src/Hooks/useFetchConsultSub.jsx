import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { consultSub } from "../Redux/Actions/MercadoPago";

export default function useFetchConsultSub(id) {
  const dispatch = useDispatch();

  const consultaSub = useSelector(
    (state) => state.mercadoPago.SubscriptionConsult
  );

  useEffect(() => {
    if (!consultaSub.length) dispatch(consultSub(id));
  }, [consultaSub.length, dispatch, id]);

  return { consultaSub };
}
