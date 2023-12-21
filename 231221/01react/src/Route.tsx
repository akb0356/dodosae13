import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
