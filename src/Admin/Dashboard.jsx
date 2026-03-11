function Dashboard() {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white shadow p-6 rounded">
          <h3 className="text-gray-500">Total Orders</h3>
          <p className="text-2xl font-bold">25</p>
        </div>

        <div className="bg-white shadow p-6 rounded">
          <h3 className="text-gray-500">Pending Orders</h3>
          <p className="text-2xl font-bold">10</p>
        </div>

        <div className="bg-white shadow p-6 rounded">
          <h3 className="text-gray-500">Completed</h3>
          <p className="text-2xl font-bold">12</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;