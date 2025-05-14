import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";
import Servicios from "./Servicios";
import Nosotros from "./Nosotros";
import Catalogo from "./Catalogo";
import ScrollToSectionOnLoad from "../ScrollSectionOnLoad";
import Contacto from "./Contacto";

const Home = () => {
  return (
    <>
      <>
        <ScrollToSectionOnLoad />
        <Navbar />
        <Hero />
        <Nosotros />
        <Servicios />
        <Catalogo />
        <Contacto />
        <Footer />
      </>
    </>
  );
};

export default Home;
