import "./assets/styles/utils.css";
import { RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import { router } from "./routes";
import { useEffect } from "react";
// import { app } from "./service/firebase";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
