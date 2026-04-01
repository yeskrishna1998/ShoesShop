import { useEffect, useState } from "react";

function Pickups() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://shoes-backend-1lip.onrender.com/pickups"
      );
      const result = await res.json();

      if (Array.isArray(result)) setData(result);
      else setData(result.data || []);

    } catch (err) {
      console.error(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filtered = data.filter((c) =>
    c.name?.toLowerCase().includes(search.toLowerCase()) ||
    c.phone?.includes(search)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Pickup Requests
          <span className="ml-2 text-sm bg-blue-500 text-white px-2 py-1 rounded">
            {filtered.length}
          </span>
        </h1>

        <input
          type="text"
          placeholder="Search by name / phone..."
          className="border px-4 py-2 rounded shadow-sm focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">

        {loading ? (
          <p className="p-6 text-center">Loading...</p>
        ) : (
          <table className="w-full text-sm">

            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-3">ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Image</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((c) => (
                <tr
                  key={c.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3 font-medium">{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.phone}</td>
                  <td className="max-w-xs truncate">{c.address}</td>

                  {/* Image */}
                  <td>
                    <img
                      src={
                        c.image?.startsWith("http")
                          ? c.image
                          : `https://dvzgridkmraxqxnanqin.supabase.co/storage/v1/object/public/${c.image}`
                      }
                      className="w-14 h-14 object-cover rounded border"
                      alt="shoe"
                    />
                  </td>

                  {/* Date */}
                  <td className="text-gray-500">
                    {c.created_at
                      ? new Date(c.created_at).toLocaleString("en-IN")
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        )}
      </div>
    </div>
  );
}

export default Pickups;