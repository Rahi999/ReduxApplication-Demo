import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};
export default Router;
