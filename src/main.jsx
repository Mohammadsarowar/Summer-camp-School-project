import * as React from "react";
import * as ReactDOM from "react-dom/client";
import router from "./route/Rougth";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./route/AuthProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    {" "}
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
