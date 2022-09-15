import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import s from "../Details/Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Details() {
  let { id } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  
  useEffect(()=>{})
  
  return <div>

  </div>;
}
