import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import emailjs from "emailjs-com";

const FormularioCompraModal = ({ producto, onClose }) => {
  const [exito, setExito] = useState(false);
  const [mostrarFirma, setMostrarFirma] = useState(false);
  const [formData, setFormData] = useState({
    producto: producto.titulo,
    nombre: "",
    dni: "",
    telefono: "",
    email: "",
    direccion: "",
    acepta: false,
    entrega: "Retiro en oficina",
  });

  const firmaRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormularioSubmit = (e) => {
    e.preventDefault();
    setMostrarFirma(true);
  };

  const handleFirmaSubmit = () => {
    if (firmaRef.current.isEmpty()) {
      alert("Por favor, realiza tu firma.");
      return;
    }

    const firmaDataURL = firmaRef.current.getCanvas().toDataURL("image/png");

    const templateParams = {
      ...formData,
      firma_imagen: firmaDataURL,
    };

    emailjs
      .send(
        "service_zr0fdhw",
        "template_tox9lvn",
        templateParams,
        "j_9tTIXVW-h70zlEw"
      )
      .then(() => {
        setExito(true);
        setTimeout(() => {
          window.location.href = producto.link;
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Ocurrió un error al enviar el formulario.");
      });
  };

  const limpiarFirma = () => {
    firmaRef.current.clear();
  };

  if (exito) {
    return (
      <div className="fixed inset-0 bg-gray-700 bg-opacity-60 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-xl text-center shadow-lg max-w-md w-full mx-4">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            ✅ ¡Pedido enviado!
          </h2>
          <p className="text-gray-700 mb-2">
            El formulario y la firma fueron enviados correctamente.
          </p>
          <p className="text-gray-500 text-sm">
            Serás redirigido a MercadoPago en unos segundos...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md mx-4 shadow-lg">
        {!mostrarFirma ? (
          <>
            <h2 className="text-xl text-center font-bold text-blue-800 mb-4">
              {producto.titulo}
            </h2>
            <form onSubmit={handleFormularioSubmit} className="space-y-4">
              <input type="hidden" name="producto" value={formData.producto} />
              <input
                name="nombre"
                placeholder="Nombre completo"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                value={formData.nombre}
                onChange={handleChange}
              />
              <input
                name="dni"
                placeholder="DNI"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                value={formData.dni}
                onChange={handleChange}
              />
              <input
                name="telefono"
                placeholder="Teléfono"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                value={formData.telefono}
                onChange={handleChange}
              />
              <input
                name="email"
                placeholder="Email"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="direccion"
                placeholder="Dirección (si aplica)"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                value={formData.direccion}
                onChange={handleChange}
              />
              <label className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  required
                  name="acepta"
                  checked={formData.acepta}
                  onChange={handleChange}
                  className="accent-blue-800"
                />
                <span>Acepto los términos y condiciones</span>
              </label>
              <label className="block text-sm text-gray-700">
                <span className="block mb-1 font-medium">Entrega:</span>
                <select
                  name="entrega"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                  value={formData.entrega}
                  onChange={handleChange}
                >
                  <option value="Retiro en oficina">Retiro en oficina</option>
                  <option value="Envío a domicilio">Envío a domicilio</option>
                </select>
              </label>
              <div className="flex justify-between mt-6">
                <button
                  type="submit"
                  className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Continuar a Firma
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-gray-600 hover:underline"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Firma Digital
            </h2>
            <p className="text-gray-700 mb-2 text-sm">
              Firmá dentro del recuadro con el dedo o mouse:
            </p>
            <div className="border-2 border-gray-300 rounded w-full h-36 overflow-hidden mb-4">
              <SignatureCanvas
                penColor="black"
                canvasProps={{
                  className: "w-full h-full",
                }}
                ref={firmaRef}
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={limpiarFirma}
                className="text-sm text-blue-800 underline"
              >
                Borrar Firma
              </button>
              <button
                onClick={() => setMostrarFirma(false)}
                className="text-gray-600 hover:underline text-sm"
              >
                Volver
              </button>
            </div>
            <button
              onClick={handleFirmaSubmit}
              className="w-full bg-blue-800 hover:bg-blue-700 text-white py-2 rounded transition"
            >
              Enviar y Pagar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FormularioCompraModal;
