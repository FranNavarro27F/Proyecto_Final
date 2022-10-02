import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa";
import { putContrato } from '../../Redux/Actions/Contracts';
import { useNavigate } from 'react-router-dom';



export default function Reviews({id}) {

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

const [currentValue, setCurrentValue] = useState(0);
const [hoverValue, setHoverValue] = useState(undefined);
const [ input, setInput ] = useState({
    puntuacion: 0,
    comentario: ""
})
  const stars = Array(5).fill(0)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = value => {
    setCurrentValue(value)
    setInput({
        ...input,
        puntuacion: value
    })
    //dispatch(setReputacion(value))
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  const handleTeaxArea = (e)=>{
    setInput({
    ...input,
    comentario: e.target.value

 })
  }
  const handleEnvio = (e)=>{
    dispatch(putContrato(id,{input}))
    alert("Su reseña fue enviada correctamente")
    navigate("/work")
  }


  return (
    
    <div style={styles.container}>
      <h2>Puntuación</h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea
        placeholder="What's your experience?"
        style={styles.textarea}
        onChange={(e)=>handleTeaxArea(e)}
      />

      <button
      onClick={(e)=>handleEnvio(e)}
        style={styles.button}
      >
        Submit
      </button>
    </div>
     
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};
 
//     const dispatch = useDispatch()
//     const handleSubmit = (e)=>{
//         dispatch(reputacion())
//     }
    

//   return (
   
//     <div>
//        < form onSubmit={(e)=>handleSubmit(e)}>
//       <button></button>
//       <button></button>
//       <button></button>
//       <button></button>        
//       <button></button>
//        </form>
//     </div>
//   )
// }
