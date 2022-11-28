import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import NavbarComp from "./Components/NavbarComp";
import Services from "./Components/Services";

function Routers() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
