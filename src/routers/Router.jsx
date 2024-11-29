import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { MedicalPackageSearch } from "../pages/MedicalPackageSearch";
import { Detail } from "../pages/DetaiI";
import { Booking } from "../components/booking/Booking";

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />'
      <Route path="/MedicalPackageSearch" element={<MedicalPackageSearch />} />'
      <Route path="/Detail/:id" element={<Detail />} />'
      <Route path="/Booking" element={<Booking />} />'
    </Routes>
  );
}
