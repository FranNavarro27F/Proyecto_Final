import React, { useRef } from "react";
import s from "./Home.module.css";
import Girl1 from "./Assets/girl/girl1";

import Landing from "../Landing/Landing";
import diamante from "./Assets/Diamante/diamante.png";
import Circulos from "./Assets/Circulos/Circulos";
import Circulo from "./Assets/Circulo/Circulo.jsx";
import Footer from "../Footer/Footer";
import CardHome from "../Card Home/CardHome";
import NavMenuHome from "./NavMenuHome/NavMenuHome";
import ScrollTop from "./ScrollTop";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../Loader/Loader";
import ButtonScrollSection from "./ButtonScrollSection";
import { BsChevronDoubleDown } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const scrollToSeccion = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollTo = (section) => {
    section.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const landing = useRef(null);
  const home = useRef(null);
  const work = useRef(null);

  const dispatch = useDispatch();

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className={s.buttonTop}>
        <ScrollTop className={s.buttonTop} />
      </div>
      <NavMenuHome
        logout={logout}
        user={user}
        isAuthenticated={isAuthenticated}
        scrollToSeccion={scrollToSeccion}
        landing={landing}
        home={home}
        // about={about}
        work={work}
      />
      <Landing landing={landing} goToSectionRef={home} />
      <div>
        <div className={s.body} ref={home}>
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
          <div className={s.divButtonDown}>
            <button onClick={() => scrollTo(work)} className={s.buttonDown}>
              <BsChevronDoubleDown />
            </button>
          </div>
        </div>
        <CardHome work={work} />
        <Footer
          scrollToSeccion={scrollToSeccion}
          landing={landing}
          home={home}
          // about={about}
          work={work}
        />
      </div>
    </div>
  );
}
