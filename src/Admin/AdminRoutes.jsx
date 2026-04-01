import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Bookings from "./Bookings";
import AdminLayout from "./AdminLayout";
import ProtectedRoute from "./ProtectedRoute";
import QuickRegistrations from "./QuickRegistrations";
import Review from "./Review";
import Contacts from "./Contacts";
import Pickups from "./Pickups";
import Delivery from "./Delivery";

function AdminRoutes() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="quick-registrations" element={<QuickRegistrations />} />
          <Route path="reviews" element={<Review />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="pickups" element={<Pickups />} />
          <Route path="delivery" element={<Delivery />} />
        </Routes>
      </AdminLayout>
    </ProtectedRoute>
  );
}

export default AdminRoutes;