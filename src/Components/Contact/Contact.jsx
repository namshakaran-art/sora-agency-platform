import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.subject ||
    !formData.message
  ) {
    alert("Please fill all the fields before submitting");
    return; // ❌ stop submission here
  }

  alert("Form submitted successfully");

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
};
  return (
    <div className="contact">
      <div className="smallheading">
        <h4>Contact Us</h4>
        <h1>Get in touch</h1>
        <p>We'd love to hear from you. Please fill out this form.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="contactform">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;