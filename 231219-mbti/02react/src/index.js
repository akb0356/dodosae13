import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

const black = {
  background: black,
  color: white,
};
const white = {
  background: white,
  color: black,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
