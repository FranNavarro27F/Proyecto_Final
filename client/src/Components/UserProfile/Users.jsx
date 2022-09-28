import React from "react";
import Iframe from "react-iframe";
import s from "./User.module.css";

export default function Users() {
  return (
    <div className={s.body}>
      <div className={s.container}>
        <Iframe
          loading="CARGANDOOOOOOOOOOOOOOO..."
          className={s.iframe}
          url="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_id=2c938084838213ba018382362c2a0008"
          id=""
          display="block"
          position="relative"
        />
      </div>
    </div>
  );
}
