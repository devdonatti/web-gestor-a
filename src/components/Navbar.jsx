import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-300 shadow-md fixed top-0 w-full z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/#inicio">
          <img className="h-12 w-12 object-contain" src="logo.png" alt="logo" />
        </Link>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <span className="text-2xl">☰</span>
          </button>
        </div>

        <ul className="hidden md:flex gap-6 text-white font-font-montserrat">
          <li>
            <Link
              to="/#servicios"
              className="text-white py-2 px-4 rounded-full hover:bg-gray-500"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="/#nosotros"
              className="text-white py-2 px-4 rounded-full hover:bg-gray-500"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/productos"
              className="text-white py-2 px-4 rounded-full hover:bg-gray-500"
            >
              Comprá
            </Link>
          </li>
          <li>
            <Link
              to="/#contacto"
              className="text-white py-2 px-4 rounded-full hover:bg-gray-500"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`md:hidden bg-white w-full overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100 py-4 px-4" : "max-h-0 opacity-0 px-4"
        }`}
      >
        <ul className="space-y-2 text-black font-medium">
          <li>
            <a href="#inicio" className="block">
              Inicio
            </a>
          </li>
          <li>
            <a href="#servicios" className="block font-montserrat">
              Servicios
            </a>
          </li>
          <li>
            <a href="#nosotros" className="block">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#catalogo" className="block">
              Catálogo
            </a>
          </li>
          <li>
            <Link
              to="/#contacto"
              className="text-white py-2 px-4 rounded-full hover:bg-gray-500"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
