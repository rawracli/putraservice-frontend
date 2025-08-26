import { Route, Routes } from "react-router-dom";
import App from "../App";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Service from "../pages/service/Service";
import Documentation from "../pages/documentation/Documentation";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layout/MainLayout";
import UserProfile from "../pages/User_Profile/UserProfile";

function AppRoute() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/comments" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/documentation" element={<Documentation />} />
      </Route>
      <Route
        path="/user-profile"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoute;
