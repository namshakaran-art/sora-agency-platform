import React from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="herosection">
      {/* MAIN TEXT */}
      <h1 className="line">WE DESIGN</h1>
      <h1 className="line">PRESENTATIONS</h1>
      <h1 className="line">THAT RAISE CAPITAL</h1>

      {/* LOWER CONTENT */}
      <div className="lowersection">
        <h3>Present better. Raise faster.</h3>
        <h3 className="ls2">Make it undeniable.</h3>

        {/* BUTTON */}
        <button
          className="project-btn"
          onClick={() => navigate("/contact")}
        >
          <span>Begin the Raise</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;