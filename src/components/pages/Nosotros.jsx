import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Nosotros = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación en ms
      easing: "ease-in-out", // tipo de easing
      once: false, // si se repite la animación cada vez que se hace scroll
    });
  }, []);

  return (
    <div className="relative py-10">
      {/* Imagen de fondo */}
      <img
        src="/fondo.png"
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Título */}
      <h1
        id="nosotros"
        data-aos="fade-down"
        className="text-3xl md:text-3xl uppercase font-bold mb-8 font-montserrat text-white text-center z-10 relative"
      >
        Nosotros
      </h1>

      {/* Card decorada */}
      <div
        data-aos="fade-up"
        className="max-w-3xl mx-4 sm:mx-auto bg-white rounded-lg shadow-xl p-8 z-10 relative"
      >
        <p className="text-base md:text-lg font-montserrat text-gray-700 leading-relaxed text-justify">
          Somos un equipo de Gestores, más específicamente Mandatarios del
          automotor, con matrícula de alcance NACIONAL. Nuestra labor es la
          gestión de todos los trámites relacionados con bienes muebles
          registrables. Es decir, Automotores, Motovehículos, Buques y
          Maquinarias Agrícolas. Los mismos están registrados en los Registros
          de la propiedad automotor y créditos prendarios, organismo dependiente
          de la Dirección Nacional de Derechos Humanos y Créditos Prendarios.
          Todos los trámites que realizamos son en los Registros donde están
          radicados los vehículos.
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
