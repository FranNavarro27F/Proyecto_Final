import React from 'react'
import { TbArrowBigLeftLines } from "react-icons/tb"
import s from "./InicioDash.module.css"


export default function(name) {
  return (
    <div className={s.containerD}>
        <div className={s.primerDiv}>
            <div className={s.segundoDiv}>
                <h1>¡Bienvenido a su Panel!</h1>
                <h3>¿Qué desea ver hoy?</h3>
                <div className={s.contIcon}>
                <TbArrowBigLeftLines className={s.reacticon}/>
                </div>
            </div>
        </div>
    </div>
  )
}
