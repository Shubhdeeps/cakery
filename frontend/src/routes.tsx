import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Routes from "./pages/Routes";
import Menu from "./pages/Menu";
const HomePage = React.lazy(
  () => import(/* webpackChunkName: "HomePage" */ "./pages/Home")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/aboutus",
        element: <h3>aboutus</h3>,
      },
      {
        path: "/contact",
        element: <h3>contact</h3>,
      },
    ],
  },
]);
