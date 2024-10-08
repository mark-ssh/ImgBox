import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page";
import GetStarted from "./routes/get-started";
import UserDashboard from "./routes/user-dashboard";

// import App from './App.jsx'
import "./index.css";
import Root from "./routes/root";
import AppAbout from "./routes/landing-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "getstarted",
    element: <GetStarted />,
    errorElement: <ErrorPage />,
  },
  {
    path: "getstarted/userdashboard",
    element: <UserDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/landingpage",
    element: <AppAbout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/landingpage/getstarted",
    element: <GetStarted />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/getstarted",
    element: <GetStarted />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
