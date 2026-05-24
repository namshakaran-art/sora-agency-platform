import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Folder names match hone chahiye (Capital C aur P)
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services/Services";
import Process from "./Pages/Process/Process";
import Pricing from "./Pages/Pricing/Pricing";
import FAQ from "./Pages/FAQ/FAQ";
import Contacts from "./Pages/Contacts/Contacts";

const App = () => {
  return (
    <BrowserRouter>
      <main style={{ width: "100%", overflowX: "hidden" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;