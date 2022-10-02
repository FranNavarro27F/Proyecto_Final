import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Reviews() {
 
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        dispatch(reputacion())
    }
    

  return (
   
    <div>
       < form onSubmit={(e)=>handleSubmit(e)}>
      <button></button>
      <button></button>
      <button></button>
      <button></button>        
      <button></button>
       </form>
    </div>
  )
}
