import React from "react";
import Home from "./Pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Men from "./Pages/Men.jsx";
import Admin from "./Pages/Admin.jsx";
import Women from "./Pages/Women.jsx";
import Toys from "./Pages/Toys.jsx";
import Sports from "./Pages/Sports.jsx";
import Shoes from "./Pages/Shoes.jsx";
import Kids from "./Pages/Kids.jsx";
import Jewellery from "./Pages/Jewellery.jsx";
import Electronics from "./Pages/Electronics.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/women" element={<Women/>}/>
        <Route path="/toys" element={<Toys/>}/>
        <Route path="/sports" element={<Sports/>}/>
        <Route path="/shoes" element={<Shoes/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/jewellery" element={<Jewellery/>}/>
        <Route path="/electronics" element={<Electronics/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
