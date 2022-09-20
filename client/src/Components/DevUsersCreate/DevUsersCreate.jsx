import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import s from "./DevUsersCreate.module.css";
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "../Landing/SideMenu/SideMenu";
import { validaciones } from "./Validaciones";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import makeAnimated from "react-select/animated";
import { customStyles } from "./StyleSelect";
import ModalCreate from "./ModalCreate/ModalCreate";
import { useAuth0 } from "@auth0/auth0-react";

//actions
import { getCountries } from "../../Redux/Actions/Countries";
import { getServices } from "../../Redux/Actions/Services";
import { getLanguajes } from "../../Redux/Actions/Languajes";
import { getUsersBd, postDevUser } from "../../Redux/Actions/DevUser";
import { getTecnologies } from "../../Redux/Actions/Tecnologies";

const animatedComponents = makeAnimated();

export default function DevUsersCreate() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getTecnologies());
    dispatch(getServices());
    dispatch(getLanguajes());
    dispatch(getUsersBd());
  }, [dispatch]);

  const countries = useSelector((state) => state.countries.allCountries);
  const tecnologies = useSelector((state) => state.tecnologies.allTecnologies);
  const services = useSelector((state) => state.services.allServices);
  const languajes = useSelector((state) => state.languajes.allLanguajes);
  const users = useSelector((state) => state.devUser.allUsers);

  // async function promesa(obj, prop) {
  //   const result = await obj[prop];
  //   return result[["PromiseResult"]];
  // }

  // console.log(promesa(user, "email"), "aca estoy");

  const [cache, setCache] = useLocalStorage({});
  const [input, setInput] = useState({
    name: cache?.name ? cache.name : `${user?.given_name}`,
    lastName: cache?.lastName ? cache.lastName : `${user?.family_name}`,
    profilePicture: cache?.profilePicture ? cache?.profilePicture : "",
    email: `${user?.email}`,
    linkedIn: cache?.linkedIn ? cache?.linkedIn : "",
    gitHub: cache?.gitHub ? cache?.gitHub : "",
    webSite: cache?.webSite ? cache?.webSite : "",
    dailyBudget: cache?.dailyBudget ? cache?.dailyBudget : "0",
    yearsOfExperience: cache?.yearsOfExperience
      ? cache?.yearsOfExperience
      : "0",
    englishLevel: cache?.englishLevel ? cache?.englishLevel : "Básico",
    paiseId: cache?.paiseId ? cache?.paiseId : [],
    tecnologias: cache?.tecnologias ? cache?.tecnologias : [],
    lenguajes: cache?.lenguajes ? cache?.lenguajes : [],
    servicios: cache?.servicios ? cache?.servicios : [],
  });

  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validaciones({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    setCache({
      ...cache,
      [e.target.name]: e.target.value,
    });
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
    setErrors(
      validaciones({
        ...input,
        [e.target.name]: ingles(),
      })
    );
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
    if (!errors) {
      setModal(true);
      dispatch(
        postDevUser({
          ...input,
          name: input.name[0].toUpperCase() + input.name.slice(1).toLowerCase(),
          lastName:
            input.lastName[0].toUpperCase() +
            input.lastName.slice(1).toLowerCase(),
        })
      );
      setTimeout(() => {
        navigate("/work");
      }, 1000);
      setCache({
        name: ("name", `${user?.given_name}`),
        lastName: ("lastName", `${user?.family_name}`),
        profilePicture: ("profilePicture", ""),
        email: ("email", `${user?.email}`),
        linkedIn: ("linkedIn", ""),
        gitHub: ("gitHub", ""),
        webSite: ("webSite", ""),
        yearsOfExperience: ("yearsOfExperience", "0"),
        dailyBudget: ("dailyBudget", "0"),
        englishLevel: ("englishLevel", "Básico"),
        paiseId: ("paiseId", ""),
        tecnologias: ("tecnologias", []),
        lenguajes: ("lenguajes", []),
        servicios: ("servicios", []),
      });
    } else {
      console.log("Hay errores!");
    }
  };

  const handleReset = () => {
    setCache({
      name: ("name", `${user?.given_name}`),
      lastName: ("lastName", `${user?.family_name}`),
      profilePicture: ("profilePicture", ""),
      email: `${user?.family_name}`,
      linkedIn: ("linkedIn", ""),
      gitHub: ("gitHub", ""),
      webSite: ("webSite", ""),
      yearsOfExperience: ("yearsOfExperience", "0"),
      dailyBudget: ("dailyBudget", "0"),
      englishLevel: ("englishLevel", "Básico"),
      paiseId: ("paiseId", ""),
      tecnologias: ("tecnologias", []),
      lenguajes: ("lenguajes", []),
      servicios: ("servicios", []),
    });
  };

  const [errors, setErrors] = useState({});

  //OPCIONES DE LOS SELECTS:

  const optionsCountries = countries.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });
  const optionsTecnologias = tecnologies.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  const optionsServices = services.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  const optionsLanguajes = languajes.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  // const [disabledButton, setDisabledButton] = useState(true);

  // useEffect(() => {
  //   if (
  //     //name
  //     input.name === "" ||
  //     /[^\w\s]/.test(input.name) ||
  //     /[1-9]/.test(input.name) ||
  //     /[\s]/.test(input.name) ||
  //     //lastname
  //     input.lastName === "" ||
  //     /[^\w\s]/.test(input.lastName) ||
  //     /[1-9]/.test(input.lastName) ||
  //     /[\s]/.test(input.lastName) ||
  //     //image
  //     // input.profilePicture === "" ||
  //     // /[\s]/.test(input.profilePicture) ||
  //     // !/\.(jpg|png|gif)$/i.test(input.profilePicture) ||
  //     //email
  //     input.email === "" ||
  //     !/^\S+@\S+\.\S+$/.test(input.email) ||
  //     /[\s]/.test(input.email) ||
  //     //linkedin
  //     input.linkedIn === "" ||
  //     /[\s]/.test(input.linkedIn) ||
  //     //github
  //     input.gitHub === "" ||
  //     /[\s]/.test(input.gitHub) ||
  //     //website
  //     input.webSite === "" ||
  //     /[\s]/.test(input.webSite) ||
  //     !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
  //       input.webSite
  //     ) ||
  //     //yearsOfExperience
  //     input.yearsOfExperience?.length < 1 ||
  //     input.yearsOfExperience?.length > 99 ||
  //     // /dailyBudget
  //     input.dailyBudget?.length < 1 ||
  //     input.dailyBudget?.length > 999 ||
  //     !input.paiseId?.length ||
  //     !input.tecnologias?.length ||
  //     !input.lenguajes?.length ||
  //     !input.servicios?.length
  //   ) {
  //     setDisabledButton(true);
  //   } else {
  //     setDisabledButton(false);
  //   }
  // }, [errors, input, setDisabledButton]);

  if (isLoading) {
    return <div>Loading...</div>;
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
              type="text"
              placeholder="Tu Nombre..."
              autoComplete="on"
              onChange={(e) => handleChangeInput(e)}
              value={cache?.name}
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
              type="text"
              placeholder="Tu Apellido..."
              autoComplete="on"
              onChange={(e) => handleChangeInput(e)}
              value={cache?.lastName}
              name="lastName"
              className={s.inputLastname}
            />
            <div className={s.divErrors}>
              {verErrores && errors.lastName && (
                <label className={s.errors}>⚠ {errors.lastName}</label>
              )}
            </div>
          </div>
          <div className={s.inputContainer}>
            <p>Imagen: </p>
            <input
              type="url"
              placeholder="https://..."
              autoComplete="of"
              onChange={(e) => handleChangeInput(e)}
              value={cache?.profilePicture}
              name="profilePicture"
              className={s.inputImg}
            />
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
              defaultValue="asdsa"
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
              components={animatedComponents}
              set-value={cache?.paiseId}
              className={s.select}
              isDisabled={false}
              options={optionsCountries}
              isClearable={false}
              isSearchable={true}
              isMulti={false}
              styles={customStyles}
              // classNamePrefix="react-select"
              placeholder="Selecciona un pais"
              onChange={(e) => {
                setInput({
                  ...input,
                  paiseId: e.value,
                });
                setErrors(
                  validaciones({
                    ...input,
                    paiseId: e.value,
                  })
                );
                setCache({
                  ...cache,
                  paiseId: e.value,
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
              // defaultValue={optionsTecnologias2 ? optionsTecnologias2 : false}
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
                setErrors(
                  validaciones({
                    ...input,
                    tecnologias: e.map((ele) => ele.value),
                  })
                );
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
                setErrors(
                  validaciones({
                    ...input,
                    lenguajes: e.map((ele) => ele.value),
                  })
                );
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
                setErrors(
                  validaciones({
                    ...input,
                    servicios: e.map((ele) => ele.value),
                  })
                );
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
          <button
            className={s.buttonCreate}
            // disabled={disabledButton}
            onClick={(e) => handleCreate(e)}
          >
            <span className={s.button_top}> CREAR PERFIL</span>
          </button>
        </div>
      </div>
    </div>
  );
}
