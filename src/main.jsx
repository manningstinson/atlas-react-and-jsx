import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ render method
import App from './App'; // Import the App component
import './index.css'


// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create the React root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
