import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Services from "./Pages/Services/Services";
import Process from "./Pages/Process/Process";
import Pricing from "./Pages/Pricing/Pricing";
import FAQ from "./Pages/FAQ/FAQ";
import Contacts from "./Pages/Contacts/Contacts";

const ScrollManager = () => {
  const location = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    // Force the browser layout to drop standard jump mechanics
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    // Initialize Scroll System
    scrollRef.current = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        duration: 1.2,
        lerp: 0.08, // Gives that distinctive buttery glide
        smoothWheel: true,
      },
    });

    // CRITICAL BUGFIX: Forces the wrapper engine to recalculate layout height 
    // after the DOM has fully rendered the new page route layout.
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.resize();
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, [location.pathname]); // Re-runs on every distinct pathname update hook

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollManager />
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