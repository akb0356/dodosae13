import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import About from "./About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default Router;
