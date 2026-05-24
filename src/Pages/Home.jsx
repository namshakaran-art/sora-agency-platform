import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import HeroSection from "../Components/HeroSection/HeroSection";
import Green from "../Components/Greenpart/Green";
import CardSwap, { Card } from "../Components/card/cardswap";
import Company from "../Components/Company/Company";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer"; // Footer wapas add kar diya
import Services from "../Pages/Services/Services";
import Process from "../Pages/Process/Process";
import Pricing from "../Pages/Pricing/Pricing";
import FAQ from "../Pages/FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <Green />

      {/* CARD SWAP SECTION */}
      <div
        style={{
          minHeight: "200px",
          position: "relative",
          background: "#050505",
          display: window.innerWidth <= 424 ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardSwap>
          <Card>
            <h3>Raise Faster</h3>
            <p>Premium decks designed to convert investors.</p>
          </Card>
          <Card>
            <h3>Modern Design</h3>
            <p>Cinematic visuals and smooth animations.</p>
          </Card>
          <Card>
            <h3>Build Trust</h3>
            <p>Designed for ambitious startups and brands.</p>
          </Card>
        </CardSwap>
      </div>

      {/* ADDITIONAL SECTIONS */}
      <Services />
      <Process />
      <Pricing />
      <FAQ />

      {/* COMPANY & CONTACT */}
      <Company />
      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;