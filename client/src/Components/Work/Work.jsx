import React, { useLayoutEffect, useState } from "react";
import Card from "./Card/Card";
import s from "./Work.module.css";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailReset, getUsersBd } from "../../Redux/Actions/DevUser";
import CantidadDePaginas from "../Paged/Cantidad De Paginas/CantidadDePaginas";
import Paged from "../Paged/Paged";

import ModalWork from "./ModalWork/ModalWork";
import Loader from "../Loader/Loader";
import SideMenuWork from "./SideMenuWork/SideMenuWork";
// import { useFetchUsers } from "../../Hooks/useFetchUsers";
import { useAuth0 } from "@auth0/auth0-react";
import Selectores from "../Selectores/Selectores";

export default function Work() {
  const dispatch = useDispatch();
  const { isLoading } = useAuth0();
  const filtrados = useSelector((state) => state.devUser.filteredUsers);
  const currentPage = useSelector((state) => state.devUser.page);
  const devPerPage = useSelector((state) => state.devUser.devPerPage);
  const allUsers = useSelector((state) => state.devUser.allUsers);

  // useEffect(() => {
  //   if (!allUsers.length) dispatch(getUsersBd());
  // }, [allUsers.length, dispatch, filtrados.length]);

  const indexOfLastDev = devPerPage * currentPage;
  const indexOfFirstDev = indexOfLastDev - devPerPage;
  const currentDev = filtrados.slice(indexOfFirstDev, indexOfLastDev);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className={s.body}>
      <NavBar className={s.navMenu} />
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
                  reputacion={e.reputacion}
                  name={e.name + " " + e.lastName}
                  img={e.profilePicture}
                  tecnologies={e.tecnologias}
                  servicios={e.servicios}
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
