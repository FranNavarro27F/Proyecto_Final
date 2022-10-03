import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getLenAd, getPaisesAd, getServAd, getTecnAdmin, getUsersAdmin} from "../../Redux/Actions/Admin";
import SideBarAd from "./SideBar/SideBarAd";
import "./Admin.css"
import{
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import UserList from "./Pages/UserList";
import CountryList from "./Pages/CountryList";
import LengList from "./Pages/LengList";
import ServList from "./Pages/ServList";
import TecnList from "./Pages/TecnList";


export default function Admin(){
    
    const dispatch = useDispatch()

    let lenAdmin = useSelector((state) => state.admin.lengAdmin)
    let paisesAdmin = useSelector((state) => state.admin.paisAdmin)
    let tecAdmin = useSelector((state)=> state.admin.tecnAdmin)
    let servAdmin = useSelector((state)=>state.admin.servAdmin)
    let usuariosAdmin = useSelector((state)=> state.admin.allUserAdmin)

    useEffect(()=>{
        dispatch(getLenAd())
        dispatch(getPaisesAd())
        dispatch(getServAd())
        dispatch(getTecnAdmin())
        dispatch(getUsersAdmin())
    },[])


    return (
        <div>
            <h1>Bienvenido a Panel de Admin</h1>
            <div className="container">
            <SideBarAd/>
            {/* <UserList/> */}
            {/* <CountryList/> */}
            {/* <LengList/> */}
            {/* <ServList/> */}
            {/* <TecnList/> */}
            </div>
    </div>)


}