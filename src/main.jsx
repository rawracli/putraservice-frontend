import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRoute.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoute />
  </BrowserRouter>
);
