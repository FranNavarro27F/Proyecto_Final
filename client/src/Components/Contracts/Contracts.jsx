// import { useAuth0 } from '@auth0/auth0-react';
import React from "react";
import { useState } from "react";
import Stripe from "stripe";
// import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setearContratoGlobal } from "../../Redux/Actions/Contracts";
import { useNavigate } from "react-router-dom";
// import { getUserContrato } from '../../Redux/Actions/DevUser';

export default function Contracts({ idEmpleador, idDesarroyador }) {
  const dispatch = useDispatch();
  // useEffect(()=>{
  //    dispatch(getUserContrato(user.email))

  // },[])
  // const { user} = useAuth0();
  // console.log(user.email, "acaaaaaaaa")

  // const idDev = useSelector((state)=>state.devUser.idDev)
  // const employer = useSelector((state)=> state.devUser.employer)
  // console.log(employer, "aca employer")
  // console.log("aca ID dev", idDev)
  // const limpio = (employer?.filter(c => c.email === user.email));
  // console.log(limpio, "ID")
  //gus
  const employer1 = "5b77759a-ddb9-4b74-b562-8afb981dfd79";
  // const employer1 = idEmpleador;
  //fran
  // const developer = idDesarroyador;
  const developer = "1e4d9511-6d10-4f19-9c00-08c3808a552c";

  const [contrato, setContrato] = useState({
    description: "",
    date: "",
    expiration_date: "",
    price: "",

    employer: employer1,
    developer: developer,
    status: "Activo",
    payment_id: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setContrato({
      ...contrato,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("tocaron");
    dispatch(setearContratoGlobal(contrato));
  }
  const userDetail = useSelector((state) => state.devUser.details);
  const navigate = useNavigate();
  return (
    <div>
      {/* <div>
            <Stripe/>
        </div> */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Fecha Inicio:</label>
        <input
          type={"date"}
          name={"date"}
          value={contrato.date}
          onChange={(e) => handleChange(e)}
        />
        <label>Fecha fin:</label>
        <input
          type={"date"}
          name={"expiration_date"}
          value={contrato.expiration_date}
          onChange={(e) => handleChange(e)}
        />
        <label>Descripción</label>
        <input
          type="text-area"
          name={"description"}
          value={contrato.description}
          onChange={(e) => handleChange(e)}
        />
        <label>Precio</label>
        <input
          type={"number"}
          name={"price"}
          value={contrato.price}
          onChange={(e) => handleChange(e)}
        ></input>
        <button>Mande</button>
        <button onClick={() => navigate(`/work/details/${userDetail?.id}`)}>
          VOLVER
        </button>
      </form>
    </div>
  );
}
