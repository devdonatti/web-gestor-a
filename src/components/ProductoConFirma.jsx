import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const ProductoConFirma = ({ producto }) => {
  const sigCanvas = useRef(null);
  const [firmado, setFirmado] = useState(false);

  const limpiarFirma = () => {
    sigCanvas.current.clear();
    setFirmado(false);
  };

  const confirmarFirma = () => {
    if (!sigCanvas.current.isEmpty()) {
      setFirmado(true);
    } else {
      alert("Por favor firmá antes de continuar.");
    }
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto my-4 bg-white">
      <img
        src={producto.imagen}
        alt={producto.titulo}
        className="w-full h-40 object-cover mb-2 rounded"
      />
      <h2 className="text-lg font-bold">{producto.titulo}</h2>
      <p className="text-sm text-gray-600 mb-2">{producto.descripcion}</p>

      <div className="border border-gray-300 mb-2">
        <SignatureCanvas
          penColor="black"
          canvasProps={{
            width: 300,
            height: 100,
            className: "sigCanvas bg-white",
          }}
          ref={sigCanvas}
        />
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={limpiarFirma}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Limpiar
        </button>
        <button
          onClick={confirmarFirma}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Confirmar Firma
        </button>
      </div>

      {firmado ? (
        <a
          href={producto.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-green-500 text-white px-4 py-2 rounded"
        >
          Ir a Pagar
        </a>
      ) : (
        <p className="text-sm text-red-600">Debés firmar para continuar</p>
      )}
    </div>
  );
};

export default ProductoConFirma;
