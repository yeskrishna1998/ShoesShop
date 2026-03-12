// import { Routes, Route } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import AdminLayout from "./AdminLayout";
// import ProtectedRoute from "./ProtectedRoute";

// function AdminRoutes() {
//   return (
//     <ProtectedRoute>
//       <AdminLayout>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//         </Routes>
//       </AdminLayout>
//     </ProtectedRoute>
//   );
// }

// export default AdminRoutes;

import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Bookings from "./Bookings";
import AdminLayout from "./AdminLayout";
import ProtectedRoute from "./ProtectedRoute";
import QuickRegistrations from "./QuickRegistrations";
function AdminRoutes() {
  return (

    <ProtectedRoute>

      <AdminLayout>

        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
        <Route path="/quick-registrations" element={<QuickRegistrations />} />

        </Routes>

      </AdminLayout>

    </ProtectedRoute>

  );
}

export default AdminRoutes;