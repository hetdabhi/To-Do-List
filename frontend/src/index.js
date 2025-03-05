import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

// Detect if user is on an Apple device
if (/Mac|iPhone|iPad|iPod/.test(navigator.platform)) {
  document.body.classList.add("apple-user");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
