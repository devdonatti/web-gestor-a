import React from "react";
import { GlareCard } from "../components/ui/Card";

const Hero = () => {
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
        <GlareCard className="p-6 text-blue-900 text-center">
          <div className="flex justify-center items-center w-full h-full">
            <img
              className="w-40 h-40 sm:w-56 sm:h-56 object-contain"
              src="logo.png"
              alt="Logo"
            />
          </div>
        </GlareCard>
      </div>

      {/* Título y subtítulo debajo de la card */}
      <div className="absolute inset-x-0 bottom-0 mb-6 z-10 text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-montserrat text-white hover:text-gray-300 transition-all duration-300">
          GESTORÍA CISNEROS
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-montserrat text-white">
          Somos una gestoría comprometida a resolver tus problemas registrales.
        </p>
      </div>
    </div>
  );
};

export default Hero;
