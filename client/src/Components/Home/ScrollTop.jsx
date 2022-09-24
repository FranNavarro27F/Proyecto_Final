import React, { useState } from "react";
import { useEffect } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
import { FaAngleDoubleUp } from "react-icons/fa";
import s from "./ScrollTop.module.css";

export default function ScrollTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 47 && window.scrollY < 1900) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    });
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollTop && (
        <BsChevronDoubleUp className={s.button} onClick={scrollTop} />
      )}
    </div>
  );
}
