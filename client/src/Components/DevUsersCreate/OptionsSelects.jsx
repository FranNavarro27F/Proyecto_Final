//OPCIONES DE LOS SELECTS:

import { useSelector } from "react-redux";

export const Selectores = () => {
  const countries = useSelector((state) => state.countries.allCountries);
  const tecnologies = useSelector((state) => state.tecnologies.allTecnologies);
  const services = useSelector((state) => state.services.allServices);
  const languajes = useSelector((state) => state.languajes.allLanguajes);

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

  // const resultado = tecnologies?.filter((e) =>
  //   e.id.includes(cache?.tecnologias)
  // );

  // const optionsTecnologias2 = Array(cache).map((e) => {
  //   return {
  //     value: e.tecnologias,
  //     label: e.tecnologiasLabel,
  //   };
  // });

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
  module.exports = {
    optionsServices,
    optionsLanguajes,
    optionsTecnologias,
    optionsCountries,
  };
};
