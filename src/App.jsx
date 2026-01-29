import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Contact from "./pages/contact";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import Booking from "./pages/Booking";

function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/register" ||
    location.pathname === "/signup";

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}

      {/* IMPORTANT FIX */}
      <main className="flex-1 w-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
