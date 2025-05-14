import React from "react";
import {
  FaPhone,
  FaFacebook,
  FaVoicemail,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray text-white font-montserrat  shadow-xl">
      <div className="container mx-auto lg:px-24 px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="mb-4 md:mb-0 flex justify-center items-center md:justify-start">
          <img src="/logo.png" className=" h-24 w-auto" alt="Logo" />
        </div>
        {/* Servicios */}
        <div>
          <h2 className="text-lg font-semibold font-raleway text-white py-2 uppercase text-center">
            Servicios
          </h2>
          <ul className="space-y-2 text-center">
            <li>Gestoría automotor</li>
            <li>Todo tipo de trámites</li>
          </ul>
        </div>
        {/* Contacto */}
        <div>
          <h2 className="text-lg font-semibold text-white py-2 text-center uppercase ">
            Contacto
          </h2>
          <div className="text-sm my-2 justify-center  gap-2 font-montserrat flex">
            <FaPhone className="justify-center" size={20} />
            +54 115040-6299
          </div>
          {/*<p className="text-sm my-2 text-center ">
            <a
              href="mailto:mdonattiprogramacion@gmail.com"
              className="hover:underline text-center "
            >
              cisneros.guadalupe11@gmail.com
            </a>
          </p>
          */}
        </div>
        {/* Redes Sociales */}
        <div>
          <h2 className="text-lg font-semibold text-center text-white py-2 uppercase">
            Seguime
          </h2>
          <div className="flex space-x-4 justify-center">
            <a
              className="text-white hover:text-blue-500 transition-colors duration-300"
              href="https://wa.me/1150406299 "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              className="text-white hover:text-blue-500 transition-colors duration-300"
              href="https://www.instagram.com/gestoriacisneros"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>

            <a
              className="text-white hover:text-blue-500 transition-colors duration-300"
              href="https://www.facebook.com/Cisnerosgestoria"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              className="text-white hover:text-blue-500 transition-colors duration-300"
              href="mailto:cisneros.guadalupe11@gmail.com"
              aria-label="Email"
            >
              <FaVoicemail size={24} />
            </a>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <section className="bg-blue-800 text-white text-center py-4 bg-gradient-to-r from-slate-800 ">
        <h1 className="font-raleway">
          Desarrollado por <strong>MDev</strong>
        </h1>
      </section>
    </footer>
  );
};

export default Footer;
