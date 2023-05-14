import { createBrowserRouter } from "react-router-dom";
import Routes from "./pages/Routes";
import Menu from "./pages/Menu";
import HomePage from "./pages/Home";
import Aboutus from "./pages/Aboutus";

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
        element: <Aboutus />,
      },
      {
        path: "/contact",
        element: <h3>contact</h3>,
      },
    ],
  },
]);
