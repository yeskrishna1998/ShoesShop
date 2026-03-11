import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Contact from "./pages/contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Booking from "./pages/Booking";

import AdminLogin from "./Admin/AdminLogin";
import AdminRoutes from "./Admin/AdminRoutes";

function App() {
  const location = useLocation();

  const hideLayoutRoutes = [
    "/login",
    "/register",
    "/forgot-password",
    "/admin-login"
  ];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">

      {!hideLayout && <Navbar />}

      <main className="flex-1">

        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Admin */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin/*" element={<AdminRoutes />} />

        </Routes>

      </main>

      {!hideLayout && <Footer />}

    </div>
  );
}

export default App;