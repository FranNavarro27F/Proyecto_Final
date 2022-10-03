import React, {useState} from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {cambioTabla, getLenAd, putLenguajesAdmin} from "../../../Redux/Actions/Admin";
import s from "./DashboardAdmin.module.css"

export default function LengList() {
    const dispatch = useDispatch()
    let lenguajesAdmin = useSelector((state) => state.admin.lengAdmin)
    let auxOrder = useSelector((state)=> state.admin.auxOr)

    var current = []

    // let aux = true
    current = lenguajesAdmin.filter((curr)=> curr.habilitado === auxOrder)
    
    let [newP, setNewP] = useState({
        name: ""
    })

    useEffect(()=>{
        dispatch(getLenAd())
    },[])



    const handleHabLeng = (id, habilitado)=>{
        if(habilitado === true){
            habilitado = false
        }else{
            habilitado = true
        }
        // setHabilitador({
        //     id: id,
        //     habilitado: habilitado
        // })
        dispatch(putLenguajesAdmin({
            id: id,
            habilitado: habilitado
        }))
        alert("Estado del lenguaje seleccionado cambiado correctamente")
        // dispatch(getPaisesAd())
        window.location.reload()

    }

    const handleNewLenguaje = (e)=>{
        setNewP({
            [e.target.name]: e.target.value})
    }


    const separacionHab = (auxOrder)=>{
       dispatch(cambioTabla(auxOrder))
    }


  return (
    <div className={s.container}>
        <div>
            <h1>Lenguajes</h1>
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
                <button onClick={(e) => handleHabLeng(curr.id, curr.habilitado)}>X</button>
                </div>
                </div>
                
                // </div>
                
            )
        })}
            </div>
            <br/>
            <div>
                <h3>¿Desea agregar un nuevo lenguaje?</h3>
                <br/>
                <input
                type="text"
                value={newP.name}
                onChange={(e)=> handleNewLenguaje(e)}
                />
            </div>
            <br/>
            <button>Confirmar</button>
        </div>
    </div>
  )
}
