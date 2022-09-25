import React, { useLayoutEffect, useRef, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import s from "./DevUsersCreate.module.css";
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "../Landing/SideMenu/SideMenu";
import { validaciones } from "./Validaciones";
import { validacionesEdit } from "./ValidacionesEdit";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import makeAnimated from "react-select/animated";
import { customStyles } from "./StyleSelect";
import ModalCreate from "./ModalCreate/ModalCreate";
import { useAuth0 } from "@auth0/auth0-react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AiOutlineUserAdd, AiOutlineCloseCircle } from "react-icons/ai";
import Loader from "../Loader/Loader";
import useFetchAllData from "../../Hooks/useFetchAllData";

//actions
import {
  getUserEmail,
  getUsersBd,
  putDevUser,
} from "../../Redux/Actions/DevUser";

//imagenes
import storage from "./Img-file/firebaseConfig.js";
import Selectores from "../Selectores/Selectores";

export default function DevUsersCreate() {
  const animatedComponents = makeAnimated();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const refCountries = useRef();
  const refServices = useRef();
  const refLanguajes = useRef();
  const refTecnologies = useRef();
  const refName = useRef();
  const reflastName = useRef();

  useEffect(() => {
    dispatch(getUserEmail(user?.email));
  }, [dispatch]);

  const userByEmail = useSelector((state) => state.devUser.userByEmail);

  const [errors, setErrors] = useState({});
  const [cache, setCache] = useLocalStorage({});
  const [input, setInput] = useState({
    name: cache?.name ? cache?.name : `${userByEmail?.name}`,
    lastName: cache?.lastName ? cache?.lastName : `${userByEmail?.lastName}`,
    profilePicture: cache?.profilePicture
      ? cache?.profilePicture
      : `${userByEmail?.profilePicture}`,
    email: cache?.email ? cache?.email : `${userByEmail?.email}`,
    linkedIn: cache?.linkedIn ? cache?.linkedIn : "",
    gitHub: cache?.gitHub ? cache?.gitHub : "",
    webSite: cache?.webSite ? cache?.webSite : "",
    dailyBudget: cache?.dailyBudget ? cache?.dailyBudget : "0",
    yearsOfExperience: cache?.yearsOfExperience
      ? cache?.yearsOfExperience
      : "0",
    englishLevel: cache?.englishLevel ? cache?.englishLevel : "Básico",
    paiseId: cache?.paiseId ? cache?.paiseId : [],
    tecnologias:
      // cache?.tecnologias ? cache?.tecnologias :
      [],
    lenguajes:
      // cache?.lenguajes ? cache?.lenguajes :
      [],
    servicios:
      // cache?.servicios ? cache?.servicios :
      [],
    postulado: true,
  });

  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if (userByEmail.postulado) {
      setErrors(
        validacionesEdit({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    } else {
      setErrors(
        validaciones({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    }
    setCache({
      ...cache,
      [e.target.name]: e.target.value,
    });
  };
  const [loader, setLoader] = useState(false);
  const getFile = (file) => {
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (percent === 0 && percent === 100) {
          return setLoader(false);
        } else {
          setLoader(true);
        }
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setInput({
            ...input,
            profilePicture: url,
          });

          if (userByEmail?.postulado) {
            setErrors(
              validacionesEdit({
                ...cache,
                profilePicture: url,
              })
            );
          } else {
            setErrors(
              validaciones({
                ...cache,
                profilePicture: url,
              })
            );
          }

          setCache({
            ...cache,
            profilePicture: url,
          });
        });
      }
    );
  };

  const handleChangeEnglish = (e) => {
    const ingles = () => {
      if (e.target.value === "1") {
        return "Básico";
      }
      if (e.target.value === "2") {
        return "Intermedio";
      }
      if (e.target.value === "3") {
        return "Avanzado";
      }
      if (e.target.value === "4") {
        return "Profesional";
      } else {
        return "Nativo / Bilingüe";
      }
    };

    setInput({
      ...input,
      [e.target.name]: ingles(),
    });
    if (userByEmail?.postulado) {
      setErrors(
        validacionesEdit({
          ...input,
          [e.target.name]: ingles(),
        })
      );
    } else {
      setErrors(
        validaciones({
          ...input,
          [e.target.name]: ingles(),
        })
      );
    }
    setCache({
      ...cache,
      [e.target.name]: ingles(),
    });
  };

  const [modal, setModal] = useState(false);
  const [verErrores, setVerErrores] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();
    setVerErrores(true);
    if (Object.keys(errors).length === 0) {
      refCountries.current.clearValue();
      refServices.current.clearValue();
      refLanguajes.current.clearValue();
      refTecnologies.current.clearValue();
      setModal(true);
      setCache({
        name: ("name", `${userByEmail?.name}`),
        lastName: ("lastName", `${userByEmail?.lastName}`),
        profilePicture: ("profilePicture", `${cache?.profilePicture}`),
        email: ("email", `${userByEmail?.email}`),
        linkedIn: ("linkedIn", ""),
        gitHub: ("gitHub", ""),
        webSite: ("webSite", ""),
        yearsOfExperience: ("yearsOfExperience", "0"),
        dailyBudget: ("dailyBudget", "0"),
        englishLevel: ("englishLevel", "Básico"),
        paiseId: ("paiseId", []),
        tecnologias: ("tecnologias", []),
        lenguajes: ("lenguajes", []),
        servicios: ("servicios", []),
        postulado: ("postulado", true),
      });
      setTimeout(() => {
        navigate("/work");
      }, 1500);
      dispatch(
        putDevUser({
          ...input,
          postulado: true,
        })
      );
      dispatch(getUsersBd());
    } else {
      alert(`hay errores`, errors);
    }
  };

  const handleDefaultCountrie = [
    {
      label: cache?.paiseId,
    },
  ];

  const handleReset = () => {
    refCountries.current.setValue({
      value: "default",
      label: "Selecciona un país...",
    });
    refName.current.value = "";
    reflastName.current.value = "";
    refServices.current.clearValue();
    refLanguajes.current.clearValue();
    refTecnologies.current.clearValue();
    setCache({
      name: ("name", ``),
      lastName: ("lastName", ``),
      profilePicture: ("profilePicture", ``),
      email: ("email", `${userByEmail?.email}`),
      linkedIn: ("linkedIn", ""),
      gitHub: ("gitHub", ""),
      webSite: ("webSite", ""),
      yearsOfExperience: ("yearsOfExperience", "0"),
      dailyBudget: ("dailyBudget", "0"),
      englishLevel: ("englishLevel", "Básico"),
      paiseId: ("paiseId", []),
      tecnologias: ("tecnologias", []),
      lenguajes: ("lenguajes", []),
      servicios: ("servicios", []),
      postulado: true,
    });
    setInput({
      name: ``,
      lastName: ``,
      profilePicture: ``,
      email: `${userByEmail?.email}`,
      linkedIn: "",
      gitHub: "",
      webSite: "",
      yearsOfExperience: "0",
      dailyBudget: "0",
      englishLevel: "Básico",
      paiseId: [],
      tecnologias: [],
      lenguajes: [],
      servicios: [],
      postulado: true,
    });
    setLoader(false);
  };

  //OPCIONES DE LOS SELECTS:
  const {
    optionsTecnologias,
    optionsLanguajes,
    optionsServices,
    // optionsCountries,
  } = Selectores();

  const countries = useSelector((state) => state.countries.allCountries);

  const optionsCountries = countries.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  if (
    isLoading &&
    input.name === undefined &&
    userByEmail?.email === undefined &&
    input.email === undefined &&
    input.profile.Picture === undefined
  ) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return !isAuthenticated ? (
    loginWithRedirect()
  ) : (
    <div className={s.divGeneral}>
      {modal && <ModalCreate />}
      <SideMenu />
      <div className={s.divForm}>
        <form className={s.inputForm} action="">
          <div className={s.inputContainer}>
            <p>Nombre: </p>
            <input
              ref={refName}
              type="text"
              placeholder="Tu Nombre..."
              autoComplete="on"
              onChange={(e) => handleChangeInput(e)}
              // value={cache?.name}
              defaultValue={input?.name}
              name="name"
              className={s.inputName}
            />
            <div className={s.divErrors}>
              {verErrores && errors.name && (
                <label className={s.errors}>⚠ {errors.name}</label>
              )}
            </div>
          </div>
          <div className={s.inputContainer}>
            <p>Apellido: </p>
            <input
              ref={reflastName}
              type="text"
              placeholder="Tu Apellido..."
              autoComplete="on"
              onChange={(e) => handleChangeInput(e)}
              defaultValue={input?.lastName}
              // value={cache?.lastName}
              name="lastName"
              className={s.inputLastname}
            />
            <div className={s.divErrors}>
              {verErrores && errors.lastName && (
                <label className={s.errors}>⚠ {errors.lastName}</label>
              )}
            </div>
          </div>
          <div className={s.inputContainer_1fila}>
            <p>Imagen: </p>
            {!cache?.profilePicture && loader ? (
              <div className={s.barra}>
                <span></span>
              </div>
            ) : !input?.profilePicture ? (
              <label className={s.divInput}>
                <input
                  className={s.addImg}
                  type="file"
                  onChange={(e) => getFile(e.target.files[0])}
                  name="profilePicture"
                  // defaultValue={input?.profilePicture}
                />
                <AiOutlineUserAdd />
              </label>
            ) : (
              <div className={s.divImg}>
                <div className={s.lds_ring}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <img
                  src={
                    input?.profilePicture
                      ? input?.profilePicture
                      : cache?.profilePicture
                  }
                  alt={cache?.name}
                  className={s.imgForm}
                />
                {
                  <button
                    className={s.buttonImg}
                    onClick={() => {
                      setCache({
                        profilePicture: ("profilePicture", ""),
                      });
                      setInput({
                        profilePicture: "",
                      });
                      setLoader(false);
                    }}
                  >
                    <AiOutlineCloseCircle />
                  </button>
                }
              </div>
            )}
            <div className={s.divErrors}>
              {verErrores && errors.profilePicture && (
                <label className={s.errors}>⚠ {errors.profilePicture}</label>
              )}
            </div>
          </div>
          <div className={s.inputContainer}>
            <p>Email: </p>
            <input
              readonly="true"
              type="email"
              placeholder="Tu Email..."
              autoComplete="on"
              onChange={(e) => handleChangeInput(e)}
              value={`${user?.email}`}
              name="email"
              className={s.inputEmail}
            />
            <div className={s.divErrors}>
              {verErrores && errors.email && (
                <label className={s.errors}>⚠ {errors.email}</label>
              )}
            </div>
          </div>
          <div className={s.inputContainer}>
            <p>Linkedin: </p>
            <input
              type="url"
              placeholder="Tu LinkedIn..."
              autoComplete="on"
              onChange={(e) => handleChangeInput(e)}
              value={cache?.linkedIn}
              name="linkedIn"
              className={s.inputLinkedin}
            />
            <div className={s.divErrors}>
              {verErrores && errors.linkedIn && (
                <label className={s.errors}>⚠ {errors.linkedIn}</label>
              )}
            </div>
          </div>
          <div className={s.inputContainer}>
            <p>GitHub: </p>
            <input
              type="url"
              placeholder="Tu GitHub..."
              autoComplete="on"
              onChange={(e) => handleChangeInput(e)}
              value={cache?.gitHub}
              name="gitHub"
              className={s.inputGithub}
            />
            <div className={s.divErrors}>
              {verErrores && errors.gitHub && (
                <label className={s.errors}>⚠ {errors.gitHub}</label>
              )}
            </div>
          </div>
          <div className={s.inputContainer}>
            <p>Website: </p>
            <input
              type="url"
              placeholder="Tu webSite..."
              autoComplete="on"
              onChange={(e) => handleChangeInput(e)}
              value={cache?.webSite}
              name="webSite"
              className={s.inputWebsite}
            />
            <div className={s.divErrors}>
              {verErrores && errors.webSite && (
                <label className={s.errors}>⚠ {errors.webSite}</label>
              )}
            </div>
          </div>
          <div className={s.inputContainer}>
            <p>Años de experiencia: </p>
            <input
              type="number"
              min="1"
              max="99"
              autoComplete="off"
              onChange={(e) => handleChangeInput(e)}
              value={cache?.yearsOfExperience}
              name="yearsOfExperience"
              className={s.inputExperience}
              defaultValue="1"
              // step=".01"
            />
            <div className={s.divErrors}>
              {verErrores && errors.yearsOfExperience && (
                <label className={s.errors}>⚠ {errors.yearsOfExperience}</label>
              )}
            </div>
          </div>
          <div className={s.inputContainer}>
            <p>Precio por dia: </p>
            <input
              type="number"
              min="1"
              max="999"
              autoComplete="off"
              onChange={(e) => handleChangeInput(e)}
              value={cache?.dailyBudget}
              name="dailyBudget"
              // step=".01"
              className={s.inputPrice}
            />
            <div className={s.divErrors}>
              {verErrores && errors.dailyBudget && (
                <label className={s.errors}>⚠ {errors.dailyBudget}</label>
              )}
            </div>
          </div>
        </form>
        <div className={s.divEnglish}>
          <p htmlFor="">Nivel de ingles: </p>
          <div className={s.divEnglishLevel}>
            <input
              type="range"
              min="1"
              max="5"
              onChange={(e) => handleChangeEnglish(e)}
              // value={`${cache?.englishLevel}`}
              name="englishLevel"
              defaultValue="1"
              className={s.inputEnglish}
            />
            <label
              className={
                input.englishLevel === "Básico"
                  ? s.ingles1
                  : input.englishLevel === "Intermedio"
                  ? s.ingles2
                  : input.englishLevel === "Avanzado"
                  ? s.ingles3
                  : input.englishLevel === "Profesional"
                  ? s.ingles4
                  : s.ingles5
              }
            >
              {input.englishLevel}
            </label>
            <div className={s.divErrors}>
              {verErrores && errors.englishLevel && (
                <label className={s.errors}>⚠ {errors.englishLevel}</label>
              )}
            </div>
          </div>
        </div>
        <div className={s.container_selector}>
          <div className={s.divSelectContainer}>
            <p htmlFor="pais">Pais: </p>
            <Select
              ref={refCountries}
              components={animatedComponents}
              set-value={cache?.paiseId}
              className={s.select}
              isDisabled={false}
              options={optionsCountries}
              isClearable={false}
              isSearchable={true}
              isMulti={false}
              styles={customStyles}
              placeholder="Selecciona un pais"
              defaultValue={handleDefaultCountrie}
              onChange={(e) => {
                setInput({
                  ...input,
                  paiseId: e?.value,
                });

                if (userByEmail?.postulado) {
                  setErrors(
                    validacionesEdit({
                      ...input,
                      paiseId: e?.value,
                    })
                  );
                } else {
                  setErrors(
                    validaciones({
                      ...input,
                      paiseId: e?.value,
                    })
                  );
                }

                setCache({
                  ...cache,
                  paiseId: e?.value,
                });
              }}
            />
            <div className={s.divErrors}>
              {verErrores && errors.countries && (
                <label className={s.errors}>⚠ {errors.countries}</label>
              )}
            </div>
          </div>
          <div className={s.divSelectContainer}>
            <p htmlFor="tecnologias">Tecnologias: </p>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              ref={refTecnologies}
              set-value={cache?.tecnologias}
              className={s.select}
              isDisabled={false}
              options={optionsTecnologias}
              isClearable={true}
              isSearchable={true}
              isMulti={true}
              styles={customStyles}
              placeholder="Selecciona una tecnología"
              onChange={(e) => {
                setInput({
                  ...input,
                  tecnologias: e.map((ele) => ele.value),
                });
                if (userByEmail?.postulado) {
                  setErrors(
                    validacionesEdit({
                      ...input,
                      tecnologias: e.map((ele) => ele.value),
                    })
                  );
                } else {
                  setErrors(
                    validaciones({
                      ...input,
                      tecnologias: e.map((ele) => ele.value),
                    })
                  );
                }

                setCache({
                  ...cache,
                  tecnologias: e.map((ele) => ele.value),
                });
              }}
            />
            <div className={s.divErrors}>
              {verErrores && errors.tecnologies && (
                <label className={s.errors}>⚠ {errors.tecnologies}</label>
              )}
            </div>
          </div>
          <div className={s.divSelectContainer}>
            <p htmlFor="lenguajes">Lenguajes: </p>
            <Select
              ref={refLanguajes}
              closeMenuOnSelect={false}
              components={animatedComponents}
              set-value={cache?.lenguajes}
              className={s.select}
              isDisabled={false}
              options={optionsLanguajes}
              isClearable={true}
              isSearchable={true}
              isMulti={true}
              styles={customStyles}
              placeholder="Selecciona un lenguaje"
              onChange={(e) => {
                setInput({
                  ...input,
                  lenguajes: e.map((ele) => ele.value),
                });
                if (userByEmail?.postulado) {
                  setErrors(
                    validacionesEdit({
                      ...input,
                      lenguajes: e.map((ele) => ele.value),
                    })
                  );
                } else {
                  setErrors(
                    validaciones({
                      ...input,
                      lenguajes: e.map((ele) => ele.value),
                    })
                  );
                }

                setCache({
                  ...cache,
                  lenguajes: e.map((ele) => ele.value),
                });
              }}
            />
            <div className={s.divErrors}>
              {verErrores && errors.languajes && (
                <label className={s.errors}>⚠ {errors.languajes}</label>
              )}
            </div>
          </div>
          <div className={s.divSelectContainer}>
            <p htmlFor="servicios">Servicios: </p>
            <Select
              // defaultValue={handleDefaultService}
              ref={refServices}
              closeMenuOnSelect={false}
              components={animatedComponents}
              set-value={cache?.servicios}
              className={s.select}
              isDisabled={false}
              options={optionsServices}
              isClearable={true}
              isSearchable={true}
              isMulti={true}
              styles={customStyles}
              placeholder="Selecciona un servicio"
              onChange={(e) => {
                setInput({
                  ...input,
                  servicios: e.map((ele) => ele.value),
                });
                if (userByEmail?.postulado) {
                  setErrors(
                    validacionesEdit({
                      ...input,
                      servicios: e.map((ele) => ele.value),
                    })
                  );
                } else {
                  setErrors(
                    validaciones({
                      ...input,
                      servicios: e.map((ele) => ele.value),
                    })
                  );
                }

                setCache({
                  ...input,
                  servicios: e.map((ele) => ele.value),
                });
              }}
            />
            <div className={s.divErrors}>
              {verErrores && errors.services && (
                <label className={s.errors}>⚠ {errors.services}</label>
              )}
            </div>
          </div>
        </div>
        <div className={s.buttons}>
          <button className={s.buttonReset} onClick={(e) => handleReset(e)}>
            <span className={s.button_top}>RESETEAR FORMULARIO</span>
          </button>
          {!userByEmail?.postulado ? (
            <button
              className={s.buttonCreate}
              // disabled={disabledButton}
              onClick={(e) => handleCreate(e)}
            >
              <span className={s.button_top}> CREAR POSTULACION</span>
            </button>
          ) : (
            <button
              className={s.buttonCreate}
              // disabled={disabledButton}
              onClick={(e) => handleCreate(e)}
            >
              <span className={s.button_top}> EDITAR POSTULACION</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
