import React from "react";
import Pagination from "./Components/Pagination";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = '/' element={<Pagination />} />
        <Route path = '/cart' element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
