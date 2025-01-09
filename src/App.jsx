import React from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section"; // Import Section
import HelpfulResource from "./components/HelpfulResource/HelpfulResource"; // Import HelpfulResource
import AboutMe from "./components/AboutMe/AboutMe"; // Import AboutMe
import "./index.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      
      {/* What is React section */}
      <Section title="What is React?">
        React is a JavaScript library for building user interfaces.
      </Section>

      {/* Benefits of React section */}
      <Section title="Benefits of React">
        <ul>
          <li>Fast rendering with a virtual DOM</li>
          <li>Reusable components for better maintainability</li>
          <li>Strong community support and ecosystem</li>
          <li>One-way data binding for predictable app behavior</li>
          <li>Great for building scalable web apps</li>
        </ul>
      </Section>

      {/* Helpful Resources section */}
      <Section title="Helpful Resources">
        <HelpfulResource
          title="React Official Docs"
          link="https://reactjs.org/docs/getting-started.html"
        />
        <HelpfulResource
          title="React - Full Course for Beginners (freeCodeCamp)"
          link="https://www.youtube.com/watch?v=DLX62G4lc44"
        />
        <HelpfulResource
          title="React Tutorial for Beginners (freeCodeCamp)"
          link="https://www.freecodecamp.org/news/react-beginner-handbook/"
        />
        <HelpfulResource
          title="Mastering React Component Patterns"
          link="https://patterns.dev/react"
        />
        <HelpfulResource
          title="React Best Practices Guide"
          link="https://reactjs.org/docs/hooks-reference.html"
        />
      </Section>
      {/* About Me section */}
      <Section title="About Me">
        <AboutMe />
        </Section>
      <Section>
        <Footer />
      </Section>
    </div>
  );
}

export default App;
