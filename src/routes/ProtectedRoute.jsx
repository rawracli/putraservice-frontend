import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";
import { getProfile } from "../controllers/AuthController.js";

const ProtectedRoute = ({ children }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const validateToken = async () => {
      if (!token) {
        setIsAuthenticated(false);
        setAuthChecked(true);
        return;
      }

      try {
        const data = await getProfile();
        setIsAuthenticated(!!data && !!data.name);
      } catch {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
      } finally {
        setAuthChecked(true);
      }
    };

    validateToken();
  }, []);

  if (!authChecked) {
    return <LoadingPage />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
