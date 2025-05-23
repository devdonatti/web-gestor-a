import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Catalogo = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // <--- Aquí está el cambio
    });
  }, []);

  const productos = [
    {
      id: 1,
      imagen: "/formu.png",
      titulo: "Formularios",
      descripcion: "",
      link: "https://mpago.la/2W3wyQM",
    },
    {
      id: 2,
      imagen: "/inf.png",
      titulo: "Informes",
      descripcion: "",
      link: "https://www.mercadopago.com.ar/link-del-producto2",
    },
    {
      id: 3,
      imagen: "/serv.png",
      titulo: "Servicios",
      descripcion: "",
      link: "https://www.mercadopago.com.ar/link-del-producto3",
    },
  ];

  return (
    <div className="py-10">
      <h1
        id="catalogo"
        className="text-3xl md:text-3xl font-bold  text-center mb-10 font-montserrat text-white uppercase"
      >
        Comprá
      </h1>

      {/* Contenedor de las tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {productos.map((producto, index) => (
          <div
            key={producto.id}
            data-aos="fade-up"
            data-aos-delay={index * 150} // 0ms, 150ms, 300ms, etc.
            className="bg-white rounded-lg text-center shadow-lg p-6 transition transform hover:scale-105 hover:shadow-2xl duration-300"
          >
            {/* Imagen del producto */}
            <img
              src={producto.imagen}
              alt={producto.titulo}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            {/* Título y descripción del producto */}
            <h2 className="text-xl font-bold text-blue-800 mb-2">
              {producto.titulo}
            </h2>
            <p className="text-base text-gray-700 mb-4">
              {producto.descripcion}
            </p>
            {/* Botón que redirige a Mercado Pago */}
            <Link
              to="/productos"
              className="text-blue-700 font-bold py-2 px-4 rounded-full bg-gray-400 hover:bg-gray-500"
            >
              Comprar ahora
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/productos">
          <button className="bg-blue-800 mt-5 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300">
            Ver más
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Catalogo;
