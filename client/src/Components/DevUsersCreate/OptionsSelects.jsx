//OPCIONES DE LOS SELECTS:

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../Redux/Actions/Countries";
import { getLanguajes } from "../../Redux/Actions/Languajes";
import { getServices } from "../../Redux/Actions/Services";
import { getTecnologies } from "../../Redux/Actions/Tecnologies";

export const Selectores = () => {
  const dispatch = useDispatch();
  const tecnologies = useSelector((state) => state.tecnologies.allTecnologies);
  const services = useSelector((state) => state.services.allServices);
  const languajes = useSelector((state) => state.languajes.allLanguajes);
  const countries = useSelector((state) => state.countries.allCountries);

  useEffect(() => {
    if (!countries) dispatch(getCountries());
    if (!languajes) dispatch(getLanguajes());
    if (!tecnologies) dispatch(getTecnologies());
    if (!services) dispatch(getServices());
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

  const optionsCountries = countries.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  return {
    optionsServices,
    optionsLanguajes,
    optionsTecnologias,
    optionsCountries,
  };
};
