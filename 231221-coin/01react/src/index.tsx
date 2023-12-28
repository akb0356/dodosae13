import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Route";
import { RouterProvider } from "react-router-dom";
import Router from "./component/Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={Router} />);
