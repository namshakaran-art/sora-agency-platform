import React from "react";
import "./Pricing.css"

const Pricing = () => {
  return (
    <div>
      <section className="pricing" id="pricing">

  <div className="pricing-header">
    <h3>PRICING PLANS</h3>
    <h2>Flexible Pricing For Every Business Stage</h2>
    <p>
      Choose a plan that fits your goals. Whether you're a startup or an established brand,
      we have tailored solutions for you.
    </p>
  </div>

  <div className="pricing-grid">

    <div className="pricing-card">
      <h3>Starter</h3>
      <h2>$199</h2>
      <p>Perfect for small businesses or personal brands getting started online.</p>

      <ul>
        <li>1 Page Website</li>
        <li>Responsive Design</li>
        <li>Basic SEO Setup</li>
        <li>Contact Form</li>
      </ul>

      <button>Get Started</button>
    </div>

    <div className="pricing-card featured">
      <h3>Professional</h3>
      <h2>$499</h2>
      <p>Ideal for growing businesses that need a strong digital presence.</p>

      <ul>
        <li>Multi Page Website</li>
        <li>Advanced UI/UX Design</li>
        <li>SEO Optimization</li>
        <li>Performance Optimization</li>
      </ul>

      <button>Most Popular</button>
    </div>

    <div className="pricing-card">
      <h3>Premium</h3>
      <h2>$999+</h2>
      <p>Best for brands that want a high-end custom digital experience.</p>

      <ul>
        <li>Custom Web Application</li>
        <li>Advanced Animations</li>
        <li>Full Branding Support</li>
        <li>Priority Support</li>
      </ul>

      <button>Contact Us</button>
    </div>

  </div>

</section>
    </div>
  );
};

export default Pricing;