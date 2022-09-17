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

//actions
import { getCountries } from "../../Redux/Actions/Countries";
import { getServices } from "../../Redux/Actions/Services";
import { getLanguajes } from "../../Redux/Actions/Languajes";
import { postDevUser } from "../../Redux/Actions/DevUser";
import { getTecnologies } from "../../Redux/Actions/Tecnologies";

const animatedComponents = makeAnimated();

export default function DevUsersCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getTecnologies());
    dispatch(getServices());
    dispatch(getLanguajes());
  }, [dispatch]);

  const countries = useSelector((state) => state.countries.allCountries);

  const tecnologies = useSelector((state) => state.tecnologies.allTecnologies);

  const services = useSelector((state) => state.services.allServices);
  const languajes = useSelector((state) => state.languajes.allLanguajes);

  const [cache, setCache] = useLocalStorage({});
  const [input, setInput] = useState({
    name: cache?.name? cache.name : "",
    lastName: cache?.lastName? cache.lastName : "",
     profilePicture: cache?.profilePicture? cache?.profilePicture :"",
     email: cache?.email? cache?.email : "",
    linkedIn: cache?.linkedIn? cache?.linkedIn : "",
    gitHub: cache?.gitHub ? cache?.gitHub : "",
    webSite: cache?.webSite? cache?.webSite: "",
    dailyBudget: cache?.dailyBudget ? cache?.dailyBudget : "0",
    englishLevel: cache?.englishLevel ? cache?.englishLevel : "Básico",
    paiseId: cache?.countries ? cache?.countries : [],
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
      ...input,
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
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(
      postDevUser({
        ...input,
        name: input.name.toLowerCase(),
      })
    );
    alert("Perfil Creado con exito... (alerta provisoria)");
    setTimeout(() => {
      navigate("/work");
    }, 350);
    setCache({
      name: ("name", ""),
      lastName: ("lastName", ""),
      profilePicture: ("profilePicture", ""),
      email: ("email", ""),
      linkedIn: ("linkedIn", ""),
      gitHub: ("gitHub", ""),
      webSite: ("webSite", ""),
      yearsOfExperience: ("yearsOfExperience", "0"),
      dailyBudget: ("dailyBudget", "0"),
      englishLevel: ("englishLevel", "Básico"),
      countrie: ("countrie", []),
      tecnologias: ("tecnologias", []),
      lenguajes: ("lenguajes", []),
      servicios: ("servicios", []),
    });
  };
  const handleReset = () => {
    // setInput({
    //   name: "",
    //   lastName: "",
    //   profilePicture: "",
    //   email: "",
    //   linkedIn: "",
    //   gitHub: "",
    //   webSite: "",
    //   yearsOfExperience: "0",
    //   dailyBudget: "0",
    //   englishLevel: "Básico",
    //   paiseId: [],
    //   tecnologias: [],
    //   lenguajes: [],
    //   servicios: [],
    // });
    setCache({
      name: ("name", ""),
      lastName: ("lastName", ""),
      profilePicture: ("profilePicture", ""),
      email: ("email", ""),
      linkedIn: ("linkedIn", ""),
      gitHub: ("gitHub", ""),
      webSite: ("webSite", ""),
      yearsOfExperience: ("yearsOfExperience", "0"),
      dailyBudget: ("dailyBudget", "0"),
      englishLevel: ("englishLevel", "Básico"),
      countrie: ("countrie", []),
      tecnologias: ("tecnologias", []),
      lenguajes: ("lenguajes", []),
      servicios: ("servicios", []),
    });
  };

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

  const [errors, setErrors] = useState({});
  const [disabledButton, setDisabledButton] = useState(true);
  useEffect(() => {
    if (
      //name
      input.name === "" ||
      /[^\w\s]/.test(input.name) ||
      /[1-9]/.test(input.name) ||
      /[\s]/.test(input.name) ||
      //lastname
      input.lastName === "" ||
      /[^\w\s]/.test(input.lastName) ||
      /[1-9]/.test(input.lastName) ||
      /[\s]/.test(input.lastName) ||
      //image
      input.profilePicture === "" ||
      /[\s]/.test(input.profilePicture) ||
      !/\.(jpg|png|gif)$/i.test(input.profilePicture) ||
      //email
      input.email === "" ||
      !/^\S+@\S+\.\S+$/.test(input.email) ||
      /[\s]/.test(input.email) ||
      //linkedin
      input.linkedIn === "" ||
      /[\s]/.test(input.linkedIn) ||
      input.linkedIn === "" ||
      /[\s]/.test(input.linkedIn) ||
      //github
      input.gitHub === "" ||
      /[\s]/.test(input.gitHub) ||
      input.gitHub === "" ||
      /[\s]/.test(input.gitHub) ||
      //website
      input.webSite === "" ||
      /[\s]/.test(input.webSite) ||
      input.webSite === "" ||
      /[\s]/.test(input.webSite) ||
      !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
        input.webSite
      ) ||
      !/github/i.test(input.gitHub) ||
      !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
        input.gitHub
      ) ||
      !/linkedin/i.test(input.linkedIn) ||
      !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
        input.linkedIn
      ) ||
      //yearsOfExperience
      input.yearsOfExperience.length < 1 ||
      input.yearsOfExperience.length > 99 ||
      // /dailyBudget
      input.yearsOfExperience.length < 1 ||
      input.yearsOfExperience.length > 999 ||
      !input.paiseId?.length ||
      !input.tecnologias?.length ||
      !input.lenguajes?.length ||
      !input.servicios?.length
    ) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [errors, input, setDisabledButton]);

  return (
    <div className={s.divGeneral}>
      <SideMenu />
      <div className={s.divForm}>
        <form className={s.inputForm} action="">
          <div className={s.inputContainer}>
            <p>Nombre: </p>
            <input
              type="cache"
              placeholder="Tu Nombre..."
              autoComplete="off"
              onChange={(e) => handleChangeInput(e)}
              value={cache?.name}
              name="name"
              className={s.inputName}
            />

            {errors.name && <label className={s.errors}>⚠ {errors.name}</label>}
          </div>
          <div className={s.inputContainer}>
            <p>Apellido: </p>
            <input
              type="cache"
              placeholder="Tu Apellido..."
              autoComplete="off"
              onChange={(e) => handleChangeInput(e)}
              value={cache?.lastName}
              name="lastName"
              className={s.inputLastname}
            />
            {errors.lastName && (
              <label className={s.errors}>⚠ {errors.lastName}</label>
            )}
          </div>
          <div className={s.inputContainer}>
            <p>Imagen: </p>
            <input
              type="url"
              placeholder="https://..."
              autoComplete="off"
              onChange={(e) => handleChangeInput(e)}
              value={cache?.email}
              name="profilePicture"
              className={s.inputImg}
            />
            {errors.profilePicture && (
              <label className={s.errors}>⚠ {errors.profilePicture}</label>
            )}
          </div>
          <div className={s.inputContainer}>
            <p>Email: </p>
            <input
              type="email"
              placeholder="Tu Email..."
              autoComplete="off"
              onChange={(e) => handleChangeInput(e)}
              value={cache?.email}
              name="email"
              className={s.inputEmail}
            />
            {errors.email && (
              <label className={s.errors}>⚠ {errors.email}</label>
            )}
          </div>
          <div className={s.inputContainer}>
            <p>Linkedin: </p>
            <input
              type="url"
              placeholder="Tu LinkedIn..."
              autoComplete="off"
              onChange={(e) => handleChangeInput(e)}
              value={cache?.linkedIn}
              name="linkedIn"
              className={s.inputLinkedin}
            />
            {errors.linkedIn && (
              <label className={s.errors}>⚠ {errors.linkedIn}</label>
            )}
          </div>
          <div className={s.inputContainer}>
            <p>GitHub: </p>
            <input
              type="url"
              placeholder="Tu GitHub..."
              autoComplete="off"
              onChange={(e) => handleChangeInput(e)}
              value={cache?.gitHub}
              name="gitHub"
              className={s.inputGithub}
            />
            {errors.gitHub && (
              <label className={s.errors}>⚠ {errors.gitHub}</label>
            )}
          </div>
          <div className={s.inputContainer}>
            <p>Website: </p>
            <input
              type="url"
              placeholder="Tu webSite..."
              autoComplete="off"
              onChange={(e) => handleChangeInput(e)}
               value={cache?.webSite}
              name="webSite"
              className={s.inputWebsite}
            />
            {errors.webSite && (
              <label className={s.errors}>⚠ {errors.webSite}</label>
            )}
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
            />
            {errors.yearsOfExperience && (
              <label className={s.errors}>⚠ {errors.yearsOfExperience}</label>
            )}
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
              className={s.inputPrice}
            />
            {errors.dailyBudget && (
              <label className={s.errors}>⚠ {errors.dailyBudget}</label>
            )}
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
              value={`${cache?.englishLevel}`}
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
            {errors.englishLevel && (
              <label className={s.errors}>⚠ {errors.englishLevel}</label>
            )}
          </div>
        </div>
        <div className={s.divSelectContainer}>
          <p htmlFor="pais">Pais: </p>
          <Select
            components={animatedComponents}
            set-value={cache?.countrie}
            className={s.select}
            isDisabled={false}
            options={optionsCountries}
            isClearable={false}
            isSearchable={true}
            isMulti={false}
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
                countries: e.value,
              });
            }}
          />
          {errors.countries && (
            <label className={s.errors}>⚠ {errors.countries}</label>
          )}
        </div>
        <div className={s.divSelectContainer}>
          <p htmlFor="tecnologias">Tecnologias: </p>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            // defaultValue={optionsTecnologias.filter(
            //   (e) => e.id === cache.tecnologias.toString()
            // )}
            set-value={cache?.tecnologias}
            className={s.select}
            isDisabled={false}
            options={optionsTecnologias}
            isClearable={true}
            isSearchable={true}
            isMulti={true}
            placeholder="Selecciona una tecnologia"
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
          {errors.tecnologies && (
            <label className={s.errors}>⚠ {errors.tecnologies}</label>
          )}
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
          {errors.languajes && (
            <label className={s.errors}>⚠ {errors.languajes}</label>
          )}
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
                ...cache,
                servicios: e.map((ele) => ele.value),
              });
            }}
          />
          {errors.services && (
            <label className={s.errors}>⚠ {errors.services}</label>
          )}
        </div>
        <div className={s.buttons}>
          <button
            className={s.buttonCreated1}
            disabled={disabledButton}
            onClick={(e) => handleCreate(e)}
          >
            <span className={s.button_top}> CREAR PERFIL</span>
          </button>
          <button className={s.buttonCreated2} onClick={(e) => handleReset(e)}>
            <span className={s.button_top}>RESETEAR FORMULARIO</span>
          </button>
        </div>
      </div>
    </div>
  );
}
