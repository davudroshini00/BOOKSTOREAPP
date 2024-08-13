import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Adjust path as needed
import './index.css'; // Adjust path as needed
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider.jsx'; // Adjust path as needed

// Get the root element from the DOM
const container = document.getElementById('root');

// Ensure the container element exists
if (container) {
  const root = ReactDOM.createRoot(container); // Create the root
  root.render(
    <BrowserRouter>
      <AuthProvider>
        <div className="dark:bg-slate-900 dark:text-white">
          <App />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
} else {
  console.error("Error: Target container with id 'root' not found.");
}

 
    
  

