import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setearContrato } from "../../Redux/Actions/Contracts";
import s from "./Details.module.css";
import { emailer } from "../../Redux/Actions/Emailer";

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
      // DESCOMENTAR PARA QUE FUNCIONE EL EMAILER.
      //  dispatch(
      //     emailer({
      //       nombreContratista: userByEmail?.name,
      //       mailContrado: userDetail.email,
      //       IDContratado: userDetail.id
      //     })
      //  );
      alert("Tu propuesta fue enviada correctamente!");
    }

  return (
    <div className={s.bodyPropuesta}>
      <div className={s.conteiner}>
        <h1>PROPUESTA</h1>
        <h2>
          Contacta a {userDetail?.name} {userDetail?.lastName} y hazle una
          propuesta!
        </h2>
        <div className={s.divForm}>
        <form className={s.inputForm}>
          {/* <input type="text" name="titulo" value={propuesta.value.titulo} onChange={(e)=> handleChangePropuesta(e)} >Título:</input> */}
          <div className={s.divFormGen}>
          <div className={s.divDataForm}>
          <label>Fecha de inicio: </label>
          <input
          type={"date"} 
          name="date" 
          classname={s.todosInput}
          onChange={handleChangePropuesta} />
          <label>Fecha de finalizacion: </label>
          <input
            classname={s.todosInput}
            type={"date"}
            name="expiration_date"
            onChange={handleChangePropuesta}
          />
          <label>Presupuesto total en pesos: $</label>
          <input 
          classname={s.todosInput}
          type="number" 
          name="price" 
          placeholder="0"
          onChange={handleChangePropuesta} />
          </div>
          <div className={s.divDescription}>
          <label>Descripcion: </label>
          <input
            classname={s.textDescription}
            type="text"
            name="description"
            placeholder="Ingrese una descripción"
            onChange={handleChangePropuesta}
          />
        </div>
        </div>
        </form>
        </div>
        <div className={s.divButtons}>
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
