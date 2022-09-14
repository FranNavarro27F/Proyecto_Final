import React from 'react'
import s from '../NavBar/NavBar.module.css'
import Select from 'react-select';
import {HiOutlineSearch} from "react-icons/hi";

export default function NavBar() {

  const optionsTec = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla2', label: 'Vanilla' },
    { value: 'vanilla3', label: 'Vanilla' },
    { value: 'vanilla4', label: 'Vanilla' },
    { value: 'vanilla5', label: 'Vanilla' },
    { value: 'vanilla6', label: 'Vanilla' }
  ]
  const options = [
    { value: 'web', label: 'Web Development' }, 
    { value: 'strawberry', label: 'Web Design' },
    { value: 'vanilla', label: 'UX/UI' }
  ]
  
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
        options={options}
        isClearable={true}
        isSearchable={true}
        isMulti={true}
        placeholder="Select a service"
        
      />
      <Select 
        className={s.select}
        isDisabled={false}
        options={optionsTec}
        isClearable={true}
        isSearchable={true}
        isMulti={true}
        placeholder="Select a tecnology"
        
      />

        <button className={s.puntuacion}>Puntuación</button>
        </div>
    </header>
  )
}