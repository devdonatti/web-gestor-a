import React from "react";

const Servicios = () => {
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
        id="servicios"
        className="text-3xl md:text-3xl uppercase font-bold mb-8 font-montserrat text-white text-center z-10 relative"
      >
        Servicios
      </h1>

      {/* Tarjetas de servicios */}
      <div className="max-w-3xl  mb-6 mx-4 sm:mx-auto ">
        <div className="bg-white rounded-lg shadow-xl p-8 z-10 relative transition transform hover:scale-105 hover:shadow-2xl duration-300">
          <p className="text-base md:text-lg font-montserrat text-blue-800 leading-relaxed">
            <span className="text-xl font-bold">INSCRIPCIONES INICIALES</span>
          </p>
        </div>
      </div>

      <div className="max-w-3xl mb-6 mx-4 sm:mx-auto ">
        <div className="bg-white rounded-lg shadow-xl p-8 z-10 relative transition transform hover:scale-105 hover:shadow-2xl duration-300">
          <p className="text-base md:text-lg font-montserrat text-blue-800 leading-relaxed">
            <span className="text-xl font-bold">TRANSFERENCIAS AUTOMOTOR</span>
          </p>
        </div>
      </div>

      <div className="max-w-3xl  mb-6 mx-4 sm:mx-auto ">
        <div className="bg-white rounded-lg shadow-xl p-8 z-10 relative transition transform hover:scale-105 hover:shadow-2xl duration-300">
          <p className="text-base md:text-lg font-montserrat text-blue-800 leading-relaxed">
            <span className="text-xl font-bold">TRÁMITES VARIOS</span>
            <ul className="mt-4 list-disc pl-6">
              <li>Denuncia de venta</li>
              <li>Denuncia de compra y posesión</li>
              <li>Reposición de chapa metálica</li>
              <li>Alta/Baja de motor</li>
              <li>Alta/Baja de carrocería</li>
              <li>Baja por destrucción total</li>
              <li>Denuncia de robo</li>
              <li>Baja por exportación</li>
              <li>Regularización de deudas</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Botón de consulta */}
      <div className="flex justify-center mt-8 z-20 relative">
        <a
          className="bg-blue-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          href="https://wa.me/1150406299 "
        >
          CONSULTA via whatsapp
        </a>
      </div>
    </div>
  );
};

export default Servicios;
