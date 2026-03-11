function Dashboard() {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Dashboard
      </h1>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  <div className="bg-white shadow p-6 rounded">
    <p className="text-gray-500">Total Orders</p>
    <h2 className="text-2xl font-bold">25</h2>
  </div>

  <div className="bg-white shadow p-6 rounded">
    <p className="text-gray-500">Pending</p>
    <h2 className="text-2xl font-bold">10</h2>
  </div>

  <div className="bg-white shadow p-6 rounded">
    <p className="text-gray-500">Completed</p>
    <h2 className="text-2xl font-bold">12</h2>
  </div>

</div>

    

    </div>
  );
}

export default Dashboard;