import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const About = lazy(() => import("../pages/about/About"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Service = lazy(() => import("../pages/service/Service"));
const Documentation = lazy(() => import("../pages/documentation/Documentation"));
const UserProfile = lazy(() => import("../pages/User_Profile/UserProfile"));
const App = lazy(() => import("../App"));
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layout/MainLayout";

function AppRoute() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-white">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-[#730B00] rounded-full animate-spin"></div>
        </div>
      }
    >
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
