import React, { useEffect } from "react";
import { GlareCard } from "../components/ui/Card";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400, // Duración de la animación
      easing: "ease-in-out",
      once: true, // Solo anima una vez cuando entra en viewport
      mirror: false,
    });
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden pb-16">
      {/* Imagen de fondo */}
      <img
        src="/fondo.png"
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Card centrada con el logo */}
      <div id="inicio" className="z-10 flex justify-center items-center mt-10">
        <div className="flex justify-center items-center w-100 h-100">
          <img
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1400"
            className="w-100 h-100 sm:w-100 sm:h-100 object-contain"
            src="logo2.png"
            alt="Logo"
          />
        </div>
      </div>

      {/* Título y subtítulo animados suavemente */}
      <div className="absolute inset-x-0 bottom-0 mb-6 z-10 text-center px-4">
        <h2
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-duration="1400"
          className="text-4xl sm:text-3xl md:text-4xl font-bold mb-2 font-montserrat text-white hover:text-gray-300 transition-all duration-300"
        >
          GESTORÍA CISNEROS
        </h2>

        <p
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-duration="1600"
          data-aos-delay="200"
          className="text-sm p-3 sm:text-base md:text-lg font-montserrat text-white"
        >
          Somos una gestoría comprometida a resolver tus problemas registrales.
        </p>
      </div>
    </div>
  );
};

export default Hero;
