// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"; // Navbar yahan import karo
import Home from "./Pages/Home";
import Services from "./Pages/Services/Services";
import Process from "./Pages/Process/Process";
import Pricing from "./Pages/Pricing/Pricing";
import FAQ from "./Pages/FAQ/FAQ";
import Contacts from "./Pages/Contacts/Contacts";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar ko yahan rakho, taaki ye hamesha rahe */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;