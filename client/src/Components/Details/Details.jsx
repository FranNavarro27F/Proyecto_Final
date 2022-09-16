import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import s from "../Details/Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserId } from "../../Redux/Actions/DevUser";
import { getCountries, getCountriesId } from "../../Redux/Actions/Countries";


export default function Details() {
  let { id } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getUserId(id))
    dispatch(getCountriesId(id))
  },[dispatch, id])

  
   const user = useSelector((state)=>state.devUser.details)
   console.log(user,"acauser")
   return (
  <div>
   <span>Nombre:</span>
    <h2>{user.name + ' '}{user.lastName} </h2>
    {/* [0].toUpperCase()+ user.name.slice(1) + ' '//[0].toUpperCase()+ user.lastName.slice(1)} */}
      <br/>
    <div>
      <img>{user.profilePicture}</img>
      <br/>
      <span>Email:</span> 
    <span>{user.email}</span>
    <br/>
    <span>Lenguajes:</span>
    <span>{user.lenguajes?.map(e=>e.name)}</span>
    <br/>
    <span>Servicios:</span>
    <span>{user.servicios?.map(s=>s.name)}</span>
    <br/>
    <span>LinkedIn:</span>
    <span>{user.linkedIn}</span>
    <br/>
    <span>Tecologias:</span>
    <span>{user.tecnologias?.map(t=>t.name)}</span>
    <br/>
    <span>Pais:</span>
    <span>{user.paiseId}</span>
    <br/>
    <span>Sitio Web: </span>
    <span>{user.webSite}</span>
    <br/>
    <span>Años Experiencia: </span>
    <span>{user.yearsOfExperience}</span>
    <br/>
    <span>Presupuesto por hora: </span>
    <span>{user.dailyBudget}</span>

    </div>
  </div>
  )
}
