import { useState } from "react";
import Sidebar from "./Sidebar";

function AdminLayout({ children }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between bg-white shadow px-4 py-3">

          <h1 className="font-bold text-lg">
            Admin
          </h1>

          <button
            onClick={() => setOpen(true)}
            className="text-2xl"
          >
            ☰
          </button>

        </div>

        {/* Page Content */}
        <div className="p-4 md:p-6">
          {children}
        </div>

      </div>

    </div>
  );
}

export default AdminLayout;