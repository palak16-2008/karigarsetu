import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ArtisanDashboard from "./pages/ArtisanDashboard";
import AddProduct from "./pages/AddProduct";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import BuyerDashboard from "./pages/BuyerDashboard";
import Enquiries from "./pages/Enquiries";
import Profile from "./pages/Profile";
import Catalogue from "./pages/Catalogue";

function Protected({ role, children }) {
  return localStorage.getItem("ks_role") === role ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const [lang, setLang] = useState("en");
  return (
    <>
      <Navbar lang={lang} setLang={setLang}/>
      <main>
        <Routes>
          <Route path="/" element={<Home lang={lang}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/marketplace" element={<Marketplace/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/artisan" element={<Protected role="artisan"><ArtisanDashboard/></Protected>}/>
          <Route path="/add-product" element={<Protected role="artisan"><AddProduct/></Protected>}/>
          <Route path="/enquiries" element={<Protected role="artisan"><Enquiries/></Protected>}/>
          <Route path="/profile" element={<Protected role="artisan"><Profile/></Protected>}/>
          <Route path="/catalogue" element={<Protected role="artisan"><Catalogue/></Protected>}/>
          <Route path="/buyer" element={<Protected role="buyer"><BuyerDashboard/></Protected>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </main>
    </>
  );
}