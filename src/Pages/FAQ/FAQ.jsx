import React from "react";
import "./FAQ.css"

const FAQ = () => {
  return (
    <div>
      <section className="faq" id="faq">
        <div className="faq-header">
          <h3>FREQUENTLY ASKED QUESTIONS</h3>
          <h2>Everything You Need To Know</h2>
          <p>
            Quick answers to the most common questions about our process,
            pricing, and services.
          </p>
        </div>

        <div className="faq-list">
          <div className="faq-item">
            <h3>How long does it take to complete a website?</h3>
            <p>
              Most standard websites take between 1 to 3 weeks depending on the
              complexity, features, and number of pages required.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do you provide custom designs or templates?</h3>
            <p>
              We focus on fully custom designs tailored to your brand identity,
              ensuring a unique and professional digital presence.
            </p>
          </div>

          <div className="faq-item">
            <h3>Will my website be mobile-friendly?</h3>
            <p>
              Yes, every website we build is fully responsive and optimized for
              all devices including mobile, tablet, and desktop.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do you offer support after project delivery?</h3>
            <p>
              Yes, we provide post-launch support and maintenance to ensure your
              website runs smoothly and stays updated.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I request changes during the project?</h3>
            <p>
              Absolutely, we allow revision phases during the design and
              development process to make sure everything meets your
              expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
