import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";

const rotes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/ProjectDetails.jsx/:id",
    element: <ProjectDetails />,
    
  },
],{
  basename : "/portfolio"
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotes} />
  </StrictMode>
);
