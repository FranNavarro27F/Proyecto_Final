import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa";
import { putContrato } from '../../Redux/Actions/Contracts';
import { useNavigate } from 'react-router-dom';
import s from "./ReviewRender.module.css";



export default function ReviewRender({ puntuacion, comentario}) {
  // console.log("+++++++8++++++++",puntuacion, comentario,"+++++++8++++")

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

console.log(puntuacion, comentario )

const [currentValue, setCurrentValue] = useState(puntuacion);
const [hoverValue, setHoverValue] = useState(undefined);
const [ input, setInput ] = useState({
    puntuacion: puntuacion,
    comentario: comentario
})
  const stars = Array(5).fill(0)
 
  return (
    <div className={ s.div_general_reviewRender}>
    <div style={styles.container}>
      <h2>Reseña</h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
            //   onClick={() => handleClick(index + 1)}
            //   onMouseOver={() => handleMouseOver(index + 1)}
            //   onMouseLeave={handleMouseLeave}
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
      value={comentario}
      className={s.textarea_reviewRender}
      />

    </div>
    </div>
  );
};

const styles = {}