import React, { useLayoutEffect, useRef } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import s from "../Details/Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  detailReset,
  getUserEmail,
  getUserId,
  getUsersBd,
  setUserVisible,
} from "../../Redux/Actions/DevUser";
import diamantess from "../Home/Assets/Diamante/diamante.png";
import SideMenu from "../Landing/SideMenu/SideMenu";
import Loader from "../Loader/Loader";
import "boxicons";
import { useAuth0 } from "@auth0/auth0-react";
import { emailer } from "../../Redux/Actions/Emailer";
import { useState } from "react";
import {
  consultSub,
  editSuscriptionMp,
  setSubscriptionId,
} from "../../Redux/Actions/MercadoPago";
import Iframe from "react-iframe";
import { IoMdCloseCircle } from "react-icons/io";
import Contrato from "./Contrato";
import useUser from "../../Hooks/useUser";
import Contracts from "../Contracts/Contracts";
import useFetchConsultSub from "../../Hooks/useFetchConsultSub";
import { putContrato } from "../../Redux/Actions/Contracts";
import { BsChevronDoubleDown, BsQuestionCircleFill } from "react-icons/bs";
import ScrollTopDetail from "./ScrollTopDetail";
import SvgChica from "./SvgChica";
import Swal from "sweetalert2";

///-----------------------funciones logicas Status contratos-----------------
import { contratosVisibles } from "./LogicFunctions/ContratosVisibles";
import { theDay } from "./LogicFunctions/Today";
import { compararFechas } from "./LogicFunctions/CompararFechas";
import { BubbleSort } from "./LogicFunctions/BubbleSort";
///--------------------------------------------------------------------------

export default function Details() {
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();

  const userByEmail = useSelector((state) => state.devUser.userByEmail);
  const user = useUser();
  const [userProfile, setUserProfile] = useState(false);

  useEffect(() => {
    dispatch(getUserId(id));
    dispatch(getUserEmail(user?.email));
    id === userByEmail?.id ? setUserProfile(true) : setUserProfile(false);
  }, [dispatch, id, user?.email, userByEmail?.id]);

  const userDetail = useSelector((state) => state.devUser.details);

  const consultaSub = useSelector(
    (state) => state.mercadoPago.SubscriptionConsult
  );

  const [mostrarSub, setMostrarSub] = useState(false);

  const linkPago = consultaSub?.init_point;

  const [contratoDetail, SetContratoDetail] = useState(false);

  const scrollTo = (section) => {
    section.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  //--- aca determinamos que solo se vean los contratos en los que estes implicado y los finalizados--
  let contratosS = userDetail?.contratos !== undefined && userDetail.contratos;
  let contratosArenderizar =
    contratosS && user.user_id ? contratosVisibles(contratosS, user) : [];
  //--------------------------------------------------------------------------------------------------

  //--- aca filtramos contrtos-----------------------------------------------------------------
  let ac_epera_de_pago = contratosArenderizar?.filter(
    (cur) => !cur.pagado && cur.aceptado
  );
  let ac_y_pagado = contratosArenderizar?.filter(
    (cur) => cur.aceptado && cur.pagado
  );
  let defaultt = contratosArenderizar;
  let propuestas = contratosArenderizar?.filter(
    (cur) => !cur.aceptado && !cur.pagado
  );
  //-------------------------------------------------------------------------------------------

  //---aca ordenamos contratos deacuerdo a cual es mas antiguo con respecto al resto-----------
  let order_ac_epera_de_pago = BubbleSort(ac_epera_de_pago);
  let order_ac_y_pagado = BubbleSort(ac_y_pagado);
  let order_defaultt = BubbleSort(defaultt);
  let order_propuestas = BubbleSort(propuestas);
  //-------------------------------------------------------------------------------------------

  //este estado tiene los contraros que muestran-------------
  let [ContratosOrder, setContratosOrder] = useState(order_ac_y_pagado);

  if (order_ac_y_pagado.length && !ContratosOrder.length) {
    setContratosOrder(order_ac_y_pagado);
  }
  //---------------------------------------------------------

  //--- estos handlers determinan que se guarda en el estado local que renderiza---------------
  const handler_ac_EsperaPago = () => {
    if (order_ac_epera_de_pago.length) {
      setContratosOrder(
        order_ac_epera_de_pago.length ? order_ac_epera_de_pago : []
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Uups... ",
        text: "no tienes contratos aceptados ",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };
  const handler_ac_Ypagado = () => {
    if (order_ac_y_pagado.length) {
      setContratosOrder(order_ac_y_pagado.length ? order_ac_y_pagado : []);
    } else {
      Swal.fire({
        icon: "error",
        title: "Uups... ",
        text: "no tienes contratos abonados",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };
  const handler_propuestas = () => {
    if (order_propuestas.length) {
      setContratosOrder(order_propuestas);
    } else {
      Swal.fire({
        icon: "error",
        title: "Uups... ",
        text: "no tienes propuestas por ahora",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };
  // const handler_defaultt = () => {
  //   setContratosOrder(order_defaultt);
  // };
  //------------------------------------------------------------------------------------

  const refContracts = useRef(null);

  //-esta funcion modifica en DB la propiedad status al contrato ingresado--------------
  // deacuerdo a la fecha
  const SeteadoraStatusContratos = (fecha_de_hoy, unContrato) => {
    if (compararFechas(fecha_de_hoy, unContrato.date) === "-") {
      // si date es menor a fecha de hoy
      //setear status en "Inactivo"
      dispatch(putContrato(unContrato.id, { status: "Inactivo" }));
    }
    if (
      compararFechas(fecha_de_hoy, unContrato.date) === "+" &&
      compararFechas(unContrato.expiration_date, unContrato.date) === "-"
    ) {
      // si date es mayor a fecha de hoy y menor a fecha de termino
      //setear status en "Activo"
      dispatch(putContrato(unContrato.id, { status: "Activo" }));
    }
    if (compararFechas(fecha_de_hoy, unContrato.expiration_date) === "-") {
      // si fecha de fin es menor a fecha de hoy
      //setear status en "Concluido"
      dispatch(putContrato(unContrato.id, { status: "Concluido" }));
    }
  };
  //------------------------------------------------------------------------------------

  //--esta funcion mapea y modifica en Db la propiedad status en los contratos----------
  // let fecha_de_hoy = theDay();
  // const mapeaYmodificaContratos = (fecha_de_hoy) => {
  //   userDetail.contratos.forEach((cur) =>
  //     SeteadoraStatusContratos(fecha_de_hoy, cur)
  //   );
  // };
  // userDetail?.contratos && mapeaYmodificaContratos(fecha_de_hoy);
  //-------------------------------------------------------------------------------------

  const handleContact = () => {
    if (isAuthenticated) {
      SetContratoDetail(!contratoDetail);
    } else {
      loginWithRedirect();
    }
  };

  const [userPremium, setUserPremium] = useState(false);

  useEffect(() => {
    if (userDetail?.premium) {
      console.log(`usuario premiun: ${userDetail?.premium}`);
      setUserPremium(true);
    } else {
      setUserPremium(false);
    }
  }, [userDetail?.premium, userPremium]);

  const handlePremium = () => {
    setMostrarSub(!mostrarSub);
  };

  const handlePremiumOFF = () => {
    // dispatch(detailSubscription_Reset());
    Swal.fire({
      // title: `Estas a un paso de contratar a Luisina`,
      text: `Desea cancelar su suscripcion a Programax ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4faf00",
      cancelButtonColor: "#9b2b2b",
      confirmButtonText: "Cancelar Suscripcion",
      cancelButtonText: "Volver",
      background: "#bebebebe",
      color: "white",
      backdropFilter: "blur(1px)",
    }).then((result) => {
      if (result.isConfirmed) {
        // dispatch(editSuscriptionMp(consultaSub?.id, { status: "paused" }));
        dispatch(
          setSubscriptionId({
            user_id: userByEmail?.id,
            subscription_id: null,
            status: "cancel",
          })
        );
        // setTimeout(() => {
        //   dispatch(consultSub(consultaSub?.id));
        // }, 1000);

        setTimeout(() => {
          dispatch(getUserEmail(user?.email));
        }, 800);
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Suscripcion cancelada",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  useEffect(() => {
    dispatch(consultSub(consultaSub?.id));
    setTimeout(() => {
      dispatch(
        setSubscriptionId({
          user_id: userByEmail?.id,
          subscription_id: consultaSub?.id,
          status: consultaSub?.status,
        })
      );
    }, 500);
    // setTimeout(() => {
    //   dispatch(getUserEmail(user?.email));
    // }, 800);
  }, [consultaSub?.id, consultaSub?.status, dispatch, userByEmail?.id]);
  const [backIframe, setBackIframe] = useState(false);

  const handleCloseSub = () => {
    setTimeout(() => {
      dispatch(consultSub(consultaSub?.id));
      // dispatch(
      //   setSubscriptionId({
      //     user_id: userByEmail?.id,
      //     subscription_id: consultaSub?.id,
      //     status: consultaSub?.status,
      //   })
      // );
      console.log(`usuario premiun: ${userDetail?.premium} CERRADOOOOO`);

      setMostrarSub(false);
      // window.location.reload();
    }, 500);
    setTimeout(() => {
      let timerInterval;
      Swal.fire({
        title: "Procesando pago",
        // html: "I will close in <b></b> milliseconds.",
        timer: 1000,
        // customClass: "s.swal-back",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          // const b = Swal.getHtmlContainer().querySelector("b");
          // timerInterval = setInterval(() => {
          //   b.textContent = Swal.getTimerLeft();
          // }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          dispatch(getUserEmail(user?.email));
        }
      });
    }, 800);
    setBackIframe(true);
  };

  const handleCleanAndBack = () => {
    dispatch(detailReset());
    navigate("/work");
    // navigate
  };

  const handleVisible = (e) => {
    dispatch(setUserVisible(e.target.checked, id));
    setTimeout(() => {
      dispatch(getUsersBd());
    }, 300);
  };

  return isAuthenticated ? (
    contratoDetail ? (
      <Contrato
        userByEmail={userByEmail.id}
        userDetail={userDetail}
        id={id}
        contratoDetail={contratoDetail}
        SetContratoDetail={SetContratoDetail}
      />
    ) : !userByEmail?.email && !userDetail?.email ? (
      <Loader />
    ) : (
      <div className={s.bodydelosbodys}>
        <div
          className={!mostrarSub ? s.bodyIframeNone : s.bodyIframe}
          onClick={handleCloseSub}
        >
          <button onClick={handleCloseSub} className={s.Icon}>
            <span htmlFor="">
              <IoMdCloseCircle />
            </span>
          </button>

          <div className={s.containerIframe}>
            <div className={s.lds_ring}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            {
              <Iframe
                key={linkPago}
                // style={}
                loading="CARGANDOOOOOOOOOOOOOOO..."
                className={s.iframe}
                url={linkPago}
                id=""
                display="block"
                position="relative"
                allowFullscreen={false}
              />
            }
          </div>
        </div>
        <div className={s.body}>
          <div className={s.sideM}>
            <div className={s.modal}>
              <div className={s.container}>
                <SideMenu />
                <div className={s.backGroundDiv}>
                  <div>
                    <SvgChica />
                  </div>
                  <div>
                    <img
                      className={s.diamantitos}
                      src={diamantess}
                      alt="diamantes"
                    />
                  </div>
                  <div className={s.divBox}>
                    <div className={s.textBox}>
                      <h2>
                        {userDetail?.name
                          ? userDetail?.name + " "
                          : userByEmail?.name + " "}
                        {userDetail?.lastName
                          ? userDetail?.lastName
                          : userByEmail?.lastName}
                      </h2>
                      <br />
                      <div className={s.imageBox}>
                        {userDetail?.profilePicture ||
                        userByEmail?.profilePicture ? (
                          <img
                            className={
                              userProfile && userByEmail?.premium
                                ? s.premium
                                : s.imgRender
                            }
                            src={
                              userDetail?.profilePicture ??
                              userByEmail?.profilePicture
                            }
                            alt={
                              userDetail?.name
                                ? userDetail?.name
                                : userByEmail?.name
                            }
                          />
                        ) : (
                          <svg
                            className={s.imgSvg}
                            viewBox="0 0 448 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                          </svg>
                        )}
                        {userProfile && userByEmail?.postulado && (
                          <div className={s.divVisible}>
                            <label htmlFor="">
                              Hacer visible mi postulacion
                            </label>
                            <label className={s.switch}>
                              <input
                                onChange={(e) => handleVisible(e)}
                                type="checkbox"
                                name="visible"
                                defaultChecked={userByEmail?.visible}
                              />
                              <span className={s.slider_round}></span>
                            </label>
                          </div>
                        )}
                      </div>
                      <br />
                      <a
                        href={`mailto:${
                          userDetail?.email
                            ? userDetail?.email
                            : userByEmail?.email
                        }`}
                        className={s.link}
                      >
                        <span className={s.mail}>
                          <box-icon
                            border="circle"
                            color="white"
                            type="logo"
                            name="gmail"
                          ></box-icon>
                          Email:
                        </span>
                        <span>{`${
                          userDetail?.email
                            ? userDetail?.email
                            : userByEmail?.email
                        }`}</span>
                      </a>
                      <br />
                      <br />
                      <box-icon name="code-alt" color="white"></box-icon>
                      <span> Lenguajes: </span>
                      <span>
                        {userDetail?.lenguajes
                          ? userDetail?.lenguajes?.join(", ")
                          : userByEmail?.lenguajes?.join(", ")}
                      </span>
                      <br />
                      <br />
                      <box-icon color="white" name="donate-heart"></box-icon>
                      <span> Servicios: </span>
                      <span>
                        {userDetail?.servicios
                          ? userDetail?.servicios?.join(", ")
                          : userByEmail?.servicios?.join(", ")}
                      </span>
                      <br />
                      <br />
                      <a
                        href={
                          userDetail.linkedIn
                            ? userDetail.linkedIn
                            : userByEmail.linkedIn
                        }
                        className={s.link}
                      >
                        <box-icon
                          color="white"
                          name="linkedin"
                          type="logo"
                        ></box-icon>
                        <span>LinkedIn</span>
                      </a>
                      <br />
                      <br />
                      <box-icon color="white" name="mouse"></box-icon>
                      <span> Tecnologias: </span>
                      <span>
                        {userDetail?.tecnologias
                          ? userDetail?.tecnologias?.join(", ")
                          : userByEmail?.tecnologias?.join(", ")}
                      </span>
                      <br />
                      <br />
                      <box-icon name="world" color="white"></box-icon>
                      <span> Pais: </span>
                      <span>
                        {userDetail?.paiseId
                          ? userDetail?.paiseId
                          : userByEmail?.paiseId}
                      </span>
                      <br />
                      <br />
                      <a
                        href={
                          userDetail?.webSite
                            ? userByEmail?.webSite
                            : userDetail?.webSite
                        }
                        className={s.link}
                      >
                        <box-icon name="planet" color="white"></box-icon>
                        <span> Sitio Web </span>
                      </a>
                      <br />
                      <br />
                      <box-icon name="diamond" color="white"></box-icon>
                      <span>Años de Experiencia: </span>
                      <span>
                        {userByEmail?.yearsOfExperience
                          ? userDetail?.yearsOfExperience
                          : userDetail?.yearsOfExperience}
                      </span>
                      <br />
                      <br />
                      <box-icon name="dollar-circle" color="white"></box-icon>
                      <span>Presupuesto por día: </span>
                      <span>
                        {userDetail?.dailyBudget
                          ? userDetail?.dailyBudget
                          : userByEmail?.dailyBudget}
                      </span>
                      <br />
                      <br />
                      <box-icon name="star" color="white"></box-icon>
                      <span>Reputacion: </span>
                      <span>
                        {userDetail
                          ? "⭐".repeat(Math.ceil(userDetail?.reputacion))
                          : "⭐".repeat(Math.ceil(userByEmail?.reputacion))}
                      </span>
                    </div>
                    <div className={s.bodyButtons}>
                      <button
                        className={s.buttonBack}
                        onClick={handleCleanAndBack}
                      >
                        POSTULACIONES
                      </button>
                      {userProfile ? (
                        <div className={s.buttonsLogeado}>
                          <button
                            className={s.buttonBack}
                            onClick={() => {
                              navigate("/create");
                            }}
                          >
                            {userByEmail?.postulado
                              ? `Editar postulación`
                              : `Postularme`}
                          </button>

                          {userByEmail?.premium !== true ? (
                            <div className={s.divMegaPremium}>
                              <button
                                // href={linkPago}
                                className={s.buttonSub}
                                onClick={handlePremium}
                              >
                                Suscripción
                              </button>
                              <button
                                onClick={() =>
                                  Swal.fire({
                                    text: `Suscribete al servicio premium y destaca tu perfil !`,
                                    icon: "info",
                                    background: "#bebebe71",
                                    color: "white",
                                    //                                   backdrop: `
                                    //   rgba(0,0,123,0.4)
                                    //   url("/images/nyan-cat.gif")
                                    //   left top
                                    //   no-repeat
                                    // `,
                                  })
                                }
                                className={s.buttonQuestion}
                              >
                                <BsQuestionCircleFill />
                              </button>
                            </div>
                          ) : (
                            <button
                              // href={linkPago}
                              className={s.buttonSub}
                              onClick={handlePremiumOFF}
                            >
                              Cancelar Suscripcion
                            </button>
                          )}
                        </div>
                      ) : (
                        <button className={s.buttonL} onClick={handleContact}>
                          Contactame
                        </button>
                      )}
                      <button
                        className={s.buttonBack}
                        onClick={() => {
                          dispatch(detailReset());
                          navigate("/");
                        }}
                      >
                        HOME
                      </button>
                    </div>
                  </div>
                </div>

                <div className={s.divScrollContracts}>
                  {ContratosOrder.length ? (
                    <span className={s.spanButton}>
                      <BsChevronDoubleDown
                        className={s.scrollContracts}
                        onClick={() => scrollTo(refContracts)}
                      />
                    </span>
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* botones o pestañas para ordenar contratos */}
        {ContratosOrder.length ? (
          <div>
            {ContratosOrder.length ? (
              <div ref={refContracts} className={s.buttonContratitos}>
                {/* <button className={s.button1} onClick={() => handler_defaultt()}>
            Todas las propuestas
          </button> */}
                <button
                  className={s.button1}
                  onClick={() => handler_propuestas()}
                >
                  Propuestas
                </button>

                <button
                  className={s.button2}
                  onClick={() => handler_ac_EsperaPago()}
                >
                  Contratos aceptados
                </button>

                <button
                  className={s.button3}
                  onClick={() => handler_ac_Ypagado()}
                >
                  Contratos abonados
                </button>
              </div>
            ) : (
              <span></span>
            )}
            {/* ----------------------------------------- */}

            <div className={s.bodyDeContratos}>
              {order_propuestas &&
                ContratosOrder.map((cur) => {
                  return (
                    <div className={s.cardContrato}>
                      <Contracts
                        userByEmail={userByEmail}
                        idEmployer={cur.employer}
                        description={cur.description}
                        date={cur.date}
                        expiration_date={cur.expiration_date}
                        status={cur.status}
                        price={cur.price}
                        aceptado={cur.aceptado}
                        idContrato={cur.id}
                        pagado={cur.pagado}
                      />
                    </div>
                  );
                })}
              <div className={s.buttonTop}>
                <ScrollTopDetail className={s.buttonTop} />
              </div>
            </div>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    )
  ) : (
    loginWithRedirect()
  );
}
