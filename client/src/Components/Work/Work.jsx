import React from "react";
import Card from "./Card/Card";
import s from "./Work.module.css";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar"

export default function Work() {
  return (
    <div className={s.body}>
      <NavBar />
      <div className={s.cardsContainer}>
        <Link to={"urlll"} className={s.linkCard}>
          <Card
            name={"Ramiro Ferradas"}
            technologies={"Javascript, React Js, Redux"}
          />
        </Link>
        <Link to={"urlll"} className={s.linkCard}>
          <Card
            name={"Ramiro Ferradas"}
            technologies={"Javascript, React Js, Redux"}
          />
        </Link>
        <Link to={"urlll"} className={s.linkCard}>
          <Card
            name={"Ramiro Ferradas"}
            technologies={"Javascript, React Js, Redux"}
          />
        </Link>
        <Link to={"urlll"} className={s.linkCard}>
          <Card
            name={"Ramiro Ferradas"}
            technologies={"Javascript, React Js, Redux"}
          />
        </Link>
        <Link to={"urlll"} className={s.linkCard}>
          <Card
            name={"Ramiro Ferradas"}
            technologies={"Javascript, React Js, Redux"}
          />
        </Link>
        <Link to={"urlll"} className={s.linkCard}>
          <Card
            name={"Ramiro Ferradas"}
            technologies={"Javascript, React Js, Redux"}
          />
        </Link>
        <Link to={"urlll"} className={s.linkCard}>
          <Card
            name={"Ramiro Ferradas"}
            technologies={"Javascript, React Js, Redux"}
          />
        </Link>
        <Link to={"urlll"} className={s.linkCard}>
          <Card
            name={"Ramiro Ferradas"}
            technologies={"Javascript, React Js, Redux"}
          />
        </Link>
      </div>
    </div>
  );
}
