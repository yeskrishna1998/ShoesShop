import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Contact from "./pages/contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Booking from "./pages/Booking";
import Services from "./components/service";
import Pricing from "./components/pricing";
import AdminLogin from "./Admin/AdminLogin";
import AdminRoutes from "./Admin/AdminRoutes";
import ScrollToTop from "./pages/ScrollToTop";
import About from "./pages/About";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  const location = useLocation();

 const hideLayout =
    location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col">
        <ScrollToTop />


      {!hideLayout && <Navbar />}

      <main className="flex-1">
        <FloatingButtons />

        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/signup" element={<Register />} />


          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/pricing" element={<Pricing />} />
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