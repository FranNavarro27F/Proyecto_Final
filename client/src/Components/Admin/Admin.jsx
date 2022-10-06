import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLenAd,
  getPaisesAd,
  getServAd,
  getTecnAdmin,
  getUsersAdmin,
} from "../../Redux/Actions/Admin";
// import SideBarAd from "./SideBar/SideBarAd";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import UserList from "./Pages/UserList";
import CountryList from "./Pages/CountryList";
import LengList from "./Pages/LengList";
import ServList from "./Pages/ServList";
import TecnList from "./Pages/TecnList";
import "../Work/SideMenuWork/SideMenuWork";
import SideMenuWork from "../Work/SideMenuWork/SideMenuWork";
import { TiGroupOutline } from "react-icons/ti";
import s from "../Admin/Admin.module.css";
import { TiWorldOutline } from "react-icons/ti";
import { TiMessages } from "react-icons/ti";
import { TiDeviceLaptop } from "react-icons/ti";
import { MdOutlineRoomService } from "react-icons/md";
import InicioDash from "./Pages/InicioDash";
import Error404 from "../error404/error404";

export default function Admin() {
  const [tab, setTab] = useState("");

  const openUsuarios = () => setTab("usuarios");
  const openLenguajes = () => setTab("lenguajes");
  const openTecnologias = () => setTab("tecnologias");
  const openServicios = () => setTab("servicios");
  const openPaises = () => setTab("paises");
  const detailPropio = useSelector((state) => state.devUser.detailPropio);
  const dispatch = useDispatch();

  // let lenAdmin = useSelector((state) => state.admin.lengAdmin)
  // let paisesAdmin = useSelector((state) => state.admin.paisAdmin)
  // let tecAdmin = useSelector((state)=> state.admin.tecnAdmin)
  // let servAdmin = useSelector((state)=>state.admin.servAdmin)
  // let usuariosAdmin = useSelector((state)=> state.admin.allUserAdmin)

  useEffect(() => {
    dispatch(getLenAd());
    dispatch(getPaisesAd());
    dispatch(getServAd());
    dispatch(getTecnAdmin());
    dispatch(getUsersAdmin());
  }, [dispatch]);

  return !detailPropio?.isAdmin ? (
    <Error404 />
  ) : (
    <div>
      <div>
        <br />
        <br />
        <div className={s.container}>
          <div className={s.sidebar}>
            <div className={s.sidebarWrapper}>
              <div className={s.sidebarMenu}>
                <SideMenuWork />

                <h3 className={s.title}>Dashboard</h3>
                <ul className={s.sidebarList}>
                  <li className={s.siderbarListItem} onClick={openUsuarios}>
                    <TiGroupOutline /> Usuarios
                  </li>
                  <li className={s.siderbarListItem} onClick={openLenguajes}>
                    <TiMessages /> Lenguajes
                  </li>
                  <li className={s.siderbarListItem} onClick={openTecnologias}>
                    <TiDeviceLaptop /> Tecnologias
                  </li>
                  <li className={s.siderbarListItem} onClick={openServicios}>
                    <MdOutlineRoomService /> Servicios
                  </li>
                  <li className={s.siderbarListItem} onClick={openPaises}>
                    <TiWorldOutline /> Paises
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={s.tablas}>
            {tab === "" ? (
              <InicioDash />
            ) : tab === "usuarios" ? (
              <UserList />
            ) : tab === "lenguajes" ? (
              <LengList />
            ) : tab === "tecnologias" ? (
              <TecnList />
            ) : tab === "servicios" ? (
              <ServList />
            ) : tab === "paises" ? (
              <CountryList />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
