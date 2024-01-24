import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Gallery from "../pages/Gallery";
import HariBesar from "../pages/HariBesar";

const Utama = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/Gallery" Component={Gallery}/>
      <Route exact path="/HariBesar" Component={HariBesar}/>
    </Routes>
  );
};

export default Utama;
