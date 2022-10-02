import React from "react";
import { Link } from "react-router-dom";
import s from "./CardW1.module.css";

export default function CardW1({ userPremium }) {
  return (
    <div className={s.cardw1div}>
      <div className={s.cardw1}>
        <div className={s.card_client}>
          <Link to={`/work/details/${userPremium?.id}`} className={s.link}>
            <div className={s.user_picture}>
              {userPremium?.profilePicture ? (
                <img
                  src={userPremium?.profilePicture}
                  alt={userPremium?.name}
                  className={s.imgCard}
                />
              ) : (
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                </svg>
              )}
            </div>
            <p className={s.name_client}>
              {userPremium?.name + " " + userPremium?.lastName}
            </p>
            <div className={s.divTecnologias}>
              <span>{userPremium?.servicios?.join(", ")} </span>
            </div>
          </Link>

          <div className={s.social_media}>
            {userPremium?.website && (
              <a href={userPremium?.website} target="_blank" rel="noreferrer">
                <svg
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 92 92"
                >
                  <path
                    id="XMLID_1666_"
                    d="M46,0C20.6,0,0,20.6,0,46s20.6,46,46,46s46-20.6,46-46S71.4,0,46,0z M49.7,83.8c-0.2,0-0.4,0-0.7,0.1V62.2
	c5.2-0.1,9.9-0.2,14.2-0.5C59.4,73.4,52.3,81.2,49.7,83.8z M42.3,83.8c-2.7-2.7-9.7-10.5-13.5-22.1c4.2,0.3,9,0.5,14.2,0.5v21.7
	C42.8,83.9,42.6,83.8,42.3,83.8z M8,46c0-2.5,0.3-5,0.7-7.4c2.2-0.4,6.4-1,12.3-1.6c-0.5,2.9-0.8,5.9-0.8,9.1c0,3.2,0.3,6.2,0.7,9
	c-5.8-0.6-10.1-1.2-12.3-1.6C8.3,51,8,48.5,8,46z M26.3,46c0-3.4,0.4-6.6,1-9.6c4.6-0.3,9.8-0.6,15.7-0.6v20.4
	c-5.8-0.1-11.1-0.3-15.8-0.7C26.7,52.6,26.3,49.4,26.3,46z M49.6,8.2c2.7,2.7,9.6,10.7,13.5,22.1c-4.2-0.3-8.9-0.5-14.1-0.5V8.1
	C49.2,8.1,49.4,8.2,49.6,8.2z M43,8.1v21.7c-5.2,0.1-9.9,0.2-14.1,0.5c3.8-11.4,10.8-19.4,13.4-22.1C42.6,8.2,42.8,8.1,43,8.1z
	 M49,56.2V35.8c5.8,0.1,11.1,0.3,15.7,0.6c0.6,3,1,6.2,1,9.6c0,3.4-0.3,6.6-0.9,9.6C60.2,55.9,54.9,56.1,49,56.2z M70.9,37
	c5.9,0.6,10.1,1.2,12.3,1.6C83.7,41,84,43.5,84,46c0,2.5-0.3,5-0.7,7.4c-2.2,0.4-6.4,1-12.3,1.6c0.5-2.9,0.7-5.9,0.7-9.1
	C71.7,42.9,71.4,39.8,70.9,37z M81.4,32.2c-2.8-0.4-6.8-0.9-11.9-1.4c-2.4-8.6-6.6-15.5-10.1-20.4C69.5,14.2,77.5,22.2,81.4,32.2z
	 M32.6,10.4c-3.6,4.8-7.7,11.7-10.1,20.3c-5,0.4-9,1-11.9,1.4C14.5,22.2,22.6,14.2,32.6,10.4z M10.6,59.8c2.8,0.4,6.8,0.9,11.8,1.4
	c2.4,8.6,6.4,15.5,10,20.3C22.4,77.6,14.5,69.7,10.6,59.8z M59.6,81.5c3.6-4.8,7.6-11.6,10-20.2c5-0.4,9-1,11.8-1.4
	C77.5,69.7,69.6,77.6,59.6,81.5z"
                  />
                </svg>
                <span className={s.tooltip_social}>WebSite</span>
              </a>
            )}
            {userPremium?.email && (
              <a
                href={`mailto:${userPremium?.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 474 474"
                >
                  <path
                    d="M437.5,59.3h-401C16.4,59.3,0,75.7,0,95.8v282.4c0,20.1,16.4,36.5,36.5,36.5h401c20.1,0,36.5-16.4,36.5-36.5V95.8
		C474,75.7,457.6,59.3,437.5,59.3z M432.2,86.3L239.5,251.1L46.8,86.3H432.2z M447,378.2c0,5.2-4.3,9.5-9.5,9.5h-401
		c-5.2,0-9.5-4.3-9.5-9.5V104.9l203.7,174.2c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.3,0.2,0.5,0.4,0.8,0.5
		c0.1,0.1,0.2,0.1,0.3,0.2c0.4,0.2,0.8,0.4,1.2,0.6c0.1,0,0.2,0.1,0.3,0.1c0.3,0.1,0.6,0.3,1,0.4c0.1,0,0.3,0.1,0.4,0.1
		c0.3,0.1,0.6,0.2,0.9,0.2c0.1,0,0.3,0.1,0.4,0.1c0.3,0.1,0.7,0.1,1,0.2c0.1,0,0.2,0,0.3,0c0.4,0,0.9,0.1,1.3,0.1l0,0l0,0
		c0.4,0,0.9,0,1.3-0.1c0.1,0,0.2,0,0.3,0c0.3,0,0.7-0.1,1-0.2c0.1,0,0.3-0.1,0.4-0.1c0.3-0.1,0.6-0.2,0.9-0.2c0.1,0,0.3-0.1,0.4-0.1
		c0.3-0.1,0.6-0.2,1-0.4c0.1,0,0.2-0.1,0.3-0.1c0.4-0.2,0.8-0.4,1.2-0.6c0.1-0.1,0.2-0.1,0.3-0.2c0.3-0.2,0.5-0.3,0.8-0.5
		c0.1-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.3-0.2,0.4-0.3L447,109.2V378.2z"
                  />
                </svg>
                <span className={s.tooltip_social}>Mail</span>
              </a>
            )}
            {userPremium?.gitHub && (
              <a href={userPremium?.gitHub} target="_blank" rel="noreferrer">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                </svg>
                <span className={s.tooltip_social}>GitHub</span>
              </a>
            )}
            {userPremium?.linkedIn && (
              <a href={userPremium?.linkedIn} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
                <span className={s.tooltip_social}>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
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
