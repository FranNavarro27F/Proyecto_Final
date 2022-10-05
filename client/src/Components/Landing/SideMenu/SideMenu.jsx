// import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./SideMenu.module.css";
// import { GrHome } from "react-icons/gr";
import { useSelector } from "react-redux";
import useUser from "../../../Hooks/useUser";

export default function SideMenu() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowScrollTop(true);
      if (window.scrollY > 1400) {
      } else {
        setShowScrollTop(false);
      }
    });
  }, []);

  const [bug, setBug] = useState(false);

  setTimeout(() => {
    setBug(true);
  }, 600);

  const userByEmail = useSelector((state) => state.devUser.userByEmail);
  const user = useUser();

  return (
    <div>
      {/* <div className={!showScrollTop ? s.backMenu : s.backMenu2}> */}
      <div className={!bug ? s.backMenu : s.backMenuBug}>
        <svg
          className={s.svg}
          viewBox="0 0 99 740"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_12_166)">
            <path
              d="M-1 16H29C56.6142 16 79 38.3858 79 66V666C79 693.614 56.6142 716 29 716H-1V16Z"
              fill="white"
              fillOpacity="0.4"
            />
            <g filter="url(#filter1_d_12_166)">
              <path
                d="M-1 16H29C56.6142 16 79 38.3858 79 66V249.331C79 257.575 76.4526 265.618 71.7064 272.359L31.9082 328.884C18.9641 347.268 19.8833 372.032 34.1549 389.406L69.9091 432.933C75.787 440.088 79 449.062 79 458.322V666C79 693.614 56.6142 716 29 716H-1V366V16Z"
                fill="white"
                fillOpacity="0.4"
                shapeRendering="crispEdges"
              />
            </g>

            <NavLink to="/">
              <path
                d="M39 112.19L44 116.69V124.5H42V118.5H36V124.5H34V116.69L39 112.19ZM39 109.5L29 118.5H32V126.5H38V120.5H40V126.5H46V118.5H49L39 109.5Z"
                fill="#0F103F"
              />
              {/* <div className={s.iconHome}>
                <GrHome />
              </div> */}
            </NavLink>

            <NavLink to={`/work/details/${user?.user_id}`}>
              <path
                className={s.path}
                d="M39 235.9C40.16 235.9 41.1 236.84 41.1 238C41.1 239.16 40.16 240.1 39 240.1C37.84 240.1 36.9 239.16 36.9 238C36.9 236.84 37.84 235.9 39 235.9ZM39 244.9C41.97 244.9 45.1 246.36 45.1 247V248.1H32.9V247C32.9 246.36 36.03 244.9 39 244.9ZM39 234C36.79 234 35 235.79 35 238C35 240.21 36.79 242 39 242C41.21 242 43 240.21 43 238C43 235.79 41.21 234 39 234ZM39 243C36.33 243 31 244.34 31 247V250H47V247C47 244.34 41.67 243 39 243Z"
                fill="#0F103F"
              />
            </NavLink>
            <NavLink to="/work">
              <path
                d="M47 360.5H43V358.5C43 357.39 42.11 356.5 41 356.5H37C35.89 356.5 35 357.39 35 358.5V360.5H31C29.89 360.5 29.01 361.39 29.01 362.5L29 373.5C29 374.61 29.89 375.5 31 375.5H47C48.11 375.5 49 374.61 49 373.5V362.5C49 361.39 48.11 360.5 47 360.5ZM41 360.5H37V358.5H41V360.5Z"
                fill="white"
              />
            </NavLink>
            <NavLink to="/about">
              <path
                d="M33.1796 481.32L33.7929 480.707C34.1834 480.317 34.8166 480.317 35.2071 480.707L37.7929 483.293C38.1834 483.683 38.1834 484.317 37.7929 484.707L36.0005 486.5C35.7016 486.798 35.6275 487.255 35.8165 487.633C36.9093 489.819 38.6814 491.591 40.8669 492.683C41.245 492.872 41.7016 492.798 42.0005 492.5L43.7929 490.707C44.1834 490.317 44.8166 490.317 45.2071 490.707L47.7929 493.293C48.1834 493.683 48.1834 494.317 47.7929 494.707L47.1796 495.32C45.0683 497.432 41.7257 497.669 39.337 495.878L38.1286 494.971C36.385 493.664 34.8362 492.115 33.5286 490.371L32.6223 489.163C30.8307 486.774 31.0683 483.432 33.1796 481.32Z"
                fill="#0F103F"
              />
            </NavLink>
            <NavLink to="/work">
              <path
                d="M42.7549 615.255H41.9649L41.6849 614.985C42.6649 613.845 43.2549 612.365 43.2549 610.755C43.2549 607.165 40.3449 604.255 36.7549 604.255C33.1649 604.255 30.2549 607.165 30.2549 610.755C30.2549 614.345 33.1649 617.255 36.7549 617.255C38.3649 617.255 39.8449 616.665 40.9849 615.685L41.2549 615.965V616.755L46.2549 621.745L47.7449 620.255L42.7549 615.255ZM36.7549 615.255C34.2649 615.255 32.2549 613.245 32.2549 610.755C32.2549 608.265 34.2649 606.255 36.7549 606.255C39.2449 606.255 41.2549 608.265 41.2549 610.755C41.2549 613.245 39.2449 615.255 36.7549 615.255Z"
                fill="#0F103F"
              />
            </NavLink>
          </g>
          <defs>
            <filter
              id="filter0_b_12_166"
              x="-21"
              y="-4"
              width="120"
              height="740"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="10" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_12_166"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_12_166"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_12_166"
              x="-21"
              y="0"
              width="120"
              height="740"
              filterUnits="userSpaceOnUse"
              colorInterpolation-filters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0384542 0 0 0 0 0.0297917 0 0 0 0 0.0916667 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_12_166"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_12_166"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
