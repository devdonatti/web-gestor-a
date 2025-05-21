import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Productos from "./components/pages/Productos";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import ScrollToHashElement from "./components/ScrollToHashElement"; // 💡 importalo

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToHashElement /> {/* 💡 agregalo aquí */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
