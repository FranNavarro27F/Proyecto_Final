import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useFetchAllData from "../../Hooks/useFetchAllData";
import { getUsersBd } from "../../Redux/Actions/DevUser";

export default function Selectores() {
  const dispatch = useDispatch();

  const { countries, languajes, services, tecnologies } = useFetchAllData();
  useEffect(() => {
    dispatch(getUsersBd());
  }, [dispatch]);

  const optionsLanguajes = languajes?.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  const optionsCountries = countries?.map((e) => {
    return {
      value: e.name,
      label: e.name,
    };
  });

  const optionsServices = services?.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });

  const optionsTecnologias = tecnologies?.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  });
  const optionsOrderExp = [
    { value: "default", label: "Todos" },
    { value: "asc", label: "Mayor Experiencia" },
    { value: "dsc", label: "Menor Experiencia" },
  ];
  const optionsOrderBudget = [
    { value: "default", label: "Todos" },
    { value: "asc", label: "Mayor costo diario" },
    { value: "dsc", label: "Menor costo diario" },
  ];
  return {
    optionsOrderBudget,
    optionsOrderExp,
    optionsTecnologias,
    optionsLanguajes,
    optionsCountries,
    optionsServices,
  };
}
