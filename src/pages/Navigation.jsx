import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import { Home, NoMatch, About, Lodging } from "./index";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:lodgingId" element={<Lodging />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
