import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="service">
      {/* Heading section */}

      <div className="service-heading">
        <h3>OUR SERVICES</h3>
      </div>

      {/* MAIN HEADING */}
      <div className="main-heading">
        <h2>
          Premium Digital Solutions
          <br />
          Crafted For Modern Brands
        </h2>
        <p>
          We design and develop world-class websites, interfaces, and digital
          experiences that help businesses grow and stand out in competitive
          markets.
        </p>
      </div>

      {/* CARDS SECTION */}
      <div className="service-grid">
        <div className="service-card">
          {/* CARD 01 */}
          <div className="service-card">
            <h3>Web Design</h3>
            <p>
              Luxury, high-converting websites with modern UI/UX and
              pixel-perfect layouts.
            </p>
          </div>

          {/* CARD 02 */}
          <div className="service-card">
            <h3>Web Development</h3>
            <p>
              Fast, scalable, and fully responsive websites built with modern
              technologies.
            </p>
          </div>

          {/* CARD 03 */}
          <div className="service-card">
            <h3>Brand Identity</h3>
            <p>
              Strategic branding systems that create memorable and premium
              visual identities.
            </p>
          </div>

          {/* CARD 04 */}
          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>
              User-focused interfaces that maximize engagement, usability, and
              conversion.
            </p>
          </div>

          {/* CARD 05 */}
          <div className="service-card">
            <h3>SEO Optimization</h3>
            <p>
              Search engine optimization strategies that improve visibility and
              organic growth.
            </p>
          </div>

          {/* CARD 06 */}
          <div className="service-card">
            <h3>Maintenance</h3>
            <p>
              Ongoing support, updates, and performance monitoring to keep your
              site flawless.
            </p>
          </div>
        </div>
      </div>


      {/* service cta */}
        <div className="services-cta">
    <h3>Ready To Elevate Your Brand?</h3>
    <button>Start Your Project</button>
  </div>
    </div>
  );
};

export default Services;
