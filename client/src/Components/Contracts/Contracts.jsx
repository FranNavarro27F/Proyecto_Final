import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUserContrato } from '../../Redux/Actions/DevUser';


export default function Contracts() {
   
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getUserContrato(user.email)) 
       
    },[])
    const { user} = useAuth0();
    console.log(user.email, "acaaaaaaaa")
    
    const idDev = useSelector((state)=>state.devUser.idDev)
    const employer = useSelector((state)=> state.devUser.employer)
    console.log(employer, "aca employer")
    console.log("aca ID dev", idDev)
    const limpio = (employer?.filter(c => c.email === user.email));
    console.log(limpio, "ID")
 
  return (
    <div>
        <form>
            <label>Fecha Inicio:</label>
            <input type={"date"} />
            
            <label>Fecha fin:</label>
            <input type={"date"} />

            <label>Descripción</label>
            <input type="text-area" />

            <label>Precio</label>
            <input type ={"number"}></input>

        </form>
    </div>
  )
}
