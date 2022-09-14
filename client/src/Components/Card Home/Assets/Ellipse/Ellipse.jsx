import React from 'react';
import s from './Ellipse.module.css'
import circulos from '../../../Home/Assets/Circulos/circulos.png'

export default function Ellipse2() {
  return (
    <div className={s.ellip2}>
<img className={s.imgcircu} src={circulos} alt="circu" />
    </div>
  )
}
