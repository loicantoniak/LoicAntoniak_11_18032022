import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ErrorPage, AboutPage, LodgingPage } from "./index";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logement/:lodgingId" element={<LodgingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
