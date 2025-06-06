import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './App.css'; // Import your CSS file
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap App in BrowserRouter */}
      <App />
  </React.StrictMode>
);

// For performance monitoring
reportWebVitals();