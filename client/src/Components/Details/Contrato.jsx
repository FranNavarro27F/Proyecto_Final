import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetContract, setearContrato } from "../../Redux/Actions/Contracts";
import s from "./Details.module.css";
import { useNavigate } from "react-router-dom";
import { emailer } from "../../Redux/Actions/Emailer";
import Swal from "sweetalert2";
// import { Button } from "react-bootstrap";

export default function Contrato({
  userByEmail,
  userDetail,
  id,
  contratoDetail,
  SetContratoDetail,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const [propuesta, setPropuesta] = useState({
    employer: userByEmail,
    developer: id,
    description: "",
    date: "",
    expiration_date: "",
    status: "Pendiente", //"Activo", "Inactivo", "Completado", "Cancelado", "Pendiente"
    price: "",
    aceptado: false,
  });

  const today = new Date().toLocaleDateString({
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const setOrderDate = (today) => {
    let division = today.split("/");
    let dia = division[0];
    let mes = division[1];
    let año = division[2];
    division[0] = año;
    division[2] = dia;

    if (mes.length === 1) {
      mes = "0" + mes;
    }
    if (dia.length === 1) {
      dia = "0" + dia;
    }
    let fechaExacta = año + "-" + mes + "-" + dia;
    return fechaExacta;
  };

  const validate = (propuesta) => {
    let errors = {};
    if (propuesta.description === "")
      errors.description = "El campo 'descripción' es obligatorio";
    if (propuesta.description.length < 5)
      errors.description = "Mínimo cinco caracteres";
    if (propuesta.description.length > 200)
      errors.description = "Máximo doscientos caracteres";
    if (/[^\w\s]/.test(propuesta.description))
      errors.description = "Solo se permiten letras";
    if (propuesta.price <= 0) errors.price = "El número tiene que ser positivo";
    if (propuesta.price > 1000000)
      errors.price = "El precio máximo es un millón de pesos";
    return errors;
  };

  const handleChangePropuesta = (e) => {
    setPropuesta({
      ...propuesta,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...propuesta,
        [e.target.name]: e.target.value,
      })
    );
  };

  const sweetAlert = () => {
    return Swal.fire("Good job!", "You clicked the button!", "success");
  };

  const handlerSendPropuesta = (e) => {
    if (
      !propuesta.date ||
      !propuesta.expiration_date ||
      !propuesta.description ||
      !propuesta.price
    )
      Swal.fire({
        icon: "error",
        title: "Uups...",
        text: "Los campos no pueden estar vacios!",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    else if (errors.description) alert(errors.description);
    else if (errors.price) alert(errors.price);
    else {
      Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "Propuesta enviada correctamente",
        showConfirmButton: false,
        timer: 2000,
      });
      dispatch(setearContrato(propuesta));
      // DESCOMENTAR PARA QUE FUNCIONE EL EMAILER.
      //  dispatch(
      //     emailer({
      //       nombreContratista: userByEmail?.name,
      //       mailContrado: userDetail.email,
      //       IDContratado: userDetail.id
      //     })
      //  );
      navigate("/work");
    }
  };

  return (
    <div className={s.bodyPropuesta}>
      <div className={s.conteiner}>
        <h2>
          Contacta a {userDetail?.name} {userDetail?.lastName} y hazle una
          propuesta!
        </h2>

        <br />
        <div className={s.divForm}>
          <form className={s.inputForm}>
            <div className={s.divFormGen}>
              <div className={s.divDataForm}>
                <label>Fecha de inicio: </label>
                <br />
                <input
                  type={"date"}
                  name="date"
                  // value={today}
                  min={setOrderDate(today)}
                  //min="2022-10-22"
                  className={s.todosInput}
                  required
                  onChange={handleChangePropuesta}
                />
                <br />
                <label>Fecha de finalizacion: </label>
                <input
                  className={s.todosInput}
                  type={"date"}
                  name="expiration_date"
                  onChange={handleChangePropuesta}
                  max="2023-09-30"
                />
                <br />
                <label>Presupuesto total en pesos: $</label>
                <input
                  className={s.todosInput}
                  type="number"
                  min="1"
                  max="1000000"
                  name="price"
                  placeholder="0"
                  onChange={handleChangePropuesta}
                />
              </div>
              <div>
                <span>Descripcion: </span>
                <div className={s.divDescription}>
                  <textarea
                    className={s.textArea}
                    placeholder="Ingrese una descripción"
                    onChange={handleChangePropuesta}
                    rows="10"
                    cols="45"
                    name="description"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={s.divButtons}>
          <button
            className={s.buttonVolver}
            onClick={() => {
              //console.log("aaaaa");
              dispatch(resetContract());
              SetContratoDetail(!contratoDetail);
            }}
          >
            Volver
          </button>

          <button className={s.buttonPago} onClick={handlerSendPropuesta}>
            Enviar Propuesta
          </button>
        </div>
      </div>
    </div>
  );
}
