import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Servicios = () => {
  const servicios = [
    {
      title: "INSCRIPCIONES INICIALES",
      items: [],
    },
    {
      title: "TRANSFERENCIAS AUTOMOTOR",
      items: [],
    },
    {
      title: "TRÁMITES VARIOS",
      items: [
        "Denuncia de venta",
        "Denuncia de compra y posesión",
        "Reposición de chapa metálica",
        "Alta/Baja de motor",
        "Alta/Baja de carrocería",
        "Baja por destrucción total",
        "Denuncia de robo",
        "Baja por exportación",
        "Regularización de deudas",
      ],
    },
  ];

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

      {/* Tarjetas de servicios animadas */}
      {servicios.map((servicio, i) => (
        <motion.div
          key={i}
          className="max-w-3xl mb-6 mx-4 sm:mx-auto"
          custom={i}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ amount: 0.3 }} // <--- esto permite reanimar al hacer scroll
        >
          <div className="bg-white rounded-lg shadow-xl p-8 z-10 relative transition transform hover:scale-105 hover:shadow-2xl duration-300">
            <p className="text-base md:text-lg font-montserrat text-blue-800 leading-relaxed">
              <span className="text-xl font-bold">{servicio.title}</span>
              {servicio.items.length > 0 && (
                <ul className="mt-4 list-disc pl-6">
                  {servicio.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </p>
          </div>
        </motion.div>
      ))}

      {/* Botón de consulta */}
      <motion.div
        className="flex justify-center mt-8 z-20 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          className="bg-blue-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          href="https://wa.me/1150406299"
        >
          CONSULTA via whatsapp
        </a>
      </motion.div>
    </div>
  );
};

export default Servicios;
