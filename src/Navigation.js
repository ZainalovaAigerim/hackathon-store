import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import MenuNavbar from "./components/MenuNavbar";
import AddProducts from "./pages/AddProducts";
import InfoPage from "./pages/InfoPage";
import AdminProvider from "./contexts/AdminProvider";
import HomeProvider from "./contexts/HomeProvider";
import Footer from "./components/Footer";
import BasketPage from "./pages/BasketPage";
import EditProductsPage from "./pages/EditProductsPage";

function Navigation() {
  return (
    <HomeProvider>
      <AdminProvider>
        <BrowserRouter>
          <MenuNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/add" element={<AddProducts />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/admin/edit/:id" element={<EditProductsPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AdminProvider>
    </HomeProvider>
  );
}

export default Navigation;
