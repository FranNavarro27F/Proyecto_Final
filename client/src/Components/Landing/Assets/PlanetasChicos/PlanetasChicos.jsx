import React from 'react'
import circulitos from '../PlanetasImages/circulitos.png'
import s from '../PlanetasChicos/PlanetasChicos.module.css'

export default function PlanetasChicos () {
  return (
    <div>
        <img className={s.imgChicos} src={circulitos} alt={circulitos}></img>

    </div>
  )
}
