import React from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is React?">
        React is a JavaScript library for building user interfaces.
      </Section>
      <Section title="Benefits of React">
        <ul>
          <li>Fast rendering with a virtual DOM</li>
          <li>Reusable components for better maintainability</li>
          <li>Strong community support and ecosystem</li>
          <li>One-way data binding for predictable app behavior</li>
          <li>Great for building scalable web apps</li>
        </ul>
      </Section>
    </div>
  );
}

export default App;
