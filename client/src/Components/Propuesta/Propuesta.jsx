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

}