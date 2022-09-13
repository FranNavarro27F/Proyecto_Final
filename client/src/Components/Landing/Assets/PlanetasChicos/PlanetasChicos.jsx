import React from 'react'
import circulitos from '../PlanetasImages/circulitos.png'
import s from '../PlanetasChicos/PlanetasChicos.module.css'

export default function PlanetasChicos () {
  return (
    <div className={s.Chicos}>
        <img className={s.imgChicos} src={circulitos}></img>

    </div>
  )
}
