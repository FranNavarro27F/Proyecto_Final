import React from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import s from "./ModalCreate.module.css";

export default function ModalCreate() {
  const navigate = useNavigate();

  return (
    <div>
      <button>
        <article>
          <div onClick={() => navigate("/work")} className={s.modal}>
            <div className={s.container}>
              <h1>PERFIL CREADO CON EXITO</h1>
            </div>
          </div>
        </article>
      </button>
    </div>
  );
}
