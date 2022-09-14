import React from 'react';
import s from './ButtonLanding.module.css';
import { Link } from 'react-router-dom';


export default function ButtonLanding() {
  return (
    <div>
        <div className={s.possitionL}>
          <Link to={'/work'}>
          <button className={s.buttonL}>Work</button>
          </Link>
          </div>
        <div className={s.possitionLg}>
          <Link to='/home'>
          <button className={s.buttonLg}>Home</button>
          </Link>
          </div>
    </div>
  )
}
