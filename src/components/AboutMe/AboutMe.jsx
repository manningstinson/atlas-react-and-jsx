// src/components/AboutMe.jsx
import React from "react";


const AboutMe = () => {
  return (
    <div className="about-me">
      <img
        src="/images/manning-linkedin.jpeg" // Replace with your actual image URL
        alt="Your professional portrait"
        className="about-me-image"
      />
      <p>
        Hi, my name is Manning. I am a Full Stack student in my 5th trimester.
        My favorite languages and technologies to work with are Python,React, HTML, CSS, Javascript.
        After school, I hope to pursue a career in Full Stack Development.
        Outside of school, I enjoy Reading, Writing, Bloggin, and I am passionate about teaching adults how to swim.
      </p>
    </div>
  );
};

export default AboutMe;
