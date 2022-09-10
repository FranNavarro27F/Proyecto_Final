import React from "react";
import s from "./Circulo.module.css";

export default function Circulo() {
  return (
    <div className={s.body}>
      <div className={s.circulo}>
        <svg
          width="620"
          height="620"
          viewBox="0 0 620 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="620"
            height="620"
            rx="310"
            fill="url(#paint0_linear_39_160)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_39_160"
              x1="82"
              y1="94"
              x2="582"
              y2="620"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C961DE" />
              <stop offset="1" stop-color="#2954A3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
