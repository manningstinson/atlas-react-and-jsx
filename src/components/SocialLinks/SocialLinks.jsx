import React from "react";
import "./SocialLinks.css";
import githubIcon from "./github.svg";

const SocialLinks = () => {
      return (
            <div className="social-links">
                <a href="https://www.github.com">
                         <img src={githubIcon} alt="GitHub" /></a>
                              
                <a href="https://www.github.com">
                        <img src={githubIcon} alt="GitHub" /></a>
            </div>
      );
}

export default SocialLinks;     