import { useEffect, useState } from "react";

function Delivery() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://shoes-backend-1lip.onrender.com/deliveries"
      );

      if (!res.ok) throw new Error("API failed");

      const result = await res.json();
      console.log("DELIVERY API:", result);

      // 🔥 Handle all cases safely
      if (Array.isArray(result)) {
        setData(result);
      } else if (Array.isArray(result.data)) {
        setData(result.data);
      } else {
        setData([]);
      }

    } catch (err) {
      console.error("ERROR:", err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔥 SAFE FILTER (no crash)
  const filtered = (data || []).filter((c) => {
    const name = c?.name || "";
    const phone = c?.phone || "";

    return (
      name.toLowerCase().includes(search.toLowerCase()) ||
      phone.includes(search)
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Delivery Requests
          <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded">
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
        ) : filtered.length === 0 ? (
          <p className="p-6 text-center text-gray-500">
            No delivery data found ❌
          </p>
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
                  <td>{c.name || "-"}</td>
                  <td>{c.phone || "-"}</td>

                  <td className="max-w-xs truncate">
                    {c.address || "-"}
                  </td>

                  {/* 🔥 Image Fix */}
                  <td>
                    <img
                      src={
                        c?.image?.startsWith("http")
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

export default Delivery;