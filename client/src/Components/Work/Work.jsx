import React from "react";
import Card from "./Card/Card";
import s from "./Work.module.css";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersBd } from "../../Redux/Actions/DevUser";

export default function Work() {
  const dispatch = useDispatch();

  const usersDb = useSelector((state) => state.devUser.filteredUsers);
  // const usersDbAux = useSelector((state) => state.devUser.filteredUsers);
  useEffect(() => {
    if (usersDb === 0) dispatch(getUsersBd());
  }, [dispatch, usersDb]);

  return (
    <div className={s.body}>
      <NavBar />
      <div className={s.cardsContainer}>
        {usersDb?.map((e) => {
          return (
            <div>
              {/* <Link to={e.id}> */}
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
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    </div>
    //aa
  );
}
