import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPaisesAd} from "../../../Redux/Actions/Admin";
import "./CountryList.css"

export default function CountryList() {

    const dispatch = useDispatch()

    let paisesAdmin = useSelector((state) => state.admin.paisAdmin)
    


  return (
    <div className='containerPaises'>
        <div>
            <h1>Soy Paises</h1>
            <div>
        {paisesAdmin?.map((curr)=>{
            return (
                <div></div>
            )
        })}
            </div>
        </div>
    </div>
  )
}
