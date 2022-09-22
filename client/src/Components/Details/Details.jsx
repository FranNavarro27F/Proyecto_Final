import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import s from "../Details/Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { detailReset, getUserId } from "../../Redux/Actions/DevUser";
import { getCountries } from "../../Redux/Actions/Countries";
import diamantess from '../Home/Assets/Diamante/diamante.png'
import SideMenu from "../Landing/SideMenu/SideMenu";
import Loader from '../Loader/Loader'
import 'boxicons'
import { useAuth0 } from "@auth0/auth0-react";
import { emailer } from "../../Redux/Actions/Emailer";
import { useState } from "react";


export default function Details() {

  let [disabled, setDisabled] = useState(false);


  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  let { id } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getUserId(id))
    dispatch(getCountries())
    return function() {
      dispatch(detailReset())
    }
  },[dispatch, id])


  const userDetail = useSelector((state)=>state.devUser.details)
  const paises = useSelector((state)=> state.countries.allCountries)
  let nombreContratista = user?.given_name;
  let mailContrado = userDetail?.email;

  const handleContact = () => {
    if(nombreContratista && mailContrado) {
      setDisabled(true)
      dispatch(emailer({nombreContratista: nombreContratista, mailContrado: mailContrado}))
      console.log("se apretó")
      

    }
  }

    // function toUpperCase(userDetail){
    //   return userDetail[0].toUpperCase()+ userDetail.slice(1)
    // }

   return !userDetail.name ? <Loader/>:(

    <div className={s.sideM}>
      <SideMenu/>
     <div className={s.backGroundDiv}>
      <div className={s.girlCelu}>
        {/* el svg de aca abajo es la chica */}
      <svg width="520" height="1039" viewBox="0 0 520 1039" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M203.408 810.995C196.63 811.155 190.934 805.933 190.507 799.168L181.335 654.428C180.675 644.003 188.819 635.119 199.262 634.874C209.708 634.628 218.261 643.118 218.09 653.564L215.739 798.573C215.629 805.354 210.187 810.835 203.408 810.995Z" fill="#FFC999"/>
<path fillRule="evenodd" clipRule="evenodd" d="M196.081 499.682C183.774 499.971 174.121 510.336 174.702 522.632L180.961 654.834C181.443 665.017 189.963 672.954 200.154 672.715C210.345 672.475 218.482 664.146 218.484 653.952L218.517 521.601C218.52 509.291 208.389 499.393 196.081 499.682Z" fill="#FFC999"/>
<path fillRule="evenodd" clipRule="evenodd" d="M190.793 817.816L214.606 818.124L216.435 780.476L189.095 780.122L190.793 817.816Z" fill="#597EF7"/>
<path d="M189.301 786.858L214.542 787.185C214.974 787.19 215.319 787.545 215.314 787.976C215.309 788.372 215.01 788.695 214.628 788.742L214.522 788.748L189.281 788.421C188.849 788.415 188.504 788.061 188.509 787.629C188.515 787.233 188.813 786.91 189.195 786.863L189.301 786.858Z" fill="#E4EBF7"/>
<path fillRule="evenodd" clipRule="evenodd" d="M188.439 816.301L214.62 816.641L215.322 864.616L156.331 863.851L156.28 856.486C156.273 853.779 158.204 851.455 160.868 850.969L176.589 846.568L184.693 842.091C187.135 840.742 188.636 838.17 188.597 835.381C188.518 829.386 188.395 819.22 188.439 816.301Z" fill="#4E5C93"/>
<path fillRule="evenodd" clipRule="evenodd" d="M214.732 866.172L155.919 865.408C155.362 865.402 154.916 864.943 154.924 864.386L155.007 857.791C155.015 857.233 155.473 856.787 156.031 856.793L214.843 857.557C215.4 857.565 215.847 858.022 215.841 858.579L215.754 865.176C215.747 865.732 215.289 866.18 214.732 866.172Z" fill="#E4EBF7"/>
<path fillRule="evenodd" clipRule="evenodd" d="M156.031 856.794C156.084 852.637 159.148 849.133 163.259 848.523L176.589 846.546L177.334 856.925L156.031 856.794Z" fill="#E4EBF7"/>
<path d="M156.036 856.394L214.849 857.156C215.07 857.159 215.246 857.34 215.244 857.561C215.241 857.755 215.102 857.914 214.919 857.949L214.838 857.956L156.026 857.194C155.805 857.191 155.628 857.01 155.631 856.789C155.634 856.596 155.773 856.436 155.956 856.401L156.036 856.394Z" fill="#A3B5D6"/>
<path d="M188.083 833.563C188.179 833.132 188.607 832.861 189.038 832.957L189.288 833.019C189.571 833.094 189.954 833.21 190.41 833.372C191.418 833.731 192.427 834.197 193.374 834.784C194.413 835.428 195.315 836.182 196.036 837.056C196.469 837.581 196.09 838.373 195.409 838.365C194.683 838.356 193.553 838.499 192.151 838.762C191.673 838.852 191.173 838.954 190.656 839.066L189.94 839.225L189.291 839.375L189.464 839.52C190.086 840.059 190.703 840.668 191.295 841.35L191.646 841.767C191.854 842.02 192.055 842.281 192.25 842.547C192.663 843.113 192.201 843.9 191.505 843.813C190.627 843.704 189.582 843.691 188.41 843.764C187.374 843.828 186.274 843.957 185.151 844.133L184.425 844.252L184.616 844.374C184.697 844.428 184.778 844.483 184.859 844.541L185.102 844.721C185.811 845.261 186.432 845.917 186.938 846.698C187.179 847.069 187.073 847.565 186.702 847.805C186.331 848.045 185.836 847.939 185.596 847.569C185.193 846.947 184.698 846.425 184.132 845.993C183.558 845.555 182.942 845.232 182.326 845.006L182.038 844.908C181.818 844.838 181.65 844.798 181.552 844.782C180.695 844.638 180.649 843.423 181.493 843.216L182.086 843.08L182.258 843.043C182.854 842.915 183.509 842.787 184.203 842.667C185.614 842.424 187.004 842.248 188.311 842.167C188.785 842.138 189.241 842.121 189.679 842.119L189.836 842.119L189.76 842.034C189.321 841.557 188.87 841.122 188.417 840.73L188.077 840.443C187.87 840.273 187.674 840.122 187.494 839.99L187.179 839.768C187.121 839.728 187.078 839.7 187.053 839.684C186.455 839.316 186.589 838.411 187.267 838.231L188.165 838.002C188.854 837.832 189.582 837.661 190.317 837.502C190.847 837.387 191.363 837.282 191.856 837.19L192.581 837.06C192.815 837.02 193.041 836.984 193.257 836.952L193.604 836.903L193.486 836.808C193.287 836.652 193.079 836.502 192.862 836.357L192.531 836.144C191.689 835.622 190.781 835.203 189.873 834.88C189.635 834.795 189.409 834.721 189.201 834.659L188.775 834.54C188.737 834.53 188.708 834.523 188.688 834.519C188.257 834.422 187.986 833.994 188.083 833.563Z" fill="#E4EBF7"/>
<path d="M188.959 825.894C188.867 825.894 188.777 825.909 188.691 825.939C187.603 826.318 187.024 827.008 187.13 827.894C187.195 828.436 187.501 828.917 187.96 829.381C188.23 829.655 188.496 829.867 188.687 829.998L188.76 830.067L189.093 830.355C189.477 830.682 189.911 831.047 190.388 831.44C191.75 832.563 193.179 833.686 194.607 834.735C195.451 835.355 196.271 835.931 197.059 836.455C199.708 838.216 201.878 839.316 203.482 839.58C205.789 839.961 207 838.576 206.576 835.818C205.917 831.516 202.558 828.749 197.484 827.199C195.709 826.657 193.827 826.299 191.938 826.089C191.421 826.032 190.926 825.988 190.456 825.956L189.996 825.929C189.751 825.916 189.534 825.907 189.347 825.901L188.959 825.894ZM189.096 827.495L189.429 827.504C190.044 827.524 190.84 827.577 191.761 827.68C193.559 827.879 195.346 828.219 197.016 828.73C201.446 830.083 204.295 832.369 204.947 835.781L204.995 836.06L205.044 836.425C205.205 837.853 204.827 838.181 203.742 838.002C202.428 837.785 200.415 836.764 197.945 835.123C197.179 834.613 196.379 834.051 195.554 833.446C194.152 832.416 192.746 831.311 191.406 830.206L190.608 829.542L189.667 828.737C189.478 828.6 189.286 828.447 189.098 828.257L189.005 828.159C188.86 827.997 188.766 827.852 188.732 827.756L188.722 827.715C188.771 827.656 188.89 827.578 189.096 827.495Z" fill="#E4EBF7"/>
<path fillRule="evenodd" clipRule="evenodd" d="M290.51 808.885C297.241 808.051 302.111 803.575 301.547 796.819L289.462 650.774C288.591 640.363 279.237 632.766 268.868 634.048C258.499 635.332 251.279 644.981 252.974 655.29L278.017 799.919C279.116 806.61 283.781 809.717 290.51 808.885Z" fill="#FFC999"/>
<path fillRule="evenodd" clipRule="evenodd" d="M252.255 499.844C264.472 498.331 275.539 507.174 276.76 519.424L289.891 651.12C290.902 661.263 283.635 670.36 273.517 671.613C263.401 672.865 254.134 665.815 252.642 655.731L233.264 524.808C231.462 512.63 240.039 501.356 252.255 499.844Z" fill="#FFC999"/>
<path fillRule="evenodd" clipRule="evenodd" d="M304.987 813.068L279.656 813.604L272.939 775.974L300.273 775.36L304.987 813.068Z" fill="#597EF7"/>
<path d="M300.098 782.097C300.53 782.087 300.888 782.429 300.898 782.861C300.906 783.257 300.62 783.59 300.239 783.651L300.133 783.66L274.897 784.228C274.465 784.237 274.108 783.895 274.098 783.464C274.089 783.068 274.376 782.734 274.756 782.674L274.862 782.664L300.098 782.097Z" fill="#E4EBF7"/>
<path fillRule="evenodd" clipRule="evenodd" d="M305.346 811.531L279.171 812.12L283.945 860.1L342.928 858.773L342.905 851.409C342.89 848.701 340.934 846.395 338.268 845.936L322.506 841.683L314.359 837.285C311.904 835.96 309.747 833.26 308.868 830.612C307.242 825.716 305.42 814.45 305.346 811.531Z" fill="#4E5C93"/>
<path fillRule="evenodd" clipRule="evenodd" d="M284.549 861.65L343.353 860.326C343.909 860.314 344.35 859.852 344.34 859.295L344.191 852.7C344.179 852.144 343.716 851.701 343.158 851.715L284.356 853.036C283.8 853.049 283.357 853.511 283.37 854.069L283.517 860.663C283.53 861.221 283.993 861.662 284.549 861.65Z" fill="#E4EBF7"/>
<path fillRule="evenodd" clipRule="evenodd" d="M343.158 851.714C343.064 847.559 339.97 844.083 335.852 843.512L322.505 841.662L321.858 852.047L343.158 851.714Z" fill="#E4EBF7"/>
<path d="M343.149 851.314C343.37 851.309 343.553 851.484 343.558 851.705C343.563 851.899 343.429 852.063 343.248 852.104L343.167 852.114L284.366 853.436C284.145 853.441 283.962 853.266 283.957 853.045C283.952 852.852 284.086 852.687 284.267 852.646L284.348 852.636L343.149 851.314Z" fill="#A3B5D6"/>
<path d="M309.927 828.192C310.357 828.091 310.788 828.358 310.889 828.788C310.981 829.182 310.764 829.577 310.396 829.718L310.292 829.75C310.242 829.761 310.137 829.789 309.985 829.833C309.725 829.909 309.434 830.003 309.119 830.119C308.22 830.448 307.32 830.873 306.486 831.399C306.147 831.612 305.827 831.838 305.528 832.075L305.399 832.182L305.429 832.185C305.846 832.238 306.299 832.306 306.784 832.388L307.154 832.452C307.661 832.542 308.19 832.645 308.736 832.759C309.22 832.859 309.702 832.965 310.17 833.071L311.666 833.428C311.696 833.436 311.723 833.443 311.747 833.449C312.427 833.623 312.569 834.526 311.975 834.901L311.851 834.984C311.812 835.011 311.767 835.043 311.715 835.08C311.492 835.24 311.241 835.434 310.97 835.66C310.413 836.124 309.855 836.654 309.316 837.249L309.216 837.361L309.385 837.36C309.678 837.359 309.98 837.364 310.29 837.375L310.761 837.396C312.089 837.467 313.502 837.634 314.935 837.869C315.442 837.952 315.927 838.04 316.382 838.128L317.143 838.284C317.331 838.324 317.475 838.356 317.568 838.378C318.376 838.568 318.381 839.685 317.636 839.917L317.376 839.977C317.228 840.014 317.017 840.078 316.761 840.173C316.153 840.401 315.545 840.726 314.979 841.163C314.407 841.604 313.91 842.136 313.508 842.77C313.271 843.143 312.777 843.254 312.404 843.017C312.031 842.781 311.92 842.286 312.157 841.913C312.662 841.116 313.287 840.447 314.001 839.896C314.162 839.772 314.322 839.657 314.482 839.55L314.645 839.443L313.989 839.341C313.076 839.205 312.177 839.1 311.315 839.035L310.676 838.994C309.496 838.931 308.445 838.954 307.563 839.072C306.869 839.165 306.399 838.384 306.806 837.814C307.008 837.531 307.218 837.256 307.434 836.988C308.118 836.139 308.845 835.392 309.578 834.746L309.731 834.613L309.118 834.476L308.411 834.325C307.879 834.215 307.364 834.115 306.874 834.028L306.245 833.92C305.129 833.74 304.224 833.647 303.609 833.661C302.928 833.677 302.54 832.888 302.969 832.358C303.687 831.47 304.59 830.703 305.633 830.045C306.571 829.454 307.57 828.982 308.569 828.616L308.995 828.466C309.396 828.331 309.715 828.241 309.927 828.192Z" fill="#E4EBF7"/>
<path d="M309.94 821.129L309.533 821.139C308.914 821.162 308.091 821.22 307.123 821.333C305.238 821.552 303.351 821.919 301.568 822.47C296.431 824.059 293.04 826.868 292.415 831.219C292.019 833.976 293.238 835.351 295.535 834.955C297.133 834.679 299.286 833.564 301.912 831.785C302.698 831.253 303.514 830.668 304.354 830.039C305.777 828.974 307.199 827.835 308.556 826.695L309.363 826.01L310.324 825.171C310.438 825.098 310.701 824.886 310.967 824.61C311.406 824.157 311.704 823.689 311.778 823.165C311.907 822.258 311.323 821.549 310.207 821.171C310.121 821.142 310.031 821.128 309.94 821.129ZM309.815 822.731C309.986 822.798 310.095 822.86 310.158 822.914L310.192 822.948C310.178 823.052 310.043 823.265 309.818 823.497C309.633 823.688 309.444 823.841 309.332 823.92L308.32 824.796C308.072 825.009 307.806 825.234 307.526 825.47C306.191 826.591 304.792 827.713 303.395 828.758C302.574 829.373 301.778 829.943 301.015 830.46L300.359 830.897C298.21 832.3 296.451 833.173 295.263 833.378C294.1 833.579 293.75 833.184 293.999 831.447C294.517 827.838 297.431 825.424 302.041 823.999C303.721 823.479 305.513 823.13 307.307 822.922L307.957 822.853C308.579 822.792 309.116 822.757 309.546 822.74L309.815 822.731Z" fill="#E4EBF7"/>
<path fillRule="evenodd" clipRule="evenodd" d="M244.837 478.883C247.502 482.269 252.359 482.961 255.861 480.453L323.497 432.038C329.564 427.385 330.659 418.668 325.929 412.657C321.159 406.595 312.33 405.653 306.387 410.575L245.631 468.044C242.604 470.907 242.261 475.608 244.837 478.883Z" fill="#FFC999"/>
<path fillRule="evenodd" clipRule="evenodd" d="M254.081 491.292C254.081 491.292 260.446 477.785 254.37 471.415C248.867 465.645 242.451 470.44 242.451 470.44C242.451 470.44 235.314 474.196 229.589 481.09C225.817 485.633 219.519 495.001 221.638 497.306C224.4 500.31 230.911 489.293 233.488 490.768C236.133 492.282 234.956 494.658 234.058 500.941C233.497 504.866 231.399 508.517 231.558 511.936C231.869 518.619 246.22 512.347 254.081 491.292Z" fill="#FFC999"/>
<path d="M239.882 495.177C240.211 495.14 240.508 495.377 240.545 495.706L240.563 495.918L240.57 496.023C240.659 497.525 240.532 499.527 240.019 501.882C239.253 505.398 237.761 508.97 235.376 512.449C235.189 512.722 234.815 512.791 234.542 512.604C234.268 512.417 234.199 512.043 234.386 511.77C236.681 508.423 238.112 504.995 238.846 501.627C239.335 499.385 239.455 497.492 239.372 496.094L239.353 495.841C239.316 495.512 239.552 495.215 239.882 495.177Z" fill="#DD936F"/>
<path d="M245.428 495.154C245.758 495.184 246.002 495.476 245.972 495.806C245.684 499 244.777 502.117 243.445 505.063C242.873 506.33 242.26 507.48 241.645 508.493C241.484 508.76 241.33 509.003 241.187 509.221L240.884 509.671C240.855 509.712 240.832 509.745 240.814 509.769C240.618 510.037 240.243 510.095 239.975 509.9C239.708 509.704 239.649 509.328 239.845 509.061L240.052 508.762C240.223 508.508 240.413 508.21 240.619 507.87C241.209 506.897 241.8 505.789 242.352 504.569C243.631 501.737 244.502 498.746 244.777 495.698C244.804 495.401 245.043 495.174 245.331 495.154L245.428 495.154Z" fill="#DD936F"/>
<path d="M249.555 493.061C249.55 492.73 249.815 492.457 250.147 492.453C250.445 492.448 250.695 492.663 250.746 492.947L250.755 493.044L250.754 493.189L250.741 493.504C250.7 494.185 250.561 495.178 250.264 496.463C249.661 499.069 248.572 502.046 246.877 505.354C246.726 505.649 246.365 505.766 246.07 505.615C245.775 505.464 245.658 505.102 245.809 504.807C247.459 501.587 248.514 498.702 249.095 496.193C249.27 495.437 249.39 494.762 249.466 494.17L249.499 493.881C249.53 493.596 249.546 493.374 249.552 493.217L249.555 493.061Z" fill="#DD936F"/>
<path fillRule="evenodd" clipRule="evenodd" d="M259.694 448.222C273.466 449.3 306.154 536.333 318.503 567.454C316.859 573.722 306.814 584.778 306.814 584.778C306.814 584.778 307.89 589.769 308.551 592.767C296.8 602.433 274.069 607.683 274.069 607.683L274.02 611.971C237.677 628.703 189.013 612.666 189.013 612.666C189.013 612.666 188.107 611.737 188.758 608.375C172.258 608.183 136.927 587.25 136.927 587.25L141.947 576.892L127.416 562.02C127.416 562.02 166.657 489.829 178.736 469.637C189.34 451.912 199.286 446.807 199.286 446.807C199.286 446.807 235.257 446.307 259.694 448.222Z" fill="#4E5C93"/>
<path d="M196.97 463.853C197.119 463.55 197.485 463.424 197.789 463.573C198.062 463.706 198.192 464.017 198.106 464.299L198.07 464.392L138.317 586.459L138.663 586.715L139.344 587.205C140.525 588.043 141.916 588.977 143.509 589.984C148.066 592.864 153.325 595.744 159.214 598.433C168.371 602.614 178.196 605.935 188.571 608.078C188.902 608.147 189.115 608.471 189.047 608.802C188.978 609.133 188.655 609.346 188.323 609.278C177.854 607.115 167.942 603.764 158.706 599.547C152.764 596.834 147.457 593.927 142.855 591.019C141.422 590.114 140.149 589.265 139.043 588.491L138.636 588.204C138.3 587.965 137.999 587.747 137.736 587.553L137.168 587.125C136.969 586.97 136.889 586.71 136.957 586.474L136.996 586.374L196.97 463.853Z" fill="#253368"/>
<path d="M269.569 488.661C269.853 488.553 270.168 488.672 270.315 488.927L270.358 489.017L309.73 593.169C309.832 593.437 309.733 593.74 309.494 593.897L309.212 594.078C308.983 594.223 308.713 594.391 308.404 594.58C307.521 595.119 306.496 595.718 305.339 596.364C302.036 598.206 298.336 600.048 294.328 601.768C287.788 604.573 281.073 606.771 274.346 608.131C274.015 608.198 273.692 607.983 273.625 607.652C273.558 607.321 273.772 606.998 274.104 606.931C280.742 605.589 287.378 603.416 293.845 600.643C297.813 598.941 301.475 597.117 304.742 595.294C305.722 594.748 306.605 594.235 307.385 593.766L308.191 593.273L308.409 593.137L269.213 489.45C269.105 489.166 269.223 488.851 269.479 488.704L269.569 488.661Z" fill="#253368"/>
<path d="M243.989 450.548C244.32 450.482 244.643 450.697 244.709 451.029L247.06 462.895C247.868 466.993 248.729 471.381 249.634 476.017L250.132 478.569C253.618 496.45 257.104 514.632 260.419 532.327L262.062 541.13C262.642 544.254 263.213 547.338 263.772 550.379L265.618 560.469C269.269 580.558 272.314 598.11 274.616 612.486C274.663 612.78 274.491 613.066 274.209 613.162C272.427 613.768 270.623 614.329 268.798 614.846C246.789 621.077 223.312 620.725 201.14 616.392C197.893 615.757 194.938 615.08 192.317 614.4L191.669 614.23C190.973 614.046 190.338 613.87 189.766 613.707L188.767 613.414C188.51 613.337 188.324 613.279 188.213 613.243C187.95 613.158 187.781 612.91 187.788 612.641L187.801 612.54L215.201 475.208C215.267 474.876 215.59 474.661 215.921 474.727C216.22 474.787 216.424 475.054 216.414 475.349L216.402 475.448L189.109 612.237L189.457 612.342C190.176 612.554 191.02 612.791 191.983 613.047C194.736 613.777 197.885 614.508 201.375 615.19C223.374 619.49 246.668 619.839 268.464 613.667C269.818 613.284 271.159 612.876 272.489 612.444L273.325 612.165L272.635 607.91C270.233 593.217 267.136 575.558 263.473 555.531L262.147 548.312C261.864 546.782 261.579 545.24 261.292 543.689L260.858 541.354C257.605 523.847 254.153 505.72 250.672 487.764L248.432 476.251C247.363 470.774 246.355 465.642 245.424 460.925L243.509 451.269C243.442 450.937 243.657 450.614 243.989 450.548Z" fill="#253368"/>
<path d="M229.4 452.895C229.704 452.913 229.944 453.149 229.975 453.442L229.977 453.542L223.537 567.758C223.518 568.095 223.229 568.354 222.891 568.336C222.588 568.318 222.348 568.082 222.317 567.789L222.315 567.689L228.755 453.473C228.774 453.135 229.063 452.877 229.4 452.895Z" fill="#253368"/>
<path d="M212.269 450.377C212.369 450.055 212.712 449.874 213.035 449.974C213.326 450.065 213.501 450.352 213.46 450.643L213.438 450.741L189.26 528.585C189.16 528.908 188.817 529.089 188.494 528.988C188.203 528.898 188.028 528.611 188.069 528.319L188.091 528.222L212.269 450.377Z" fill="#253368"/>
<path fillRule="evenodd" clipRule="evenodd" d="M196.656 448.22L197.693 440.348C197.693 440.348 228.776 440.534 259.261 439.007C260.032 442.501 260.916 448.79 260.916 448.79C258.353 446.685 230.662 452.833 196.656 448.22Z" fill="#4E5C93"/>
<path d="M257.643 448.178C257.981 448.162 258.267 448.423 258.283 448.761C258.299 449.098 258.038 449.385 257.7 449.401L254.537 449.543C241.392 450.109 228.695 450.353 217.386 450.331L214.04 450.316C210.557 450.291 207.435 450.24 204.902 450.17L202.945 450.109C202.08 450.077 201.367 450.044 200.845 450.012L200.264 449.97C200.187 449.963 200.12 449.956 200.064 449.949C199.954 449.936 199.876 449.923 199.805 449.902L199.758 449.896C199.7 449.882 199.65 449.829 199.4 449.562L199.473 449.158C199.554 448.733 199.59 448.73 199.769 448.712C199.896 448.668 200.029 448.669 200.149 448.706L200.22 448.734L200.621 448.77L201.339 448.814C201.718 448.834 202.167 448.854 202.678 448.873L204.019 448.92C207.133 449.016 211.313 449.084 216.04 449.102L218.75 449.108C230.607 449.109 243.924 448.82 257.643 448.178Z" fill="#253368"/>
<path fillRule="evenodd" clipRule="evenodd" d="M275.51 297.551C275.51 297.551 289.977 303.456 282.006 317.627C282.006 317.627 314.275 348.293 289.939 374.15C286.397 387.729 255.731 382.774 255.731 382.774C255.731 382.774 242.887 398.275 221.189 386.318C197.274 398.275 185.318 374.804 185.318 374.804C185.318 374.804 160.962 370.375 167.606 348.676C154.571 331.562 171.302 323.957 171.302 323.957C171.302 323.957 163.697 307.226 181.949 298.1C178.849 287.029 192.596 278.327 192.596 278.327C194.368 259.56 206.715 243.909 218.974 245.493C218.974 245.493 247.351 231.176 262.561 269.201C275.998 279.949 278.609 287.365 275.51 297.551Z" fill="#253368"/>
<path fillRule="evenodd" clipRule="evenodd" d="M261.34 290.17C259.127 294.939 254.284 297.853 250.513 296.102C246.741 294.353 245.479 289.068 247.692 284.299C249.903 279.53 254.757 277.084 258.527 278.833C262.299 280.584 263.553 285.401 261.34 290.17Z" fill="#FFC999"/>
<path fillRule="evenodd" clipRule="evenodd" d="M228.717 342.476C220.841 342.476 214.539 335.94 214.825 328.071L215.875 299.277H241.558L242.608 328.071C242.894 335.94 236.592 342.476 228.717 342.476Z" fill="#FFC999"/>
<path fillRule="evenodd" clipRule="evenodd" d="M253.516 285.793C252.377 302.875 245.987 318.808 227.979 318.808C211.447 318.808 203.179 303.356 203.179 286.236C203.179 262.323 214.282 253.664 227.979 253.664C241.675 253.664 255.139 261.436 253.516 285.793Z" fill="#FFC999"/>
<path d="M212.463 279.273C215.948 278.413 219.444 278.051 222.859 278.453C223.328 278.508 223.664 278.934 223.609 279.404C223.554 279.873 223.128 280.209 222.659 280.154C219.475 279.78 216.175 280.121 212.873 280.936C212.144 281.116 211.529 281.288 210.84 281.498L209.642 281.866C209.403 281.93 209.332 281.943 209.117 281.893L208.984 281.855C208.795 281.793 208.749 281.716 208.47 281.251L208.481 280.916C208.494 280.699 208.52 280.665 208.615 280.541L208.745 280.399C208.78 280.363 208.798 280.351 208.838 280.323C208.966 280.23 209.111 280.178 209.257 280.164L209.374 280.16L209.792 280.03C210.746 279.729 211.51 279.508 212.463 279.273Z" fill="#253368"/>
<path d="M235.085 278.195C239.242 277.007 243.122 277.524 246.522 279.106C247.778 279.69 248.683 280.281 249.186 280.691C249.552 280.99 249.606 281.529 249.307 281.896C249.008 282.262 248.469 282.317 248.102 282.017L247.93 281.887C247.829 281.813 247.694 281.72 247.528 281.611C247.032 281.288 246.453 280.963 245.8 280.659C242.749 279.239 239.281 278.777 235.555 279.841C235.101 279.971 234.627 279.708 234.497 279.253C234.367 278.798 234.63 278.324 235.085 278.195Z" fill="#253368"/>
<path d="M214.802 285.969C215.275 285.971 215.657 286.355 215.655 286.828C215.648 289.177 216.997 291.002 218.524 291.007C220.052 291.012 221.412 289.196 221.42 286.847C221.422 286.374 221.806 285.992 222.279 285.994C222.752 285.995 223.134 286.38 223.133 286.853C223.122 290.056 221.12 292.729 218.518 292.72C215.917 292.712 213.932 290.026 213.943 286.823C213.944 286.35 214.329 285.968 214.802 285.969Z" fill="#253368"/>
<path d="M236.945 285.969C237.418 285.971 237.8 286.355 237.799 286.828C237.791 289.177 239.14 291.002 240.668 291.007C242.195 291.012 243.556 289.196 243.564 286.847C243.565 286.374 243.95 285.992 244.423 285.994C244.896 285.995 245.278 286.38 245.276 286.853C245.266 290.056 243.264 292.729 240.662 292.72C238.061 292.712 236.076 290.026 236.086 286.823C236.088 286.35 236.472 285.968 236.945 285.969Z" fill="#253368"/>
<path d="M234.75 300.377C235.166 300.204 235.645 300.401 235.818 300.818C235.991 301.234 235.794 301.712 235.378 301.885C235.096 302.003 234.811 302.111 234.523 302.209C231.276 303.321 227.84 303.251 224.595 302.472C224.18 302.372 223.796 302.266 223.448 302.159L223.193 302.079C222.941 301.996 222.76 301.931 222.659 301.891C222.239 301.724 222.034 301.25 222.201 300.83C222.367 300.411 222.842 300.206 223.261 300.372L223.471 300.449C223.535 300.471 223.612 300.497 223.699 300.526C224.072 300.647 224.501 300.769 224.977 300.883C227.945 301.597 231.083 301.66 233.993 300.664C234.249 300.576 234.501 300.481 234.75 300.377Z" fill="#F5222D"/>
<path d="M241.329 314.197C241.702 313.906 242.24 313.973 242.53 314.347C242.821 314.72 242.754 315.258 242.38 315.548L242.098 315.757C241.904 315.894 241.651 316.065 241.34 316.262C240.522 316.78 239.585 317.298 238.542 317.78C232.37 320.636 225.631 321.039 219.004 317.395C218.59 317.167 218.439 316.646 218.666 316.232C218.894 315.817 219.415 315.666 219.829 315.894C225.918 319.242 232.103 318.873 237.823 316.226C238.795 315.776 239.666 315.295 240.423 314.815L240.867 314.525C241.08 314.382 241.235 314.27 241.329 314.197Z" fill="#D18888"/>
<path fillRule="evenodd" clipRule="evenodd" d="M257.059 280.922C257.059 280.922 254.844 292.731 252.779 293.616C253.959 289.484 252.482 276.198 251.893 275.017C251.302 273.836 256.911 272.655 257.059 280.922Z" fill="#4E5C93"/>
<path d="M232.193 280.916C232.356 280.472 232.848 280.243 233.292 280.406C233.702 280.556 233.928 280.987 233.832 281.401L233.802 281.504L232.385 285.373L233.036 296.383C233.061 296.807 232.773 297.178 232.369 297.269L232.266 297.286L227.983 297.715C227.512 297.762 227.093 297.419 227.046 296.948C227.002 296.514 227.291 296.123 227.706 296.028L227.812 296.011L231.277 295.663L230.666 285.297C230.661 285.219 230.667 285.141 230.684 285.065L230.716 284.953L232.193 280.916Z" fill="#D18888"/>
<path fillRule="evenodd" clipRule="evenodd" d="M150.749 436.018C143.837 432.57 141.029 424.171 144.477 417.26L178.08 349.901C181.527 342.989 189.927 340.182 196.839 343.63C203.752 347.078 206.558 355.477 203.111 362.388L169.508 429.746C166.058 436.659 157.661 439.466 150.749 436.018Z" fill="#FFC999"/>
<path fillRule="evenodd" clipRule="evenodd" d="M188.866 390.942L203.111 362.389C206.545 355.505 203.723 347.063 196.838 343.63C189.955 340.196 181.514 343.019 178.079 349.901L163.971 378.184L188.866 390.942Z" fill="#597EF7"/>
<path d="M196.767 343.594C196.887 343.355 197.177 343.258 197.416 343.378C204.439 346.881 207.375 355.417 204.05 362.483L203.904 362.785L189.66 391.338C189.553 391.552 189.309 391.652 189.088 391.586L189.007 391.553L164.111 378.795C163.873 378.673 163.779 378.381 163.901 378.144C164.009 377.932 164.252 377.835 164.471 377.901L164.552 377.934L189.012 390.468L203.038 362.353C206.305 355.806 203.708 347.798 197.275 344.392L196.984 344.243C196.745 344.124 196.648 343.833 196.767 343.594Z" fill="#4E5C93"/>
<path fillRule="evenodd" clipRule="evenodd" d="M323.125 431.036C329.298 426.39 330.534 417.621 325.888 411.45L280.618 351.31C275.972 345.14 267.203 343.903 261.032 348.55C254.86 353.195 253.624 361.963 258.269 368.135L303.541 428.274C308.186 434.445 316.955 435.681 323.125 431.036Z" fill="#FFC999"/>
<path fillRule="evenodd" clipRule="evenodd" d="M277.46 393.629L258.27 368.135C253.643 361.989 254.885 353.175 261.032 348.549C267.177 343.922 275.991 345.165 280.618 351.311L299.625 376.563L277.46 393.629Z" fill="#597EF7"/>
<path d="M260.419 348.406C260.632 348.245 260.936 348.288 261.096 348.502C261.257 348.715 261.214 349.018 261.001 349.179C255.159 353.575 253.906 361.893 258.132 367.81L258.334 368.086L277.23 393.19L299.008 376.423C299.197 376.278 299.457 376.293 299.628 376.447L299.687 376.511C299.832 376.699 299.817 376.96 299.663 377.13L299.599 377.19L277.433 394.255C277.244 394.401 276.98 394.384 276.811 394.228L276.752 394.163L257.561 368.668C252.774 362.309 254.059 353.192 260.419 348.406Z" fill="#4E5C93"/>
<path fillRule="evenodd" clipRule="evenodd" d="M271.857 345.668C259.742 340.927 250.493 341.91 246.527 338.345C244.181 336.237 243.372 326.26 243.372 326.26H214.119C214.119 326.26 213.311 336.237 210.966 338.345C206.999 341.91 197.733 337.414 186.803 343.335C176.486 348.926 181.509 366.612 186.231 379.307C187.323 382.242 185.44 387.774 187.265 391.855C189.101 395.96 191.892 400.932 192.998 403.589C196.636 412.318 195.89 421.723 198.238 429.642C198.238 429.642 194.498 436.876 200.401 439.812H257.093C264.172 436.581 259.256 429.642 259.256 429.642C261.496 422.085 260.135 415.988 263.457 404.919C264.12 402.704 266.619 399.195 268.747 394.512C272.069 387.205 270.519 380.193 270.961 378.421C274.843 362.897 282.36 349.78 271.857 345.668Z" fill="#597EF7"/>
<path d="M219.006 339.157L238.399 339.313C238.724 339.316 238.987 339.582 238.984 339.908C238.982 340.202 238.766 340.443 238.485 340.487L238.389 340.494L218.996 340.337C218.67 340.334 218.408 340.068 218.411 339.742C218.413 339.449 218.629 339.207 218.91 339.164L219.006 339.157Z" fill="#A3B5D6"/>
<path d="M191.458 361.747C191.699 361.862 191.802 362.15 191.687 362.391L191.593 362.596L191.496 362.816C191.372 363.1 191.236 363.421 191.091 363.78L190.981 364.055C190.447 365.402 189.912 366.929 189.413 368.605C187.605 374.678 186.731 381.011 187.304 387.159C187.763 392.094 189.381 396.089 193.324 402.56L193.632 403.063L193.696 403.232L194.448 407.456L195.179 411.513C195.423 412.854 195.665 414.178 195.903 415.469L196.874 420.656C197.72 425.104 198.355 428.202 198.705 429.519C198.737 429.641 198.721 429.77 198.659 429.88C196.458 433.797 198.059 438.792 200.274 439.305L200.4 439.329L257.157 439.329L257.302 439.241L257.478 439.121C257.806 438.889 258.135 438.596 258.443 438.241C260.067 436.369 260.461 433.644 258.812 429.835C258.773 429.746 258.762 429.647 258.78 429.552L259.2 427.354C260.367 421.193 261.351 415.606 262.16 410.663L262.46 408.81C262.586 408.023 262.703 407.283 262.809 406.593L263.087 404.759L263.221 403.841L263.302 403.633C268.056 396.742 270.146 391.282 270.478 385.185C270.78 379.628 269.765 374.104 267.887 368.905C267.308 367.305 266.689 365.855 266.07 364.583L265.818 364.076C265.737 363.916 265.659 363.765 265.584 363.623L265.316 363.131C265.289 363.083 265.268 363.046 265.253 363.019C265.117 362.789 265.194 362.493 265.424 362.357C265.654 362.222 265.951 362.298 266.086 362.529L266.261 362.839L266.325 362.957C266.51 363.301 266.717 363.703 266.939 364.159C267.573 365.461 268.206 366.942 268.796 368.576C270.716 373.888 271.754 379.538 271.444 385.238C271.11 391.37 269.054 396.871 264.457 403.658L264.162 404.087L263.919 405.739L263.683 407.268C263.516 408.343 263.327 409.528 263.115 410.82L262.669 413.5C261.899 418.067 260.992 423.126 259.942 428.628L259.757 429.59L259.844 429.794C261.422 433.656 261.017 436.606 259.327 438.693L259.174 438.875C258.615 439.519 258.053 439.943 257.628 440.176L257.492 440.247L257.28 440.296L200.329 440.291C197.341 439.842 195.406 434.336 197.569 429.879L197.721 429.58L197.573 428.969C197.216 427.444 196.688 424.838 196.022 421.354L195.189 416.925L194.471 413.021C194.228 411.692 193.984 410.341 193.739 408.985L192.759 403.49L192.495 403.058C188.586 396.644 186.903 392.569 186.38 387.64L186.341 387.249C185.755 380.963 186.645 374.511 188.486 368.329C188.994 366.625 189.537 365.071 190.082 363.699L190.304 363.148C190.376 362.974 190.445 362.809 190.512 362.654L190.813 361.976C190.928 361.735 191.216 361.632 191.458 361.747Z" fill="#4E5C93"/>
<path d="M262.547 389.004C262.814 389.004 263.031 389.22 263.031 389.487C263.031 389.725 262.86 389.922 262.634 389.963L262.547 389.971H192.58C192.313 389.971 192.096 389.754 192.096 389.487C192.096 389.25 192.267 389.052 192.493 389.011L192.58 389.004H262.547Z" fill="#4E5C93"/>
<path d="M210.367 337.997C210.618 337.823 210.952 337.862 211.157 338.075L211.22 338.152L228.489 363.13L246.534 338.58C246.715 338.335 247.043 338.263 247.306 338.397L247.391 338.449C247.637 338.63 247.709 338.959 247.574 339.221L247.522 339.306L228.967 364.549C228.739 364.86 228.292 364.879 228.034 364.614L227.969 364.534L210.212 338.849C210.019 338.571 210.089 338.189 210.367 337.997Z" fill="#E4EBF7"/>
<path fillRule="evenodd" clipRule="evenodd" d="M238.437 373.299C238.437 378.923 233.877 383.483 228.252 383.483C222.626 383.483 218.066 378.923 218.066 373.299C218.066 367.674 222.626 363.113 228.252 363.113C233.877 363.113 238.437 367.674 238.437 373.299Z" fill="#E4EBF7"/>
<path fillRule="evenodd" clipRule="evenodd" d="M235.607 373.299C235.607 377.36 232.314 380.653 228.252 380.653C224.191 380.653 220.898 377.36 220.898 373.299C220.898 369.238 224.191 365.945 228.252 365.945C232.314 365.945 235.607 369.238 235.607 373.299Z" fill="#FFC2BD"/>
<path fillRule="evenodd" clipRule="evenodd" d="M244.949 371.377H225.407C223.823 371.377 222.528 370.119 222.477 368.538L221.142 326.44C221.089 324.783 222.418 323.413 224.073 323.413H246.284C247.939 323.413 249.267 324.783 249.215 326.44L247.88 368.538C247.829 370.119 246.532 371.377 244.949 371.377Z" fill="#4E5C93"/>
<path fillRule="evenodd" clipRule="evenodd" d="M226.321 363.954C229.189 367.169 229.022 372.071 225.941 375.083L166.461 433.223C160.818 438.387 152.045 437.942 146.952 432.236C141.816 426.479 142.432 417.62 148.315 412.63L215.51 362.845C218.859 360.362 223.547 360.845 226.321 363.954Z" fill="#FFC999"/>
<path fillRule="evenodd" clipRule="evenodd" d="M230.64 378.191C230.64 378.191 217.417 381.264 212.918 374.643C208.841 368.647 214.332 363.862 214.332 363.862C214.332 363.862 219.037 358.239 226.263 354.47C231.024 351.986 240.556 348.184 242.198 350.506C244.338 353.538 233.301 357.214 234.117 359.787C234.957 362.429 237.295 361.838 243.05 362.242C246.647 362.496 250.293 361.33 253.302 362.125C259.185 363.683 250.86 375.238 230.64 378.191Z" fill="#FFC999"/>
<path d="M254.58 364.157C254.887 364.031 255.237 364.178 255.363 364.484C255.489 364.791 255.342 365.142 255.035 365.267C249.299 367.619 243.995 367.968 239.592 367.151C239.232 367.084 238.906 367.013 238.615 366.941L238.404 366.887C238.195 366.832 238.048 366.788 237.968 366.761C237.654 366.655 237.485 366.315 237.59 366.001C237.696 365.687 238.036 365.518 238.35 365.623L238.609 365.7L238.711 365.727C239.023 365.81 239.391 365.893 239.811 365.971C244.001 366.748 249.073 366.414 254.58 364.157Z" fill="#DD936F"/>
<path d="M251.701 369.237C251.77 369.561 251.564 369.88 251.24 369.949L250.852 370.025C250.764 370.042 250.665 370.059 250.555 370.079C250.01 370.174 249.385 370.269 248.691 370.358C244.984 370.832 240.958 370.938 236.948 370.446C236.619 370.406 236.385 370.107 236.425 369.778C236.465 369.449 236.765 369.215 237.094 369.255C240.994 369.733 244.924 369.63 248.539 369.168C249.214 369.081 249.821 368.989 250.348 368.897L250.988 368.776C251.313 368.706 251.632 368.913 251.701 369.237Z" fill="#DD936F"/>
<path d="M245.579 372.115C245.899 372.03 246.228 372.22 246.314 372.54C246.399 372.86 246.209 373.189 245.889 373.275C240.87 374.616 236.924 374.897 234.109 374.569L233.686 374.512C233.527 374.488 233.406 374.465 233.325 374.446C233.002 374.372 232.801 374.05 232.875 373.727C232.949 373.404 233.271 373.202 233.594 373.277L233.788 373.313C233.874 373.328 233.982 373.344 234.111 373.36L234.248 373.377C236.913 373.687 240.707 373.418 245.579 372.115Z" fill="#DD936F"/>
<path d="M198.416 374.324C198.681 374.125 199.057 374.178 199.256 374.443C199.433 374.678 199.411 375.001 199.218 375.21L199.137 375.283L154.172 409.114C153.907 409.313 153.531 409.26 153.332 408.996C153.155 408.76 153.177 408.437 153.37 408.228L153.45 408.155L198.416 374.324Z" fill="#DD936F"/>
<path fillRule="evenodd" clipRule="evenodd" d="M186.647 311.478C190.409 295.678 195.504 280.922 195.504 280.922C201.573 257.79 208.347 247.266 232.701 248.151C257.059 249.038 270.357 280.646 258.303 283.586C240.147 288.015 238.423 278.884 232.998 269.389C229.456 263.189 227.469 264.891 226.059 267.078C225.153 268.484 223.29 270.904 219.712 268.701C215.875 266.339 210.294 268.438 210.819 277.864C211.557 291.15 208.112 289.283 209.327 296.58C210.568 304.017 219.589 301.795 216.932 313.311C216.932 313.311 224.509 317.595 211.223 326.896C200.455 334.434 184.433 320.777 186.647 311.478Z" fill="#253368"/>
</svg>
    </div>
    <div>      
    <img className={s.diamantitos} src={diamantess} />
      </div>
    <div className={s.divBox}>
   <div className={s.textBox}>
   
    <h2>{userDetail.name+ ' '}{userDetail.lastName
    }</h2>
    {/* [0].toUpperCase()+ userDetail.name.slice(1) + ' '//[0].toUpperCase()+ userDetail.lastName.slice(1)} */}
      <br/>
    <div className={s.imageBox} >
      {/* <img >{userDetail?.profilePicture}</img> */}

      { userDetail.profilePicture ? (
              <img className={s.imgRender} />
            ) : (
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
              </svg>
            )}

      </div>
      <br/>
      <span className={s.mail}> 
      {/* <i class='bx bxs-gmail bx-border-circle'></i> */}
      <box-icon border='circle' animation ="tada" color= "white" type='logo' name='gmail'></box-icon>
      Email: </span> 
    <span>{userDetail.email}</span>
    <br/>
    <br/>
    <box-icon  name='code-alt' color="white"></box-icon>
    <span> Lenguajes: </span>
    <span>{userDetail.lenguajes?.map(e=>e)}</span>
    <br/>
    <br/>
    <box-icon color="white" name='donate-heart'></box-icon>
           <span> Servicios: </span>
    <span>{userDetail.servicios?.map(s=>s)}</span>
    <br/>
    <br/>
    <box-icon  color="white" name='linkedin' type='logo' ></box-icon>
    <a> LinkedIn: </a>
    <span>{userDetail.linkedIn}</span>
    <br/>
    <br/>
    <box-icon color="white" name='mouse'></box-icon>
    <span> Tecnologias: </span>
    <span>{userDetail.tecnologias?.map(t=>t)}</span>
    <br/>
    <br/>
    <box-icon name='world' color="white" ></box-icon>
    <span> Pais: </span>
    <span>{userDetail.paiseId}</span>
    <br/>
    <br/>
    <box-icon name='planet' animation ="flashing" color="white"></box-icon>
    <span> Sitio Web: </span>
    <span>{userDetail.webSite}</span>
    <br/>
    <span>Años de Experiencia: </span>
    <span>{userDetail.yearsOfExperience}</span>
    <br/>
    <span>Presupuesto por día: </span>
    <span>{userDetail.dailyBudget}</span>
    </div>
    <div>
      <Link to = ''>
    <button className={s.buttonL}
    onClick = {(e) => {handleContact(e)}}
    disabled = {disabled}
    >Contactame!</button>
    
    </Link>
    </div>
    </div>
  </div>
  </div>
  )
}
