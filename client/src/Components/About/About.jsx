import React from "react";
import s from "./About.module.css";

import SideMenu from "../Landing/SideMenu/SideMenu";

// --- ASSETS ---
import Rama from "../Home/Assets/Team/Rama.jpeg";
import Santi from "../Home/Assets/Team/Santi.jpeg";
import Fran from "../Home/Assets/Team/Fran.jpeg";
import Gus from "../Home/Assets/Team/Gus.jpeg";
import Lu from "../Home/Assets/Team/Lu.jpeg";
import Mary from "../Home/Assets/Team/Mary.jpeg";
import Rober from "../Home/Assets/Team/Rober.png";

// -----------------------------------------------

export default function About() {
  return (
    <>
      <SideMenu />

      <div className={s.allContainer}>
        {/*  */}
        <h2 className={s.title}>¿Qué es Programax?</h2>

        <div className={s.paragraphContainer}>
          <div className={s.paragraph}>
            Imagina que necesitas consumir servicios IT y quieres contratar a un
            programador, pero no tienes el tiempo, energía, conocimiento o
            experiencia necesarios para hacerlo...
          </div>

          <div className={s.paragraph}>
            Imagina que eres desarrollador y buscas aplicar tus conocimientos en
            tecnología, pero los métodos convencionales de contratación no
            parecen alinearse con tus ritmos o necesidades...
          </div>
        </div>

        <h4 className={s.subTitle}>¡El sitio para vos!</h4>

        <div className={s.paragraphContainer}>
          <div className={s.paragraph}>
            En Programax, podrás postularte y encontrar a los desarrolladores
            que cubran tus necesidades... ¡Al alcance de un click!
          </div>

          <div className={s.paragraph}>
            Contacta al desarrollador ideal, hazle una oferta, y paga por su
            trabajo de manera segura y sin costo adicional... ¡Y todo en un solo
            sitio!
          </div>
        </div>

        <h4 className={s.subTitle}>Nuestro objetivo</h4>

        <div className={s.paragraphContainer}>
          <div className={s.paragraph}>
            Nuestro equipo trabajó muy duro para crear el sitio perfecto, por
            desarrolladores, para desarrolladores.
          </div>

          <div className={s.paragraph}>
            Comprendemos que, en el mundo de la tecnología, las necesidades de
            los usuarios y los prestadores de servicios IT, no siempre se
            encuentran fácilmente entre sí. Por ello, decidimos encontrarlos en
            nuestro sitio, y facilitar la adquisición de servicios de forma
            simple, y eficaz.
          </div>
        </div>

        <h4 className={`${s.subTitle}`}>El Equipo</h4>

        <div className={s.teamContainer}>
          {/*  */}

          {/* RAMA */}
          <div className={s.memberContainer}>
            <div className={s.photoContainer}>
              <a
                href="https://www.linkedin.com/in/ramiro-ferradas/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Rama} alt="Ramiro" className={s.photo}></img>
              </a>
            </div>
            <span className={s.name}>Ramiro</span>
          </div>

          {/* SANTI */}
          <div className={s.memberContainer}>
            <div className={s.photoContainer}>
              <a
                href="https://www.linkedin.com/in/sostro/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Santi} alt="Santiago" className={s.photo}></img>
              </a>
            </div>
            <span className={s.name}>Santiago</span>
          </div>

          {/* FRAN */}
          <div className={s.memberContainer}>
            <div className={s.photoContainer}>
              <a
                href="https://www.linkedin.com/in/fran-navarro-/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Fran} alt="Francisco" className={s.photo}></img>
              </a>
            </div>
            <span className={s.name}>Francisco</span>
          </div>

          {/* GUS */}
          <div className={s.memberContainer}>
            <div className={s.photoContainer}>
              <a
                href="https://www.linkedin.com/in/gustavo-espergu%C3%ADn-1830a8215/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Gus} alt="Gustavo" className={s.photo}></img>
              </a>
            </div>
            <span className={s.name}>Gustavo</span>
          </div>

          {/* LU */}
          <div className={s.memberContainer}>
            <div className={s.photoContainer}>
              <a
                href="https://www.linkedin.com/in/luisina-gonzalez/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Lu} alt="Luisina" className={s.photo}></img>
              </a>
            </div>
            <span className={s.name}>Luisina</span>
          </div>

          {/* MARY */}
          <div className={s.memberContainer}>
            <div className={s.photoContainer}>
              <a
                href="https://www.linkedin.com/in/mar%C3%ADa-kuttel-133915223/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Mary} alt="Maria" className={s.photo}></img>
              </a>
            </div>
            <span className={s.name}>Maria</span>
          </div>

          {/* ROBER */}
          <div className={s.memberContainer}>
            <div className={s.photoContainer}>
              <a
                href="https://www.linkedin.com/in/roberto-baldovino-1516901b1/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Rober} alt="Roberto" className={s.photo}></img>
              </a>
            </div>
            <span className={s.name}>Roberto</span>
          </div>
          {/*  */}
        </div>
        {/*  */}
      </div>
    </>
  );
}
