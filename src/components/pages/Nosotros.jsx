import React from "react";

const Nosotros = () => {
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
        className="text-3xl md:text-3xl uppercase font-bold mb-8 font-montserrat text-white text-center z-10 relative"
      >
        Nosotros
      </h1>

      {/* Card decorada */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 z-10 relative">
        <p className="text-base md:text-lg font-montserrat text-gray-700 leading-relaxed">
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
