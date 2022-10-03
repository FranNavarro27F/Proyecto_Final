import React, {useState} from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {cambioTabla, getUsersAdmin, putUsuarioAdmin} from "../../../Redux/Actions/Admin";
import s from "./DashboardAdmin.module.css"

export default function UsuariosList() {

    const dispatch = useDispatch()

    let usersAdmin = useSelector((state) => state.admin.allUserAdmin)
    let auxOrder = useSelector((state)=> state.admin.auxOr)

    var current = []

    // let aux = true
    current = usersAdmin.filter((curr)=> curr.habilitado === auxOrder)
    
    let [newP, setNewP] = useState({
        name: ""
    })

    useEffect(()=>{
        dispatch(getUsersAdmin())
    },[])



    const handleHabUsers = (id, habilitado)=>{
        if(habilitado === true){
            habilitado = false
        }else{
            habilitado = true
        }
        // setHabilitador({
        //     id: id,
        //     habilitado: habilitado
        // })
        dispatch(putUsuarioAdmin({
            id: id,
            habilitado: habilitado
        }))
        alert("Estado del usuario seleccionado cambiado correctamente")
        // dispatch(getPaisesAd())
        window.location.reload()

    }

    const separacionHab = (auxOrder)=>{
       dispatch(cambioTabla(auxOrder))
    }


  return (
    <div className={s.container}>
        <div>
            <h1>Lista de Usuarios</h1>
            <button onClick={(e) => separacionHab(true)}>Ver Habilitados</button>
            <button onClick={(e) => separacionHab(false)}>Ver Deshabilitados</button>
            
            <div className={s.divlist}>

        {current?.map((curr)=>{
            let nh = ""
            curr.habilitado === true? nh = "Habilitado" : nh = "Deshabilitado"
            return (
                // <div className={s.divlist}>
                    <div className={s.divIndiv}>
                        <div className={s.divNombre}>
                <h4>
                {curr.name}
                </h4>
                </div>
                <div className={s.divHabilitador}>
                <h4>{nh}</h4>
                </div>
                <div className={s.buttonHab}>
                <button onClick={(e) => handleHabUsers(curr.id, curr.habilitado)}>X</button>
                </div>
                </div>
                // </div>
            )
        })}
            </div>
            <br/>
        </div>
    </div>
  )
}