import React, {useState} from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {cambioTabla, getServAd, newServicioAdmin, putServiciosAdmin} from "../../../Redux/Actions/Admin";
import s from "./DashboardAdmin.module.css"

export default function ServList() {

    const dispatch = useDispatch()

    let servicioAdmin = useSelector((state) => state.admin.servAdmin)
    let auxOrder = useSelector((state)=> state.admin.auxOr)

    var current = []

    // let aux = true
    current = servicioAdmin.filter((curr)=> curr.habilitado === auxOrder)
    
    let [newP, setNewP] = useState({
        name: ""
    })

    let [disabled, setDisabled] = useState(true)

    useEffect(()=>{
        dispatch(getServAd())
    },[])



    const handleHabPaises = (id, habilitado)=>{
        if(habilitado === true){
            habilitado = false
        }else{
            habilitado = true
        }
        // setHabilitador({
        //     id: id,
        //     habilitado: habilitado
        // })
        dispatch(putServiciosAdmin({
            id: id,
            habilitado: habilitado
        }))
        alert("Estado del servicio seleccionado cambiado correctamente")
        // dispatch(getPaisesAd())
        window.location.reload()

    }

    const handleNewServicio = (e)=>{
        if(e.target.value === ""){
            setDisabled(true)
        }else{
            setDisabled(false)
        }
        setNewP({
            name: e.target.value})
    }


    const separacionHab = (auxOrder)=>{
       dispatch(cambioTabla(auxOrder))
    }


    const handlePostServ = (e)=>{
        e.preventDefault()
        // if(newP.name === ""){
        //     setDisabled(false)
        // }
        dispatch(newServicioAdmin(newP))
        alert("¡Servicio ingresado correctamente! Que tenga un buen día")
        window.location.reload()
    }

  return (
    <div className={s.container}>
        <div>
        <div className={s.bigTitle}>
            <h1>Servicios</h1>
        </div>
        <div className={s.divButtones}>
            <button onClick={(e) => separacionHab(true)}>Ver Habilitados</button>
            <button onClick={(e) => separacionHab(false)}>Ver Deshabilitados</button>
        </div>
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
                <div className={nh === "Habilitado" ? s.divHabilitador : s.divDeshabilitado}>
                <h4>{nh}</h4>
                </div>
                <div className={s.buttonHab}>
                <button onClick={(e) => handleHabPaises(curr.id, curr.habilitado)}>X</button>
                </div>
                </div>
                
                // </div>
                
            )
        })}
            </div>
            <br/>
            <div className={s.agregarCosas}>
                <h3>¿Desea agregar un nuevo servicio?</h3>
                <br/>
                <input
                type="text"
                placeholder='Nuevo Servicio'
                value={newP.name}
                onChange={(e)=> handleNewServicio(e)}
                />
            </div>
            <br/>
            <div className={s.divButtones}>
            <button type="submit" onClick={(e) => handlePostServ(e)} disabled={disabled}>Confirmar</button>
        </div>
        </div>
    </div>
  )
}
