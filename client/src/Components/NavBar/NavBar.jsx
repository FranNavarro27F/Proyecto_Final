import React from 'react'
import s from '../NavBar/NavBar.module.css'

export default function NavBar() {
  return (
    <header>
    <div className={s.divGenNavBar}> 
      <form>
        <input
        className={s.searchBar}
        type="text"
        placeholder='Search...'
        ></input>
        <button
        className={s.buttonSearch}
        type='submit'
        >
          x
        </button>
      </form>
    </div>
      <form>
        <select
        className={s.selectTecnologias}
        >
          <option>a</option>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </select>
      </form>
      <div
      >
        <p className={s.puntuacion}>Puntuación</p>
      </div>
      <div 
      >
        <p className={s.servicio}>Servicio</p>
      </div>
    </header>
  )
}