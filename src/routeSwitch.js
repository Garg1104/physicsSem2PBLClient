import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ConstantsApp from "./components/ConstantsApp";
import Footer from "./components/Footer";
import ConverterApp from "./components/ConverterApp";

const RouteSwitch = () => {
  return (
    <React.StrictMode >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ConverterApp />} />
          <Route path='/constants' element={<ConstantsApp />}/>
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </React.StrictMode>
  )
}

export default RouteSwitch;