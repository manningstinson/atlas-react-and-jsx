import React from "react";
import linkedinIcon from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import '../../index.css';  // Import index.css from the src folder

const SocialLinks = () => {
      return (
            <div className="social-links">
                <a href="https://www.github.com">
                         <img src={githubIcon} alt="GitHub" /></a>
                              
                <a href="https://www.linkedin.com">
                        <img src={linkedinIcon} alt="LinkedIn" /></a>
            </div>
      );
}

export default SocialLinks;     