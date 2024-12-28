import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AppNavbar from "./components/Global/AppNavbar";


const App = () => {
  return (
    <>
    <AppNavbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </>
  );
};

export default App;
