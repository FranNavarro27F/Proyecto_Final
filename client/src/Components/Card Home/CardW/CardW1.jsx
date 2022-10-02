import React from "react";
import s from "./CardW1.module.css";

export default function CardW1() {
  return (
    <div className={s.cardw1div}>
      <div className={s.cardw1}>
        <svg
          viewBox="0 0 440 330"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_39_337)">
            <rect
              width="440"
              height="330"
              rx="30"
              fill="#BFF9DD"
              fillOpacity="0.4"
            />
            <path
              d="M0 270H440V300C440 316.569 426.569 330 410 330H30C13.4315 330 0 316.569 0 300V270Z"
              fill="#010101"
              fillOpacity="0.3"
            />

            <path
              d="M0.5 270.5H439.5V300C439.5 316.292 426.292 329.5 410
            329.5H30C13.7076 329.5 0.5 316.292 0.5 300V270.5Z"
              stroke="url(#paint0_linear_39_337)"
              strokeOpacity="0.3"
            />
            <rect x="65" y="30" width="55" height="117" fill="url(#pattern0)" />
            <rect
              x="128"
              y="30"
              width="55"
              height="117"
              fill="url(#pattern1)"
            />
            <rect
              x="319"
              y="29"
              width="55"
              height="118"
              fill="url(#pattern2)"
            />
            <rect
              x="193"
              y="30"
              width="53"
              height="117"
              fill="url(#pattern3)"
            />
            <rect
              x="128"
              y="124"
              width="55"
              height="118"
              fill="url(#pattern4)"
            />
            <rect
              x="193"
              y="124"
              width="53"
              height="118"
              fill="url(#pattern5)"
            />
            <rect
              x="256"
              y="124"
              width="55"
              height="118"
              fill="url(#pattern6)"
            />
            <rect
              x="256"
              y="30"
              width="55"
              height="117"
              fill="url(#pattern7)"
            />
            <rect
              x="65"
              y="124"
              width="55"
              height="118"
              fill="url(#pattern8)"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_39_337"
              x="-40"
              y="-40"
              width="520"
              height="410"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="20" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_39_337"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_39_337"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_39_337"
              x1="0"
              y1="270"
              x2="421.211"
              y2="349.736"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
