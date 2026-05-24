// Footer.jsx
import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footerwrapper">
      <div className="footer">
        {/* LEFT */}
        <div className="footerleft">
          <h1>SORA</h1>
          <h4>Presentations that raise capital.</h4>
          <p>
            We design investor-focused decks and storytelling systems for
            ambitious startups.
          </p>
        </div>

        {/* RIGHT */}
        <div className="footerright">
          <h2>Let’s Talk</h2>
          <h5>Have a project in mind?</h5>
          <p>We’d love to hear your story and help you bring it to life.</p>
          <div
            className="footerbtn"
            onClick={() => {
              window.scrollTo(0, 0);
              setTimeout(() => {
                window.location.href = "/contact";
              }, 50);
            }}
            style={{ cursor: "pointer" }}
          >
            Book a Call →
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="newsletter">
          <h3>The SORA Letter</h3>

          <p>
            Once a week we share insights on storytelling, design, and raising
            capital.
            <br />
            No spam. Just clarity that helps you win investors.
          </p>

        <div className="newsletterform">
  <input type="email" placeholder="Enter your email" />

  <button
    onClick={() =>
      alert(
        "Thanks for subscribing to The SORA Letter!\n\nGet ready for weekly insights on storytelling, design, and raising capital."
      )
    }
  >
    Subscribe
  </button>
</div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footerbottom">
          <h1>© 2026 SORA. Designed to raise. Built to win trust.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
