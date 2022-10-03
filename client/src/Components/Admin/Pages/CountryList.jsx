import React, {useState} from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {cambioTabla, getPaisesAd, putPaisesAdmin} from "../../../Redux/Actions/Admin";
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
        setNewP({
            [e.target.name]: e.target.value})
    }


    const separacionHab = (auxOrder)=>{
       dispatch(cambioTabla(auxOrder))
    }


  return (
    <div className={s.container}>
        <div>
            <h1>Paises</h1>
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
                <button onClick={(e) => handleHabPaises(curr.id, curr.habilitado)}>X</button>
                </div>
                </div>
                
                // </div>
                
            )
        })}
            </div>
            <br/>
            <div>
                <h3>¿Desea agregar un nuevo pais?</h3>
                <br/>
                <input
                type="text"
                value={newP.name}
                onChange={(e)=> handleNewPais(e)}
                />
            </div>
            <br/>
            <button>Confirmar</button>
        </div>
    </div>
  )
}
