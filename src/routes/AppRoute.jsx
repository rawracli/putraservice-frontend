import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const About = lazy(() => import("../pages/about/About"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Service = lazy(() => import("../pages/service/Service"));
const Documentation = lazy(() => import("../pages/documentation/Documentation"));
const UserProfile = lazy(() => import("../pages/User_Profile/UserProfile"));
import App from "../App";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layout/MainLayout";
import LoadingPage from "../components/LoadingPage";

function AppRoute() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/ulasan" element={<App />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/layanan" element={<Service />} />
          <Route path="/dokumentasi" element={<Documentation />} />
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
    </Suspense>
  );
}

export default AppRoute;
