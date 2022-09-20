import React, { useState } from "react";
import { useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import s from "./ScrollTop.module.css";

export default function ScrollTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300 && window.scrollY < 2000) {
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
        <FaAngleDoubleUp className={s.button} onClick={scrollTop} />
      )}
    </div>
  );
}
