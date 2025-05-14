import React from "react";

const Productos = () => {
  const productos = [
    {
      id: 1,
      imagen: "/31.png",
      titulo: "Formulario 04",
      descripcion: "Descripción del producto 1",
      link: "https://mpago.la/2W3wyQM",
    },
    {
      id: 2,
      imagen: "/31.png",
      titulo: "Formulario 08",
      descripcion: "Descripción del producto 2",
      link: "https://www.mercadopago.com.ar/link-del-producto2",
    },
    {
      id: 3,
      imagen: "/31.png",
      titulo: "Formulario 02",
      descripcion: "Descripción del producto 3",
      link: "https://www.mercadopago.com.ar/link-del-producto3",
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold m-5 pt-7 text-center mb-10 font-montserrat text-white">
        Comprá tus formularios
      </h1>

      {/* Contenedor de las tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-2xl duration-300"
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
            <a
              href={producto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Comprar Ahora
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
