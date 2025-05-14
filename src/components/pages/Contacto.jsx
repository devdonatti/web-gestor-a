import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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

    emailjs
      .send(
        "service_4lav619", // Reemplázalo con tu Service ID
        "template_4hn0c5n", // Reemplázalo con tu Template ID
        formData,
        "j_9tTIXVW-h70zlEw" // Reemplázalo con tu Public Key
      )
      .then(
        (response) => {
          alert("Mensaje enviado con éxito");
          setFormData({ nombre: "", email: "", mensaje: "" });
        },
        (error) => {
          alert("Error al enviar el mensaje");
          console.error("Error:", error);
        }
      );
  };

  return (
    <div
      id="contacto"
      className="p-4 lg:p-20 flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 to-gray-300"
    >
      <h1 className="text-4xl  font-bold font-montserrat mb-8 p-4 leading-normal uppercase text-white">
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
        <button className="shadow-xl hover:shadow-blue-800 text-white border-2 border-blue-700 bg-blue-800 hover:bg-gray-300 rounded-lg py-4 px-8 my-6 uppercase text-xl font-bold">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
