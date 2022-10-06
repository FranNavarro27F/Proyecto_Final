import React, { useRef, useState } from "react";
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
// import useFetchAllData from "../../Hooks/useFetchAllData";
import { detailReset } from "../../Redux/Actions/DevUser";

//actions
import {
  getUserEmail,
  // getUserEmail,
  getUsersBd,
  putDevUser,
} from "../../Redux/Actions/DevUser";

//imágenes
import storage from "./Img-file/firebaseConfig.js";
import Selectores from "../Selectores/Selectores";
import useUser from "../../Hooks/useUser";
import { useFetchUsers } from "../../Hooks/useFetchUsers";
// import { getUserById } from "../../../../api/src/controllers/Usuarios";

export default function DevUsersCreate() {
  const animatedComponents = makeAnimated();
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const refCountries = useRef();
  const refServices = useRef();
  const refLanguajes = useRef();
  const refTecnologies = useRef();
  const refName = useRef();
  const reflastName = useRef();
  const user = useUser();

  const { userByEmail } = useFetchUsers(user?.email);
  // const userByEmail = useSelector((state) => state.devUser.userByEmail);
  useEffect(() => {
    dispatch(getUserEmail(user?.email));
  }, [dispatch, user?.email]);

  const [errors, setErrors] = useState({});

  const [cache, setCache] = useLocalStorage({});
  const [input, setInput] = useState({
    // name: `${userByEmail?.name}` || `${cache?.name}`,
    name: userByEmail?.name ? `${userByEmail?.name}` : `${cache?.name}`,
    // name: user?.name ? `${user?.name}` : cache?.name ? `${cache?.name}` : "",
    // lastName: `${userByEmail?.lastName}` || `${cache?.lastName}`,
    lastName: userByEmail?.lastName
      ? `${userByEmail?.lastName}`
      : `${cache?.lastName}`,
    profilePicture: userByEmail?.profilePicture
      ? `${userByEmail?.profilePicture}`
      : cache?.profilePicture
      ? `${cache?.profilePicture}`
      : null,
    email: `${user?.email}`,
    linkedIn: userByEmail?.linkedIn
      ? `${userByEmail?.linkedIn}`
      : cache?.linkedIn
      ? `${cache?.linkedIn}`
      : null,
    gitHub: userByEmail?.gitHub
      ? `${userByEmail?.gitHub}`
      : cache?.gitHub
      ? `${cache?.gitHub}`
      : null,
    webSite: userByEmail?.webSite
      ? `${userByEmail?.webSite}`
      : cache?.webSite
      ? `${cache?.webSite}`
      : null,
    dailyBudget: userByEmail?.dailyBudget
      ? `${userByEmail?.dailyBudget}`
      : cache?.dailyBudget
      ? `${cache?.dailyBudget}`
      : null,
    yearsOfExperience: userByEmail?.yearsOfExperience
      ? `${userByEmail?.yearsOfExperience}`
      : cache?.yearsOfExperience
      ? `${cache?.yearsOfExperience}`
      : null,
    englishLevel: userByEmail?.englishLevel
      ? `${userByEmail?.englishLevel}`
      : cache?.englishLevel
      ? `${cache?.englishLevel}`
      : "Básico",
    paiseId:
      // userByEmail?.paiseId
      // ? `${userByEmail?.paiseId}`
      // : cache?.paiseId
      // ? `${cache?.paiseId}`
      //   :
      null,
    tecnologias:
      // userByEmail?.tecnologias
      // ? `${userByEmail?.tecnologias}`
      // : cache?.tecnologias
      // ? `${cache?.tecnologias}`
      //   :
      null,
    lenguajes:
      // userByEmail?.lenguajes
      // ? `${userByEmail?.lenguajes}`
      // : cache?.lenguajes
      // ? `${cache?.lenguajes}`
      //   :
      null,
    servicios:
      // userByEmail?.servicios
      // ? `${userByEmail?.servicios}`
      // : cache?.servicios
      // ? `${cache?.servicios}`
      //     :
      null,
    postulado: true,
  });

  const [errorsCache, setErrorsCache] = useState(localStorage.getItem(errors));

  useEffect(() => {
    setErrorsCache(errors);
  }, [errors]);

  //   const regex = /[a-z]*\D\S/gi;
  //   const regex = /^[a-z\s]*$/gi;

  const handleName = (e) => {
    // if (regex.test(e.target.value)) {
    setInput({
      ...input,
      //   [e.target.name]: e.target.value || userByEmail?.name,
      [e.target.name]: e.target.value,
    });
    setCache({
      ...input,
      //   [e.target.name]: e.target.value || userByEmail?.name,
      [e.target.name]: e.target.value,
    });
    // }
    // else {
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
    // }
  };

  const handleLastName = (e) => {
    // if (regex.test(e.target.value)) {
    setInput({
      ...input,
      //   [e.target.name]: e.target.value || userByEmail?.lastName,
      [e.target.name]: e.target.value,
    });
    setCache({
      ...input,
      //   [e.target.name]: e.target.value || userByEmail?.lastName,
      [e.target.name]: e.target.value,
    });
    // }
    // else {
    // if (userByEmail.postulado) {
    //   setErrors(
    //     validacionesEdit({
    //       ...input,
    //       [e.target.name]: e.target.value,
    //     })
    //   );
    // } else {
    //   setErrors(
    //     validaciones({
    //       ...input,
    //       [e.target.name]: e.target.value,
    //     })
    //   );
    // }
    // }
  };

  const handleChangeInput = (e) => {
    // if (/[a-z]+/gi.test(e.target.value)) {
    setInput({
      ...input,
      [e.target.name]: e.target.value.trim(),
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
      [e.target.name]: e.target.value.trim(),
    });
    // } else {
    //   setVerErrores(true);
    // }
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

  // const handleName = (e) => {
  //   if (/[a-z]+/gi.test(e.target.value)) {
  //     setError({
  //       ...error,
  //       error: false,
  //       noName: false,
  //     });
  //     setFields({ ...fields, name: e.target.value });
  //   } //
  //   else setError({ ...error, error: true });
  // };

  const [modal, setModal] = useState(false);
  const [verErrores, setVerErrores] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();
    setVerErrores(true);
    if (Object.keys(errors).length === 0) {
      setTimeout(() => {
        dispatch(getUsersBd());
        dispatch(detailReset());
        navigate(`/work/details/${user?.user_id}`);
      }, 2000);
      dispatch(
        putDevUser(
          {
            ...input,
            postulado: true,
          },
          user?.email
        )
      );
      setCache({
        name: ("name", `${userByEmail?.name}`),
        lastName: ("lastName", `${userByEmail?.lastName}`),
        profilePicture: ("profilePicture", `${userByEmail?.profilePicture}`),
        email: ("email", `${userByEmail?.email}`),
        linkedIn:
          ("linkedIn",
          `${userByEmail?.linkedIn ? userByEmail?.linkedIn : null}`),
        gitHub:
          ("gitHub", `${userByEmail?.gitHub ? userByEmail?.gitHub : null}`),
        webSite:
          ("webSite", `${userByEmail?.webSite ? userByEmail?.webSite : null}`),
        yearsOfExperience:
          ("yearsOfExperience",
          `${
            userByEmail?.yearsOfExperience
              ? userByEmail?.yearsOfExperience
              : null
          }`),
        dailyBudget:
          ("dailyBudget",
          `${userByEmail?.dailyBudget ? userByEmail?.dailyBudget : null}`),
        englishLevel:
          ("englishLevel",
          `${
            userByEmail?.englishLevel ? userByEmail?.englishLevel : "Básico"
          }`),
        paiseId: ("paiseId", null),
        tecnologias: ("tecnologias", null),
        lenguajes: ("lenguajes", null),
        servicios: ("servicios", null),
        postulado: true,
      });
      setModal(true);
      dispatch(getUsersBd());
      dispatch(getUserEmail(userByEmail?.email));
    } else {
      console.log(`hay errores`, errors);
    }
  };
  const [disabledButton, setDisabledButton] = useState(false);
  useEffect(() => {
    if (!userByEmail?.postulado) {
      setEdit(true);
    }
  }, [userByEmail?.postulado]);
  const [edit, setEdit] = useState(false);

  // const handleDefaultCountrie =
  //   cache?.paiseIdLabel && cache?.paiseId
  //     ? [
  //         {
  //           label: cache?.paiseIdLabel,
  //           value: cache?.paiseId,
  //         },
  //       ]
  //     : [
  //         {
  //           value: "default",
  //           label: "Selecciona un país...",
  //         },
  //       ];

  // const handleDefaultTEcnologias = cache?.tecnologiasLabel
  //   ? cache?.tecnologiasLabel.map((e) => {
  //       return {
  //         label: e,
  //       };
  //     })
  //   : false;

  const handleReset = () => {
    // refCountries.current.setValue({
    //   value: "default",
    //   label: "Selecciona un país...",
    // });
    // refName.current.value = "";
    // reflastName.current.value = "";
    refServices.current.clearValue();
    refLanguajes.current.clearValue();
    refTecnologies.current.clearValue();
    setCache({
      name: ("name", `${userByEmail?.name && userByEmail?.name}`),
      lastName: ("lastName", `${userByEmail?.lastName}`),
      profilePicture: ("profilePicture", `${userByEmail?.profilePicture}`),
      email: ("email", `${userByEmail?.email}`),
      linkedIn:
        ("linkedIn", `${userByEmail?.linkedIn ? userByEmail?.linkedIn : null}`),
      gitHub: ("gitHub", `${userByEmail?.gitHub ? userByEmail?.gitHub : null}`),
      webSite:
        ("webSite", `${userByEmail?.webSite ? userByEmail?.webSite : null}`),
      yearsOfExperience:
        ("yearsOfExperience",
        `${
          userByEmail?.yearsOfExperience ? userByEmail?.yearsOfExperience : null
        }`),
      dailyBudget:
        ("dailyBudget",
        `${userByEmail?.dailyBudget ? userByEmail?.dailyBudget : null}`),
      englishLevel:
        ("englishLevel",
        `${userByEmail?.englishLevel ? userByEmail?.englishLevel : "Básico"}`),
      paiseId: ("paiseId", null),
      tecnologias: ("tecnologias", null),
      lenguajes: ("lenguajes", null),
      servicios: ("servicios", null),
      postulado: true,
    });
    setInput({
      name: `${userByEmail?.name}`,

      lastName: `${userByEmail?.lastname}`,
      profilePicture: `${userByEmail?.profilePicture}`,
      email: `${userByEmail?.email}`,
      linkedIn: `${userByEmail?.linkedIn ? userByEmail?.linkedIn : null}`,
      gitHub: `${userByEmail?.gitHub ? userByEmail?.gitHub : null}`,
      webSite: `${userByEmail?.webSite ? userByEmail?.webSite : null}`,
      yearsOfExperience:
        ("yearsOfExperience",
        `${
          userByEmail?.yearsOfExperience ? userByEmail?.yearsOfExperience : null
        }`),
      dailyBudget: `${
        userByEmail?.dailyBudget ? userByEmail?.dailyBudget : null
      }`,
      englishLevel: `${
        userByEmail?.englishLevel ? userByEmail?.englishLevel : "Básico"
      }`,
      paiseId: ("paiseId", null),
      tecnologias: ("tecnologias", null),
      lenguajes: ("lenguajes", null),
      servicios: ("servicios", null),
    });
    setLoader(false);
    setVerErrores(false);
    if (userByEmail?.postulado) {
      setEdit(false);
    }
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
    cache.email === undefined &&
    input.profile.Picture === undefined
  ) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return !isAuthenticated && !user?.email && !input?.email ? (
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
              defaultValue={userByEmail?.name || cache?.name}
              // value={input?.name}
              name="name"
              className={s.inputName}
              disabled={!edit}
              // maxlength="20"
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
              // maxlength="20"
              placeholder="Tu Apellido..."
              autoComplete="on"
              onChange={(e) => handleChangeInput(e)}
              defaultValue={userByEmail?.lastName || cache?.lastName}
              //   value={input?.lastName}
              name="lastName"
              className={s.inputLastname}
              disabled={!edit}
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
                {edit && (
                  <button
                    className={s.buttonImg}
                    onClick={() => {
                      setCache({
                        ...cache,
                        profilePicture: ("profilePicture", null),
                      });
                      setInput({
                        ...input,
                        profilePicture: null,
                      });
                      setLoader(false);
                    }}
                  >
                    <AiOutlineCloseCircle />
                  </button>
                )}
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
              //   onChange={(e) => handleChangeInput(e)}
              value={`${user?.email}`}
              name="email"
              className={s.inputEmail}
              disabled={true}
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
              defaultValue={userByEmail?.linkedIn || cache?.linkedIn}
              //   value={cache?.linkedIn}
              name="linkedIn"
              className={s.inputLinkedin}
              disabled={!edit}
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
              defaultValue={userByEmail?.gitHub || cache?.gitHub}
              //   value={cache?.gitHub}
              name="gitHub"
              className={s.inputGithub}
              disabled={!edit}
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
              defaultValue={userByEmail?.webSite || cache?.webSite}
              //   value={cache?.webSite}
              name="webSite"
              className={s.inputWebsite}
              disabled={!edit}
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
              name="yearsOfExperience"
              className={s.inputExperience}
              defaultValue={
                userByEmail?.yearsOfExperience || cache?.yearsOfExperience
              }
              //   value={cache?.yearsOfExperience}
              disabled={!edit}
              // step=".01"
            />
            <div className={s.divErrors}>
              {verErrores && errors.yearsOfExperience && (
                <label className={s.errors}>⚠ {errors.yearsOfExperience}</label>
              )}
            </div>
          </div>
          <div className={s.inputContainer}>
            <p>Presupuesto diario: </p>
            <input
              type="number"
              min="1"
              max="999"
              autoComplete="off"
              onChange={(e) => handleChangeInput(e)}
              defaultValue={userByEmail?.dailyBudget || cache?.dailyBudget}
              //   value={cache?.dailyBudget}
              name="dailyBudget"
              // step=".01"
              disabled={!edit}
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
              name="englishLevel"
              defaultValue={userByEmail?.englishLevel || cache?.englishLevel}
              // value={cache?.englishLevel}
              className={s.inputEnglish}
              disabled={!edit}
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
              // ref={refCountries}
              components={animatedComponents}
              // defaultValue={userByEmail?.paiseId || cache?.piseId}
              set-value={input?.paiseId || userByEmail?.paiseId}
              className={s.select}
              options={optionsCountries}
              isClearable={false}
              isSearchable={true}
              isMulti={false}
              styles={customStyles}
              placeholder="Selecciona un pais"
              isDisabled={!edit}
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
              {verErrores && errors.paiseId && (
                <label className={s.errors}>⚠ {errors.paiseId}</label>
              )}
            </div>
          </div>
          <div className={s.divSelectContainer}>
            <p htmlFor="tecnologias">Tecnologias: </p>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              ref={refTecnologies}
              set-value={input?.tecnologias}
              className={s.select}
              isDisabled={!edit}
              options={optionsTecnologias}
              isClearable={true}
              isSearchable={true}
              isMulti={true}
              styles={customStyles}
              placeholder="Selecciona una tecnología"
              // defaultvalue={handleDefaultTEcnologias}
              onChange={(e) => {
                setInput({
                  ...input,
                  tecnologias: e.map((ele) => ele.value),
                  // tecnologiasLabel: e.map((ele) => ele.value),
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
                  // tecnologiasLabel: e.map((ele) => ele.label),
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
              set-value={input?.lenguajes}
              className={s.select}
              isDisabled={!edit}
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
              set-value={input?.servicios}
              className={s.select}
              isDisabled={!edit}
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
          {edit ? (
            <button className={s.buttonReset} onClick={(e) => handleReset(e)}>
              <span className={s.button_top}>RESETEAR FORMULARIO</span>
            </button>
          ) : (
            <button className={s.buttonReset} onClick={() => navigate(-1)}>
              VOLVER
            </button>
          )}
          {!userByEmail?.postulado ? (
            <button
              className={s.buttonCreate}
              // disabled={disabledButton}
              onClick={(e) => handleCreate(e)}
            >
              <span className={s.button_top}> CREAR POSTULACION</span>
            </button>
          ) : !edit ? (
            <button
              className={s.buttonCreate}
              // disabled={disabledButton}
              onClick={(e) => {
                setEdit(true);
                // setDisabledButton(true);
              }}
            >
              <span className={s.button_top}>EDITAR POSTULACION</span>
            </button>
          ) : (
            <div className={s.dvButtonsCreate}>
              <button
                className={s.buttonCreate}
                disabled={disabledButton}
                onClick={handleCreate}
                // onClick={handleCreate}
              >
                <span>GUARDAR</span>
              </button>
              <button className={s.buttonCreate} onClick={handleReset}>
                CANCELAR
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
