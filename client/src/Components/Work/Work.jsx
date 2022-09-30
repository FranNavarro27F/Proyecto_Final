import React, { useLayoutEffect, useMemo, useState } from "react";
import Card from "./Card/Card";
import s from "./Work.module.css";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import CantidadDePaginas from "../Paged/Cantidad De Paginas/CantidadDePaginas";
import Paged from "../Paged/Paged";
import ModalWork from "./ModalWork/ModalWork";
import Loader from "../Loader/Loader";
import SideMenuWork from "./SideMenuWork/SideMenuWork";
import { useFetchUsers } from "../../Hooks/useFetchUsers";
import { useAuth0 } from "@auth0/auth0-react";
import Selectores from "../Selectores/Selectores";

export default function Work() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  let filtrados = useSelector((state) => state.devUser.filteredUsers);
  let currentPage = useSelector((state) => state.devUser.page);
  let devPerPage = useSelector((state) => state.devUser.devPerPage);
  const { allUsers } = useFetchUsers();

  // useEffect(() => {
  //   dispatch(getUsersBd());
  // }, [dispatch]);

  const {
    optionsOrderBudget,
    optionsOrderExp,
    optionsTecnologias,
    optionsLanguajes,
    optionsCountries,
    optionsServices,
  } = Selectores();

  const indexOfLastDev = devPerPage * currentPage;
  const indexOfFirstDev = indexOfLastDev - devPerPage;
  const currentDev = filtrados.slice(indexOfFirstDev, indexOfLastDev);

  const usersWork = useMemo(
    () =>
      filtrados?.map((e) => {
        return {
          name: `${e.name + " " + e.lastName}`,
          img: e.profilePicture,
          tecnologies: e.tecnologias,
          website: e.webSite,
          gitHub: e.gitHub,
          linkedIn: e.linkedIn,
          email: e.email,
          id: e.id,
        };
      }),
    [filtrados]
  );

  return !allUsers.length && isLoading ? (
    <Loader />
  ) : (
    <main className={s.body}>
      <NavBar
        optionsOrderBudget={optionsOrderBudget}
        optionsOrderExp={optionsOrderExp}
        optionsTecnologias={optionsTecnologias}
        optionsLanguajes={optionsLanguajes}
        optionsServices={optionsServices}
        optionsCountries={optionsCountries}
        className={s.navMenu}
      />
      <div className={s.sideMenu}>
        <SideMenuWork />
      </div>
      {!filtrados?.length ? (
        <ModalWork />
      ) : (
        <div className={s.cardsContainer}>
          {currentDev?.map((e) => {
            return (
              <div key={e.id}>
                <Card
                  usersWork={usersWork}
                  name={e.name + " " + e.lastName}
                  img={e.profilePicture}
                  tecnologies={e.tecnologias}
                  website={e.webSite}
                  gitHub={e.gitHub}
                  linkedIn={e.linkedIn}
                  email={e.email}
                  id={e.id}
                />
              </div>
            );
          })}
        </div>
      )}
      )
      <div className={s.paginado}>
        <CantidadDePaginas className={s.cantPage} />
        <Paged className={s.paged} allDev={filtrados.length} />
      </div>
    </main>
    //aa
  );
}
