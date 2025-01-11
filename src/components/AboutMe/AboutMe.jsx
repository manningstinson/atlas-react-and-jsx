// src/components/AboutMe/AboutMe.jsx
import React from "react";
import ManningLinkedInImage from "../../assets/manning-linkedin.jpeg"; // Import the image

const AboutMe = () => {
  return (
    <div className="about-me">
      <img
        src={ManningLinkedInImage} // Use the imported image
        alt="Manning Stinson Professional Photo"
        className="about-me-image"
      />
      <p>
        Hi, my name is Manning. I am a Full Stack student in my 5th trimester.
        My favorite languages and technologies to work with are Python, React, HTML, CSS, JavaScript.
        After school, I hope to pursue a career in Full Stack Development.
        Outside of school, I enjoy Reading, Writing, Blogging, and I am passionate about teaching adults how to swim.
      </p>
    </div>
  );
};

export default AboutMe;
