import React from 'react'
import Planeta from './Assets/Planeta/Planeta'
import PlanetasChicos from './Assets/PlanetasChicos/PlanetasChicos'
import ButtonLanding from './ButtonLanding/ButtonLanding'
import SideMenu from './SideMenu/SideMenu'


export default function Landing() {
  return (
    <div>
      <PlanetasChicos/>
        <Planeta/>
        <SideMenu/>
        <ButtonLanding/>
        
   

    </div>
  )
}
