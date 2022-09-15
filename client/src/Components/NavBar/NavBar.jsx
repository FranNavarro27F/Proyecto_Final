import React, { useEffect } from 'react'
import s from '../NavBar/NavBar.module.css'
import Select from 'react-select';
import {HiOutlineSearch} from "react-icons/hi";
import { getCountries } from '../../Redux/Actions/Countries';
import { getTechnologies } from '../../Redux/Actions/Technologies';
import { getServices } from '../../Redux/Actions/Services';
import { useDispatch, useSelector } from 'react-redux';
import { getLanguajes } from '../../Redux/Actions/Languajes';
import { getDevUsers } from '../../Redux/Actions/DevUser';


export default function NavBar() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getTechnologies());
    dispatch(getServices());
    dispatch(getLanguajes());
    // dispatch(getDevUsers())
  }, [dispatch]);
  const countries = useSelector((state) => state.countries.allCountries);

  const technologies = useSelector(
    (state) => state.technologies.allTechnologies
  );
   const optionsTecnologias = technologies.map((e) => {
      return {
        value: e.id,
        label: e.name,
      }
    })
    const services = useSelector((state) => state.services.allServices);
    const languajes = useSelector((state) => state.languajes.allLanguajes);
  
  // const options = [
  //   { value: 'web', label: 'Web Development' }, 
  //   { value: 'strawberry', label: 'Web Design' },
  //   { value: 'vanilla', label: 'UX/UI' }
  // ]
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
  
  return (
    <header>
        <div className={s.divGen}>
        <form>
        <input
        className={s.searchBar}
        type="text"
        placeholder='Search...'
        >
        </input>
          <HiOutlineSearch />
      </form>
      <Select 
        className={s.select}
        isDisabled={false}
        options={optionsLanguajes}
        isClearable={true}
        isSearchable={true}
        isMulti={true}
        placeholder="Seleciona Lenguaje"
        
      />
        <Select 
        className={s.select}
        isDisabled={false}
        options={optionsCountries}
        isClearable={true}
        isSearchable={true}
        isMulti={true}
        placeholder="Seleciona Paises"
        
      />
        <Select 
        className={s.select}
        isDisabled={false}
        options={optionsServices}
        isClearable={true}
        isSearchable={true}
        isMulti={true}
        placeholder="Selecciona Servicios"
        
      />
      <Select 
        className={s.select}
        isDisabled={false}
        options={optionsTecnologias}
        isClearable={true}
        isSearchable={true}
        isMulti={true}
        placeholder="Selecciona tecnologias"
        
      />

        <button className={s.puntuacion}>Puntuación</button>
        </div>
    </header>
  )
}