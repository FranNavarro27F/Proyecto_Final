import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../Redux/Actions/Countries";
import { getUsersBd } from "../Redux/Actions/DevUser";
import { getLanguajes } from "../Redux/Actions/Languajes";
import { getServices } from "../Redux/Actions/Services";
import { getTecnologies } from "../Redux/Actions/Tecnologies";

export default function useFetchAllData() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersBd());
    dispatch(getCountries());
    dispatch(getTecnologies());
    dispatch(getServices());
    dispatch(getLanguajes());
  }, [dispatch]);

  const countries = useSelector((state) => state.countries.allCountries);
  const languajes = useSelector((state) => state.languajes.allLanguajes);
  const services = useSelector((state) => state.services.allServices);
  const tecnologies = useSelector((state) => state.tecnologies.allTecnologies);

  useEffect(() => {
    if (!countries.length) dispatch(getUsersBd());
    if (!languajes.length) dispatch(getUsersBd());
    if (!services.length) dispatch(getUsersBd());
    if (!tecnologies.length) dispatch(getUsersBd());
  }, [
    dispatch,
    countries.length,
    languajes.length,
    services.length,
    tecnologies.length,
  ]);

  return { countries, languajes, services, tecnologies };
}
