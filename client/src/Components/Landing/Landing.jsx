
import React from 'react'
import Planeta from './Assets/Planeta/Planeta'
import PlanetasChicos from './Assets/PlanetasChicos/PlanetasChicos'
import ButtonLanding from './ButtonLanding/ButtonLanding'
import SideMenu from './SideMenu/SideMenu'
import s from './Landing.module.css'


export default function Landing() {
  return (
    <div>
      <PlanetasChicos/>
        <Planeta/>
        <SideMenu/>
        <ButtonLanding/>
          <div className={s.textLanding}>
            <p className={s.text1landing}> Hazel Felix Ramos based in Tokushima Japan</p>
            </div>     
   
    </div>
  );
}
