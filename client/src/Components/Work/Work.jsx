import React from "react";
import Card from "./Card/Card";
import s from "./Work.module.css";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar"
import { data } from "../../json/Data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersBd } from "../../Redux/Actions/DevUser";


export default function Work() {
  console.log(data);
  
  const dispatch= useDispatch()

useEffect(()=>{
  dispatch(getUsersBd())
},[dispatch])
const usersDb = useSelector((state)=>state.devUser.allUsers)
console.log(usersDb)


  return (
    <div className={s.body}>
      <NavBar />
      <div className={s.cardsContainer}>
        { usersDb?.map((e) => {
          return (
            <div>
              {/* <Link to={e.id}> */}
              <Card
                name={`${e.name} ` + e.lastName}
                img={e.profilePicture}
                technologies={e.tecnologias}
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
