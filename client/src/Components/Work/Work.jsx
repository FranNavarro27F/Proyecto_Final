import React from "react";
import Card from "./Card/Card";
import s from "./Work.module.css";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersBd } from "../../Redux/Actions/DevUser";
import CantidadDePaginas from "../Paged/Cantidad De Paginas/CantidadDePaginas";
import Paged from "../Paged/Paged";

export default function Work() {
  const dispatch = useDispatch();

  const usersDb = useSelector((state) => state.devUser.filteredUsers);
  let currentPage = useSelector((state) => state.devUser.page);
  let devPerPage = useSelector((state) => state.devUser.devPerPage);

  useEffect(() => {
    dispatch(getUsersBd());
  }, [dispatch]);

  const indexOfLastDev = devPerPage * currentPage;
  const indexOfFirstDev = indexOfLastDev - devPerPage;

  const currentDev = usersDb.slice(indexOfFirstDev, indexOfLastDev);
  console.log(currentDev, "aaaaa");
  return (
    <div className={s.body}>
      <NavBar />
      <div className={s.cardsContainer}>
        {currentDev?.map((e) => {
          return (
            <div>
              <Card
                name={
                  `${e.name[0].toUpperCase() + e.name.slice(1)} ` +
                  `${e.lastName[0].toUpperCase() + e.lastName.slice(1)}`
                }
                img={e.profilePicture}
                tecnologies={e.tecnologias}
                website={e.webSite}
                gitHub={e.gitHub}
                linkedIn={e.linkedIn}
                email={e.email}
                id={e.id}
              />

              <div className={s.paginado}></div>
            </div>
          );
        })}
        <CantidadDePaginas className={s.cantPage} />
        <Paged allDev={usersDb.length} />
      </div>
    </div>
    //aa
  );
}
