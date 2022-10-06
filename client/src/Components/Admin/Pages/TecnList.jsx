import React, {useState} from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {cambioTabla, getTecnAdmin, newTecnologiaAdmin, putTecnologiasAdmin} from "../../../Redux/Actions/Admin";
import s from "./DashboardAdmin.module.css"

export default function TecList() {

    const dispatch = useDispatch();
    let tecAdmin = useSelector((state) => state.admin.tecnAdmin)
    let auxOrder = useSelector((state)=> state.admin.auxOr)

    var current = []

    // let aux = true
    current = tecAdmin.filter((curr)=> curr.habilitado === auxOrder)
    
    let [newP, setNewP] = useState({
        name: ""
    })

    let [disabled, setDisabled] = useState(true)

    useEffect(()=>{
        dispatch(getTecnAdmin())
    },[])



    const handleHabTecn = (id, habilitado)=>{
        if(habilitado === true){
            habilitado = false
        }else{
            habilitado = true
        }
        // setHabilitador({
        //     id: id,
        //     habilitado: habilitado
        // })
        dispatch(putTecnologiasAdmin({
            id: id,
            habilitado: habilitado
        }))
        alert("Estado del servicio seleccionado cambiado correctamente")
        // dispatch(getPaisesAd())
        window.location.reload()

    }

    const handleNewTec = (e)=>{
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

    const handlePostTec = (e)=>{
        e.preventDefault()
        // if(newP.name === ""){
        //     setDisabled(false)
        // }
        dispatch(newTecnologiaAdmin(newP))
        alert("¡Tecnología ingresada correctamente! Que tenga un buen día")
        window.location.reload()
    }

  return (
    <div className={s.container}>
        <div>
        <div className={s.bigTitle}>
            <h1>Tecnologías</h1>
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
                <button onClick={(e) => handleHabTecn(curr.id, curr.habilitado)}>X</button>
                </div>
                </div>
                
                // </div>
                
            )
        })}
            </div>
            <br/>
            <div className={s.agregarCosas}>
                <h3>¿Desea agregar una nueva tecnología?</h3>
                <br/>
                <input
                type="text"
                placeholder='Nueva Tecnología'
                value={newP.name}
                onChange={(e)=> handleNewTec(e)}
                />
            </div>
            <br/>
            <div className={s.divButtones}>
            <button type="submit" onClick={(e) => handlePostTec(e)} disabled={disabled}>Confirmar</button>
        </div>
        </div>
    </div>
  )
}