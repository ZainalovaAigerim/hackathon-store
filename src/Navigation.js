import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuNavbar from "./components/MenuNavbar";

function Navigation() {
  return (
    <BrowserRouter>
      <MenuNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
