import React from "react";
import s from "./Home.module.css";
import Girl1 from "./Assets/girl/girl1";

import Landing from "../Landing/Landing";
import diamante from "./Assets/Diamante/diamante.png";
import Circulos from "./Assets/Circulos/Circulos";
import Circulo from "./Assets/Circulo/Circulo.jsx";
import Footer from "../Footer/Footer";
import CardHome from "../Card Home/CardHome";

export default function Home() {
  return (
    <div>
      <Landing />
      <div>
        <div className={s.body}>
          <div className={s.luz}></div>

          <Circulo className={s.circulo} />

          <Circulos className={s.circulos} />
          <Girl1 />

          <img className={s.diamante} src={diamante} alt="diamante" />
          <div className={s.luzDiamante}></div>
        </div>
        <div className={s.divTextHome}>
          <h2>Sobre nosotros</h2>
          <p className={s.textP}>
            Buscamos suplir tus necesidades IT. Encuentra el talento disponible
            que se ajuste a tus proyectos y contrata de directamente a través de
            nuestra plataforma, de manera segura y gratuita.
          </p>
        </div>
        <CardHome />
        <Footer />
      </div>
    </div>
  );
}
