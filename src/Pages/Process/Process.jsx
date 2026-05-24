import React from "react";
import "./Process.css";

const Process = () => {
  return (
    <div className="process">
      {/* PROCESS HEADER */}
      <div className="process-header">
        <h3>OUR PROCESS</h3>
        <h2>How We Turn Ideas Into Reality</h2>
        <p>
          A simple, transparent workflow that ensures quality, speed, and
          results.
        </p>

        {/* PROCESS HEADER */}

        <div className="process-grid">
          <div className="process-card">
            <h3>Understanding Your Business</h3>
            <p>
             We begin every project with a deep discovery phase where we fully understand your business, industry, target audience, and long-term vision. This step is not just about gathering basic information—it’s about identifying the core problem your brand is trying to solve and the opportunities that can set you apart in a competitive digital landscape. We analyze your competitors and study user behavior to build a strong foundation for the project.
            </p>
          </div>

          <div className="process-card">
            <h3>Building a Clear Digital Roadmap</h3>
            <p>
            Once we clearly understand your goals, we move into building a structured strategy that defines the direction of the entire project. This includes planning user flow, information architecture, content structure, and selecting the right technology stack. We ensure every step of the experience is mapped out properly so the final product is both functional and conversion-focused.
            </p>
          </div>

          <div className="process-card">
            <h3>Crafting Intuitive User Experiences</h3>
            <p>
            In this phase, we transform ideas into visually appealing and user-friendly interfaces that reflect your brand identity. Every element is carefully designed with attention to spacing, typography, color balance, and modern UI principles. Our focus is to create a smooth and engaging user experience that not only looks premium but also guides users naturally toward action.
            </p>
          </div>

          <div className="process-card">
         <h3>Engineering Scalable Digital Solutions</h3>
            <p>
             We bring the designs to life by building fast, responsive, and fully functional digital products using modern technologies. Performance, scalability, and clean structure are our top priorities. Every website is optimized to work seamlessly across all devices while ensuring smooth interactions and a reliable user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
