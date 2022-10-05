import React, {useState} from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {cambioTabla, getPaisesAd, newPaisAdmin, putPaisesAdmin} from "../../../Redux/Actions/Admin";
import s from "./DashboardAdmin.module.css";

export default function CountryList() {

    const dispatch = useDispatch()
  
    let paisesAdmin = useSelector((state) => state.admin.paisAdmin)
    let auxOrder = useSelector((state)=> state.admin.auxOr)

    var current = []

    // let aux = true
    current = paisesAdmin.filter((curr)=> curr.habilitado === auxOrder)
    
    let [newP, setNewP] = useState({
        name: ""
    })

    let [disabled, setDisabled] = useState(true)

    useEffect(()=>{
        dispatch(getPaisesAd())
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
        dispatch(putPaisesAdmin({
            id: id,
            habilitado: habilitado
        }))
        alert("Estado del Pais seleccionado Cambiado correctamente")
        // dispatch(getPaisesAd())
        window.location.reload()

    }

    const handleNewPais = (e)=>{
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

    const handlePostPais = (e)=>{
        e.preventDefault()
        // if(newP.name === ""){
        //     setDisabled(false)
        // }
        dispatch(newPaisAdmin(newP))
        alert("¡Pais ingresado correctamente! Que tenga un buen día")
    }



  return (
    <div className={s.container}>
        <div>
        <div className={s.bigTitle}>
            <h1>Paises</h1>
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
                <div className={s.divHabilitador}>
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
                <h3>¿Desea agregar un nuevo pais?</h3>
                <br/>
                <input
                type="input"
                placeholder='Nuevo País'
                value={newP.name}
                onChange={(e)=> handleNewPais(e)}
                />
            </div>
            <br/>
            <div className={s.divButtones}>
            <button type="submit" onClick={(e) => handlePostPais(e)} disabled={disabled}>Confirmar</button>
        </div>
        </div>
    </div>
  )
}
