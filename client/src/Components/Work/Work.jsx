import React, { useLayoutEffect, useState } from "react";
import Card from "./Card/Card";
import s from "./Work.module.css";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersBd } from "../../Redux/Actions/DevUser";
import CantidadDePaginas from "../Paged/Cantidad De Paginas/CantidadDePaginas";
import Paged from "../Paged/Paged";

import ModalWork from "./ModalWork/ModalWork";
import Loader from "../Loader/Loader";
import SideMenuWork from "./SideMenuWork/SideMenuWork";

export default function Work() {
  const dispatch = useDispatch();

  let filtrados = useSelector((state) => state.devUser.filteredUsers);
  let currentPage = useSelector((state) => state.devUser.page);
  let devPerPage = useSelector((state) => state.devUser.devPerPage);
  const allUsers = useSelector((state) => state.devUser.allUsers);

  useLayoutEffect(() => {
    if (!allUsers.length) dispatch(getUsersBd());
  }, [dispatch, allUsers]);

  const indexOfLastDev = devPerPage * currentPage;
  const indexOfFirstDev = indexOfLastDev - devPerPage;
  const currentDev = filtrados.slice(indexOfFirstDev, indexOfLastDev);

  // if (currentDev.map((e) => e.tecnologias === undefined))
  //   return (
  //     <div>
  //       <Loader />
  //     </div>
  //   );

  return !allUsers.length ? (
    <Loader />
  ) : (
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
