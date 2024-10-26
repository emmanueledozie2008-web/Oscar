import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Validate from "./pages/validate/Validate.tsx";
import ErrorPage from "./pages/Error-Page.tsx";
import Wallet from "./pages/wallet/Wallet.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "validate",
    element: <Validate />,
  },
  {
    path: "wallet",
    element: <Wallet />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
