import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Propuesta() {

    const navigate = useNavigate();
    const dispatch= useDispatch();
    const userEmployer = useSelector((state) => state.devUser.employer);
   

const [input, setInput] = useState({})
useEffect(() => {})

const handleChangeInput = (e) => {
    setInput({})}


  return (
    <div onChange={(e) => handleChangeInput(e)}>
        <form>
            <input type="text">Título:</input>
            <input type="text-area">Descripción:</input>
            <input type="number">Presupuesto: $</input>
            <button>Enviar propuesta</button>
        </form>
    </div>
  )
}
