import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import FeatureContainer from "./components/FeatureContainer";
import AboutMe from "./components/AboutMe";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Features",
        element: <FeatureContainer />,
      },
      {
        path: "/About-Me",
        element: <AboutMe />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
