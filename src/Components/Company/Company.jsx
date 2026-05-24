import React from "react";
import "./Company.css";

const Company = () => {
  return (
    <div className="company-section">
      <div className="marquee-container">
        <div className="marquee-content">
          
          {/* SET 1 */}
          <h1>Fund the Vision ●</h1>
          <h1>Own the Room ●</h1>
          <h1>Pitch Like Giants ●</h1>
          <h1>Stories That Close Deals ●</h1>

          {/* SET 2 (DUPLICATE FOR SMOOTH LOOP) */}
          <h1>Fund the Vision ●</h1>
          <h1>Own the Room ●</h1>
          <h1>Pitch Like Giants ●</h1>
          <h1>Stories That Close Deals ●</h1>

        </div>
      </div>
    </div>
  );
};

export default Company;