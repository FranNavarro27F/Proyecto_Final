import React, { useState } from "react";
import s from "./ModalWork.module.css";

export default function ModalWork() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button>
        <article>
          <div className={s.modal}>
            <div className={s.container}>
              <h1>
                No se han encontrado coincidencias con los parámetros de
                búsqueda utlilizados
              </h1>
            </div>
          </div>
        </article>
      </button>
    </div>
  );
}
