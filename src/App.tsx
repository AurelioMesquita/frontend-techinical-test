import React from "react";
import "./App.css";
import Home from "./pages/home";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import Search from "./pages/search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
