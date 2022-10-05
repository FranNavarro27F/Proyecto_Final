import React from "react";
// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getContratoId } from "../../Redux/Actions/Contracts";
import s from "../Details/Details.module.css";
// import DetalleContrato from "./DetalleContrato";

export default function Contracts({
  date,
  price,
  pagado,
  aceptado,
  idEmployer,
  idContrato,
  status,
  description,
  expiration_date,
}) {
  //--- funcion para encontrar el nombre del employer de este contrato----
  const usuarios = useSelector((state) => state.devUser.allUsers);

  const findNameEmployer = (id) => {
    if (usuarios?.length) {
      let employerObj = usuarios.find((cur) => cur.id === id);
      let name = employerObj?.name;
      return name;
    }
  };
  //----------------------------------------------------------------------

  // let idContrato = contrato.cur.id;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContratoId(idContrato));
  }, [dispatch, idContrato]);

  return (
    <div className={s.back}>
      <div className={s.divCardContrato}>
        <div className={s.textCardContrato}>
          <label>Descripción: </label>
          {description}
          <br />
          <label>Estado: </label>
          {!pagado
            ? aceptado === false
              ? "No aceptado"
              : `Aceptado en espera de pago ⚠`
            : "Aceptado y pagado ✅ "}
          {aceptado}
          <br />

          <label>Fecha de Inicio: </label>
          {date}
          <br />

          <label>Presupuesto: $ </label>
          {price}
          <br />

          <label>Propuesto por: </label>
          {findNameEmployer(idEmployer)}
          <br />

          {/* <label>Id contrato: </label>
            {idContrato} */}
          {/* <label>Fecha de Finalización: </label>
          {expiration_date} */}

          {/* <label>Status: </label>
          {status}
          <br /> */}
        </div>
        <Link to={`/contrato/${idContrato}`}>
          <button
            // onClick={() => {
            //   navigate(`/contrato/${idContrato}`);
            // }}
            className={s.buttonDetalle}
          >
            Ver Detalle
          </button>
        </Link>
      </div>
      )
    </div>
  );
}

// // import { useAuth0 } from '@auth0/auth0-react';
// import React from "react";
// import { useState } from "react";
// import Stripe from "stripe";
// // import { useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { setearContratoGlobal } from "../../Redux/Actions/Contracts";
// import { useNavigate } from "react-router-dom";
// // import { getUserContrato } from '../../Redux/Actions/DevUser';

// import s from "./Contracts.module.css";
// export default function Contracts({
//   idEmpleador,
//   idDesarroyador,
//   contrato,
//   setContrato,
// }) {
//   const dispatch = useDispatch();
//   // useEffect(()=>{
//   //    dispatch(getUserContrato(user.email))

//   // },[])
//   // const { user} = useAuth0();
//   // console.log(user.email, "acaaaaaaaa")

//   // const idDev = useSelector((state)=>state.devUser.idDev)
//   // const employer = useSelector((state)=> state.devUser.employer)
//   // console.log(employer, "aca employer")
//   // console.log("aca ID dev", idDev)
//   // const limpio = (employer?.filter(c => c.email === user.email));
//   // console.log(limpio, "ID")
//   //gus
//   // const employer1 = "5b77759a-ddb9-4b74-b562-8afb981dfd79";
//   const employer1 = idEmpleador;
//   //fran
//   const developer = idDesarroyador;
//   // const developer = "1e4d9511-6d10-4f19-9c00-08c3808a552c";

//   // const [contrato, setContrato] = useState({
//   //   description: "",
//   //   date: "",
//   //   expiration_date: "",
//   //   price: "",

//   //   employer: employer1,
//   //   developer: developer,
//   //   status: "Activo",
//   //   payment_id: "",
//   // });

//   function handleChange(e) {
//     e.preventDefault();
//     setContrato({
//       ...contrato,
//       [e.target.name]: e.target.value,
//     });
//   }
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("tocaron");
//     dispatch(setearContratoGlobal(contrato));
//   }

//   return (
//     <div className={s.bodyForm}>
//       {/* <div>
//             <Stripe/>
//         </div> */}
//       <div className={s.form}>
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <div className={s.divInputs}>
//             {" "}
//             <label>Fecha Inicio:</label>
//             <input
//               type={"date"}
//               name={"date"}
//               value={contrato.date}
//               onChange={(e) => handleChange(e)}
//             />
//           </div>
//           <div className={s.divInputs}>
//             <label>Fecha fin:</label>
//             <input
//               type={"date"}
//               name={"expiration_date"}
//               value={contrato.expiration_date}
//               onChange={(e) => handleChange(e)}
//             />
//           </div>
//           <div className={s.divInputs}>
//             <label>Descripción</label>
//             <input
//               type="text-area"
//               name={"description"}
//               value={contrato.description}
//               onChange={(e) => handleChange(e)}
//             />
//           </div>
//           <div className={s.divInputs}>
//             <label>Precio</label>
//             <input
//               type={"number"}
//               name={"price"}
//               value={contrato.price}
//               onChange={(e) => handleChange(e)}
//             ></input>
//           </div>
//           <div className={s.divbutton}>
//             <button className={s.buttonMande}>ESTABLECER CONTRATO</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
