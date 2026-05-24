import React, { useState } from "react";
import "./Contacts.css";

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
    e.preventDefault(); // prevent page reload

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("Please fill all the fields before submitting");
      return;
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

      {/* HEADING */}
      <div className="smallheading">
        <h4>Contact Us</h4>
        <h1>Get in touch</h1>
        <p>We'd love to hear from you. Please fill out this form.</p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit}>

        {/* TOP INPUTS */}
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

        {/* SUBJECT */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        {/* BUTTON */}
        <button type="submit">
          Send Message
        </button>

      </form>

    </div>
  );
};

export default Contact;