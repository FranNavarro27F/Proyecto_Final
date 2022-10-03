import React from 'react'
import "./SideBar.css"


export default function SideBarAd() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="title">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="siderbarListItem">
                        Usuarios
                    </li>
                    <li className="siderbarListItem">
                        Lenguajes
                    </li>
                    <li className="siderbarListItem">
                        Tecnologias
                    </li>
                    <li className="siderbarListItem">
                        Servicios
                    </li>
                    <li className="siderbarListItem">
                        Paises
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
