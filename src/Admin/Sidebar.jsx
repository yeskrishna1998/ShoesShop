import { Link, useNavigate } from "react-router-dom";

function Sidebar({ open, setOpen }) {

  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static`}
      >

        <div className="p-6">

          <h2 className="text-xl font-bold mb-8">
            Shoe Repair Admin
          </h2>

          <nav className="flex flex-col gap-4">

            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className="hover:text-yellow-400"
            >
              Dashboard
            </Link>

            <Link
              to="/admin/bookings"
              onClick={() => setOpen(false)}
              className="hover:text-yellow-400"
            >
              Bookings
            </Link>

            <button
              onClick={logout}
              className="text-red-400 text-left mt-6"
            >
              Logout
            </button>

          </nav>

        </div>

      </div>
    </>
  );
}

export default Sidebar;