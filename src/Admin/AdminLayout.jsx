import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-4 md:p-6 overflow-auto">
        {children}
      </div>

    </div>

  );

};

export default AdminLayout;