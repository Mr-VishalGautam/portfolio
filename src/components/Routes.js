import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Portfolio from "./Portfolio";
// import MyOffer from "./MyOffer";
import MyContact from "./MyContact";
import CuriculumVitae from "./CuriculumVitae";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<MyContact />} />
      {/* <Route path="/skills-and-offer" element={<MyOffer />} /> */}
      <Route path="/cv" element={<CuriculumVitae />} />
    </Routes>
  );
}

export default AppRoutes;