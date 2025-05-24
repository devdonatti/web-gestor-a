import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import productos from "../../data/productos.json";
import FormularioCompraModal from "../FormularioCompraModal";

const Productos = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tipoFiltrado = params.get("tipo"); // 'formularios', 'informes', etc.

  const abrirFormulario = (producto) => {
    setProductoSeleccionado(producto);
  };

  const cerrarFormulario = () => {
    setProductoSeleccionado(null);
  };

  const renderSeccion = (titulo, subtitulo, tipo) => (
    <section className="mb-20">
      <div className="text-center mb-10">
        <h1 className="inline-block text-2xl sm:text-3xl px-4 py-2 bg-gray-300 font-bold text-blue-800 font-montserrat rounded-md">
          {titulo}
        </h1>
        {subtitulo && <p className="text-lg text-gray-700 mt-2">{subtitulo}</p>}
        <div className="w-20 h-1 bg-blue-800 mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {productos
          .filter((p) => p.tipo === tipo)
          .map((producto) => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              onComprar={abrirFormulario}
            />
          ))}
      </div>
    </section>
  );

  return (
    <div className="pt-28 pb-16 bg-gray-100 min-h-screen">
      <div className="text-center mb-16 px-6">
        <h2 className="inline-block text-4xl sm:text-4xl px-4 py-2 bg-blue-800 font-bold text-white font-montserrat rounded-md leading-relaxed">
          ¿Sos gestor del automotor? <br /> ¿Necesitás formularios?
        </h2>
        <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto">
          Pedinos la lista de precios por WhatsApp o hacé tu compra directa.
          Vendemos por mayor, por unidad y hacemos envíos hasta la puerta de tu
          local.
        </p>
      </div>

      {!tipoFiltrado && (
        <>
          {renderSeccion(
            "Precio Mayorista o Mandatario",
            "Formularios para autos y motos",
            "mayorista"
          )}
          {renderSeccion(
            "Precio Particular",
            "Formularios por unidad para autos o motos",
            "particular"
          )}
          {renderSeccion("Informes Disponibles", null, "informe")}
          {renderSeccion("Servicios que Ofrecemos", null, "servicios")}
        </>
      )}

      {tipoFiltrado === "formularios" && (
        <>
          {renderSeccion(
            "Precio Mayorista o Mandatario",
            "Formularios para autos y motos",
            "mayorista"
          )}
          {renderSeccion(
            "Precio Particular",
            "Formularios por unidad para autos o motos",
            "particular"
          )}
        </>
      )}

      {tipoFiltrado === "informes" &&
        renderSeccion("Informes Disponibles", null, "informe")}
      {tipoFiltrado === "servicios" &&
        renderSeccion("Servicios que Ofrecemos", null, "servicios")}

      {productoSeleccionado && (
        <FormularioCompraModal
          producto={productoSeleccionado}
          onClose={cerrarFormulario}
        />
      )}
    </div>
  );
};

const ProductoCard = ({ producto, onComprar }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200 h-[420px]">
    <img
      src={producto.imagen}
      alt={producto.titulo}
      className="w-full h-40 sm:h-48 object-contain rounded-lg mb-4"
    />
    <h2 className="text-xl font-semibold text-blue-800 mb-2">
      {producto.titulo}
    </h2>
    <div className="text-sm text-gray-700 overflow-y-auto h-16 mb-4 px-1">
      {producto.descripcion}
    </div>
    <div className="mt-auto">
      <button
        onClick={() => onComprar(producto)}
        className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300"
      >
        Comprar Ahora
      </button>
    </div>
  </div>
);

export default Productos;
