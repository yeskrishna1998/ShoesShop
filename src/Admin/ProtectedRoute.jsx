import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("adminToken") : null;

  if (!token) {
    return <Navigate to="/admin-login" />;
  }

  return children;
}

export default ProtectedRoute;
