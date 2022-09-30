import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setearContrato } from "../../Redux/Actions/Contracts";
import s from "./Details.module.css";

export default function Contrato({
  userByEmail,
  userDetail,
  id,
  contratoDetail,
  SetContratoDetail,
}) {
  const dispatch = useDispatch();
  const [propuesta, setPropuesta] = useState({
    employer: userByEmail?.id,
    developer: id,
    description: "",
    date: "",
    expiration_date: "",
    status: "Pendiente", //"Activo", "Inactivo", "Completado", "Cancelado", "Pendiente"
    price: "",
    aceptado: false,
  });

  const handleChangePropuesta = (e) => {
    setPropuesta({
      ...propuesta,
      [e.target.name]: e.target.value,
    });
  };
  const handlerSendPropuesta = (e) => {
    dispatch(setearContrato(propuesta));
    // dispatch(
    //   // emailer({
    //   //   nombreContratista: nombreContratista,
    //   //   mailContrado: mailContrado,
    //   // })
    // );

    alert("Tu propuesta fue enviada correctamente!");
  };

  console.log(userDetail, "*******");

  return (
    <div className={s.bodyPropuesta}>
      <div className={s.conteiner}>
        <h1>PROPUESTA</h1>
        <h2>
          Contacta a {userDetail?.name} {userDetail?.lastName} y hazle una
          propuesta!
        </h2>
        <form>
          {/* <input type="text" name="titulo" value={propuesta.value.titulo} onChange={(e)=> handleChangePropuesta(e)} >Título:</input> */}
          <label>Fecha de inicio: </label>
          <input type={"date"} name="date" onChange={handleChangePropuesta} />
          <label>Fecha de finalizacion: </label>
          <input
            type={"date"}
            name="expiration_date"
            onChange={handleChangePropuesta}
          />
          <label>Descripcion: </label>
          <input
            type="text-area"
            name="description"
            onChange={handleChangePropuesta}
          />
          <label>Presupuesto total en pesos: $</label>
          <input type="number" name="price" onChange={handleChangePropuesta} />
        </form>
        <div>
          <button
            className={s.buttonVolver}
            onClick={() => SetContratoDetail(!contratoDetail)}
          >
            VOLVER
          </button>
          <button
            className={s.buttonPago}
            //   onClick={() => navigate("/checkout")}
            onClick={handlerSendPropuesta}
          >
            ENVIAR PROPUESTA
          </button>
        </div>
      </div>
    </div>
  );
}
