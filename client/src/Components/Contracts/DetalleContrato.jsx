import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import {
  aceptarContrato,
  rechazarContrato,
  getContratoId,
  putContrato,
  resetContract,
} from "../../Redux/Actions/Contracts";
import { getUserEmail, getUserId } from "../../Redux/Actions/DevUser";
import { pagosMp } from "../../Redux/Actions/MercadoPago";
import s from "../Contracts/DetalleContracts.module.css";
import Reviews from "./Reviews";

export default function DetalleContrato() {
  const user = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.email) {
      dispatch(getUserEmail(user.email));
    }
  }, []);

  let usuarioActual = useSelector((state) => state.devUser.userByEmail)?.id;

  const { id } = useParams();
  const detalleC = useSelector((state) => state.contracts.detalleContrato);
  const detallePerfil = useSelector((state) => state.devUser.details);
  const paymentContract = useSelector((state) => state.mercadoPago.Payment);
  const initPoint = paymentContract?.init_point;
  const link_de_pago = detalleC?.payment_id;
  let [pagar, setPagar] = useState(false);

  console.log("payment", link_de_pago);
  // console.log("payment", paymentContract )
  const navigate = useNavigate();

  useEffect(() => {
    detalleC?.price && dispatch(pagosMp({ price: Number(detalleC.price) }, id));
    dispatch(getContratoId(id));
  }, [dispatch, id, detalleC.aceptado]);

  //aca el handle del aceptar contrato
  const handleAceptar = () => {
    dispatch(aceptarContrato(id)).then((data) => dispatch(getContratoId(id)));
    // detalleC?.price && dispatch(pagosMp({price: Number(detalleC.price) }, id))
    // alert("La propuesta ha sido aceptada correctamente")
    dispatch(putContrato(id, { payment_id: initPoint }));
    setPagar(true);
  };
  //aca el handle del rechazar contrato
  let usuarioEnDetalle = useSelector((state) => state.devUser.details);
  let usuarioDetailID = usuarioEnDetalle?.id;
  const handleRechazar = () => {
    //dispatch(rechazarContrato(id)).then(data=> dispatch(getContratoId(id)))
    dispatch(putContrato(id, { habilitado: false })).then(
      (data) => usuarioDetailID && dispatch(getUserId(usuarioDetailID))
    );
    alert("La propuesta ha sido rechazada correctamente");
    navigate(`/work`);
  };
  const handleBack = () => {
    if (detallePerfil) {
      navigate(`/work/details/${detallePerfil.id}`);
    }
    console.log("aaaaa");
    dispatch(resetContract());
  };

  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("status"), "STATUS PAGO");


  useEffect(() => {
    if (searchParams.get("status") === "approved") {
      dispatch(putContrato(id, { pagado: true }));
    }
  }, [dispatch, id, searchParams]);
console.log(detalleC?.pagado,"detallec.pagado")

  return (
    <div className={s.body}>
      <div className={s.titulito}>
        <h1>Detalle del contrato</h1>
        <div className={s.cardDetalle}>
          <div className={s.textBox}>
            <label>Id contrato: </label>
            {id}
            <br />
            <label> Fecha de Inicio: </label>
            {detalleC?.date}
            <br />
            <label>Fecha de Finalización: </label>
            {detalleC?.expiration_date}
            <br />
            <label>Presupuesto: $ </label>
            {detalleC?.price}
            <br />
            <label>Descripción: </label>
            {detalleC?.description}
            <br />
            <label>Status: </label>
            {detalleC?.status}
            <br />
            <label>Estado: </label>
            {!detalleC?.pagado
              ? detalleC?.aceptado === false
                ? "No aceptado"
                : `Aceptado en espera de pago ⚠`
              : "Aceptado y pagado ✅ "}
            <br />
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className={s.buttonUbi}>
          <button className={s.buttonDetalle} onClick={(e) => handleBack(e)}>
            Volver
          </button>
          {
            <div>
              {usuarioActual &&
                // usuarioActual !== detalleC.employer &&
                !detalleC?.pagado &&
                !detalleC?.aceptado &&
                usuarioActual !== detalleC.employer && (
                  <button
                    disabled={
                      usuarioActual
                        ? usuarioActual === detalleC.employer
                        : false
                    }
                    onClick={(e) => handleAceptar(e)}
                    className={s.buttonDetalle}
                  >
                    Aceptar
                  </button>
                )}

              {usuarioActual === detalleC.employer &&
                detalleC?.aceptado &&
                !detalleC?.pagado && (
                  <a href={initPoint} className={s.buttonDetalle}>
                    pagar!
                  </a>
                )}

              {!detalleC?.pagado && (
                <button
                  disabled={
                    usuarioActual ? usuarioActual === detalleC.employer : false
                  }
                  className={s.buttonDetalle}
                  onClick={(e) => handleRechazar(e)}
                >
                  Rechazar
                </button>
              )}
              {
                // detalleC.aceptado &&
                detalleC.pagado &&
                  usuarioActual === detalleC.employer &&
                  detalleC?.comentario === "" && (
                    <div>
                      <Reviews id={id} />
                    </div>
                  )
              }
              {/* {detalleC.aceptado &&
                usuarioActual &&
                usuarioActual === detalleC.employer && (
                  <div>
                    <Reviews id={id} />
                  </div>
                )} */}
            </div>
          }
        </div>
      </div>
    </div>
  );
}
