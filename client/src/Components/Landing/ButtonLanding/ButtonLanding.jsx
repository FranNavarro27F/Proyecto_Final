import React from 'react'
import s from './ButtonLanding.module.css'

export default function ButtonLanding() {
  return (
    <div>
        <div className={s.possitionL}><button className={s.buttonL}>Algo1</button></div>
        <div className={s.possitionLg}><button className={s.buttonLg}>Algo2</button></div>
    </div>
  )
}
