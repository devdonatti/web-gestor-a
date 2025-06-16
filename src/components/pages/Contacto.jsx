import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, email, mensaje } = formData;

    const numeroWhatsApp = "5491150406299"; // ← Tu número de WhatsApp con código país, sin "+" ni espacios
    const texto = `¡Hola! Soy ${nombre} (%0AEmail: ${email}) y quiero consultarte lo siguiente:%0A%0A${mensaje}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

    window.open(url, "_blank");

    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div
      id="contacto"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold font-montserrat mb-8 p-4 leading-normal uppercase text-white">
        Contactame
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-9">
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full lg:my-3 my-4 rounded-lg bg-white p-4 border-2 border-gray-400 text-xl text-slate-500"
            placeholder="Nombre"
            type="text"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full lg:my-3 my-4 rounded-lg bg-white p-4 border-2 border-gray-400 text-xl text-slate-500"
            placeholder="Email"
            type="email"
            required
          />
        </div>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className="w-full my-3 rounded-lg bg-white p-4 border-2 border-gray-400 text-xl text-slate-500"
          placeholder="Escribe tu mensaje..."
          rows="5"
          required
        />
        <button className="shadow-xl hover:shadow-green-600 text-white border-2 border-gray-400 bg-gray-400 hover:bg-green-500 rounded-lg py-4 px-8 my-6 uppercase text-xl font-bold">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
