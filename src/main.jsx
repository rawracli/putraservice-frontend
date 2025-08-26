import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoute from "./routes/AppRoute.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PageTitle from "./routes/PageTitle.jsx";
import UserProfile from "./pages/User_Profile/UserProfile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PageTitle/>
      <AppRoute/>
    </BrowserRouter>
  </StrictMode>
);
