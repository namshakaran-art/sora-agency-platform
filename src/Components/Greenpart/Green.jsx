import React, { useEffect, useRef } from "react";
import "./Green.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Green = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const imgRef = useRef(null);
  const cardRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      gsap.from(leftRef.current, {
        opacity: 0,
        x: -80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      gsap.from(imgRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      gsap.from(cardRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="green" ref={sectionRef}>

      <div className="leftside" ref={leftRef}>

        <p>Investor Focused Presentation Design</p>

        <h1>
          Designed <br />
          to <span>Raise.</span>
        </h1>

        <h3>
          We craft premium investor presentations
          and storytelling experiences that help
          startups look undeniable in front of
          investors, partners and audiences.
        </h3>

        {/* ✅ UPDATED BUTTON */}
        <button
          className="green-btn"
          onClick={() => navigate("/process")}
        >
          <span>See how we work</span>
        </button>

      </div>

      <div className="greenrightsideimg">

        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
          alt="presentation"
        />

        <div className="floating-card" ref={cardRef}>

          <h2>+214%</h2>

          <p>
            Increase in investor engagement
            through strategic storytelling.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Green;