// components/ScrollToHashElement.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // le da tiempo a React para renderizar
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;
