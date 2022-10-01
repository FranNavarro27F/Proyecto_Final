
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import  Contrato  from '../Details/Contrato';
import { aceptarContrato, editarContrato, rechazarContrato, getContratoId } from '../../Redux/Actions/Contracts';
import s from "../Contracts/DetalleContracts.module.css";

export default function DetalleContrato() {

  const {id} = useParams()
  const dispatch = useDispatch();
  const detalleC = useSelector((state)=> state.contracts.detalleContrato)
  const [mPropuesta, setmPropuesta] = useState(false)
  
  useEffect(()=>{
    dispatch(getContratoId(id))
  },[dispatch, id, detalleC.aceptado])
  
    //aca el handle del aceptar contrato
    const handleAceptar= () =>{
      dispatch(aceptarContrato(id)).then(data=> dispatch(getContratoId(id)))
      alert("La propuesta ha sido aceptada correctamente")
    }
//aca el handle del rechazar contrato
    const handleRechazar = ()=>{
      dispatch(rechazarContrato(id)).then(data=> dispatch(getContratoId(id)))
      alert("La propuesta ha sido rechazada correctamente")
    }

    const handleContraPropuesta = (propuesta) => {
      setmPropuesta(true)
      dispatch(editarContrato(id, propuesta)).then(data=> dispatch(getContratoId(id)))
    }
   

    return (
    <div className={s.body}>
      <div className={s.titulito}>
      <h1>Detalle del contrato</h1>
      <div className={s.cardDetalle}>
      <div className={s.textBox}>
          <label>Id contrato: </label>
              {id} 
              <br/>
              <label> Fecha de Inicio: </label> 
              {detalleC?.date} 
              <br/>
              <label>Fecha de Finalización: </label>
              {detalleC?.expiration_date}
              <br/>
              <label>Presupuesto: $ </label>
              {detalleC?.price}
              <br/>
              <label>Descripción: </label>
              { detalleC?.description}
              {/* <br/>
              <label>Status: </label>
              {detalleC?.status} */}
              <br/> 
              <label>Estado: </label>
              { detalleC?.aceptado === false ? "No aceptado" : "Aceptado" }
              <br/>
              </div>
              </div>
              <br/>
              <br/>
              <br/>
              <div className={s.buttonUbi}>
              <button
              onClick={(e)=>handleAceptar(e)}
              className={s.buttonDetalle}
              >
                Aceptar
                </button>
               
                <button
                 className={s.buttonDetalle}
                 onClick= {(e)=> handleRechazar(e)}
              >
                Rechazar
                </button>
                  
                <button
              className={s.buttonDetalle}
              onClick ={(e)=>handleContraPropuesta(e)}
              >
                Contrapropuesta
                </button>
                </div>
        </div>

        {mPropuesta && <Contrato 
          textoSuperior={"asdjfña"}
          userByEmail={detalleC?.employer}
          userDetail={detalleC?.developer}
          id={detalleC?.id}
        />}
      </div>
   
  );
}
