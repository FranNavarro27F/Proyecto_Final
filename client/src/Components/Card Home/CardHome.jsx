import React from 'react'
import Ellipse from './Assets/Ellipse/Ellipse'
import s from './CardHome.module.css'
import CardW1 from './CardW/CardW1'
import CardW2 from './CardW/CardW2'
import CardW3 from './CardW/CardW3'

export default function CardHome() {
  return (
    <div className={s.divcarhome}>
      <Ellipse/>
      <h1 className={s.titlew}>Trabajos recientes</h1>
      <div>
        <CardW1/>
        <CardW2/>
        <CardW3/>
      </div>
    </div>
  )
}
