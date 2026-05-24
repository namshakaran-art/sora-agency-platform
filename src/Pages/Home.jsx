import React from "react";
// import Navbar from "../Components/Navbar/Navbar";
import HeroSection from "../Components/HeroSection/HeroSection";
import Green from "../Components/Greenpart/Green";
import CardSwap, { Card } from "../Components/card/cardswap";
import Company from "../Components/Company/Company";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer"; 

const Home = () => {
  return (
    <div>
     
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



      {/* COMPANY & CONTACT */}
      <Company />
      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;