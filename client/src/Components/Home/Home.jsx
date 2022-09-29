import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
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
import { BsChevronDoubleDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getUserEmail } from "../../Redux/Actions/DevUser";

export default function Home() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  // const userLocal = useMemo(() => {
  //   const userLocal = {
  //     family_name: `${user?.family_name}`,
  //     given_name: `${user?.given_name}`,
  //     email: `${user?.email}`,
  //     picture: `${user?.picture}`,
  //   };

  //   return userLocal;
  // }, [user?.email, user?.family_name, user?.given_name, user?.picture]);

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

  const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(false);
  // };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={s.body}>
      <div className={s.buttonTop}>
        <ScrollTop className={s.buttonTop} />
      </div>

      <NavMenuHome
        setOpen={setOpen}
        open={open}
        logout={logout}
        user={user}
        isAuthenticated={isAuthenticated}
        scrollToSeccion={scrollToSeccion}
        landing={landing}
        home={home}
        work={work}
      />
      <Landing
        setOpen={setOpen}
        open={open}
        landing={landing}
        goToSectionRef={home}
      />
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
          work={work}
        />
      </div>
    </div>
  );
}
