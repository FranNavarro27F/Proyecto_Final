import React from "react";
import Card from "./Card/Card";
import s from "./Work.module.css";
import { Link } from "react-router-dom";
import { data } from "../../json/Data";

export default function Work() {
  console.log(data);

  return (
    <div className={s.body}>
      <div className={s.cardsContainer}>
        {data.usuarios.map((e) => {
          return (
            <div>
              {/* <Link to={e.id}> */}
              <Card
                name={`${e.name} ` + e.lastName}
                img={e.profilePicture}
                technologies={e.technologies}
                website={e.website}
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
  );
}
