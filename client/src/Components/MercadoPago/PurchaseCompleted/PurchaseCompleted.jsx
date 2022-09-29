import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function PurchaseCompleted() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [actualPurchaseInfo, setActualPurchaseInfo] = useState({});
  const [error, setError] = useState({});
  const paymentId = searchParams.get("payment_id");
  const payment = searchParams;

  console.log(paymentId, "PAYMENT");
  console.log(payment, "PAYMENT");

  return <div>Tu suscripcion se realizo correctamente!</div>;
}
