import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [open, setOpen] = useState(false);

 const logout = () => {
  sessionStorage.removeItem("adminToken");
  navigate("/admin-login");
};

  return (

    <>
      {/* Mobile Topbar */}

      <div className="md:hidden flex justify-between items-center bg-black text-white p-4">

        <h2 className="font-bold">Admin</h2>

        <button onClick={() => setOpen(!open)}>
          ☰
        </button>

      </div>

      {/* Sidebar */}

      <div className={`bg-black text-white w-64 p-5 space-y-4 fixed md:static top-0 h-full z-50 transition-transform
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>

        <h2 className="text-xl font-bold mb-6">
          Shoe Repair Admin
        </h2>

        <Link to="/admin" className="block hover:text-yellow-400">
          Dashboard
        </Link>

        <Link to="/admin/bookings" className="block hover:text-yellow-400">
          Bookings
        </Link>

        {/* Logout Button */}

        <button
          onClick={logout}
          className="block text-red-400 hover:text-red-600 mt-10"
        >
          Logout
        </button>

      </div>

    </>

  );

};

export default Sidebar;