import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./src/Pages/Home";
import Checkout from "./src/Pages/Checkout";
import Cart from "./src/Pages/Cart";
import Products from "./src/Pages/Products";
import Product from "./src/Pages/Product";
import Login from "./src/components/Login/Login";
import Register from "./src/components/SignUp/SignUp";
import logo from "./public/assets/feviconmain.png";
import ScrollToTop from "./src/components/ScrollToTop/ScrollToTop";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white">
      <img src={logo} alt="Logo" className="w-20 h-20 animate-spin rounded-full" />
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading && location.pathname === "/") {
    return <LoadingScreen />;
  }

  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>


  );
};

const AppWrapper = () => {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
};

export default AppWrapper;
