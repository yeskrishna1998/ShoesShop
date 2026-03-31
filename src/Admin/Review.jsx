import { useEffect, useState } from "react";

function Reviews() {

  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const fetchReviews = async () => {
    try {
      const res = await fetch("https://shoes-backend-1lip.onrender.com/reviews");
      const data = await res.json();

      const sorted = data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );

      setReviews(sorted);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // 🔍 Search + Date Filter
  const filteredReviews = reviews.filter((r) => {

    const matchSearch =
      r.name?.toLowerCase().includes(search.toLowerCase()) ||
      r.email?.toLowerCase().includes(search.toLowerCase()) ||
      r.message?.toLowerCase().includes(search.toLowerCase()) ||
      String(r.rating).includes(search);

    const reviewDate = r.created_at ? new Date(r.created_at) : null;

    const matchFromDate = fromDate
      ? reviewDate >= new Date(fromDate)
      : true;

    const matchToDate = toDate
      ? reviewDate <= new Date(toDate)
      : true;

    return matchSearch && matchFromDate && matchToDate;
  });

  // 🔥 DELETE FUNCTION (UPDATED)
  const deleteReview = async (id) => {

    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    setDeletingId(id);

    try {
      const res = await fetch(
        `https://shoes-backend-1lip.onrender.com/reviews/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Delete failed");

      // 🔥 UI se turant remove
      setReviews((prev) => prev.filter((r) => r.id !== id));

    } catch (err) {
      console.error(err);
      alert("Delete failed");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Reviews ({filteredReviews.length})
      </h1>

      {/* 🔍 Filters */}
      <div className="flex flex-wrap gap-3 mb-4">

        <input
          type="text"
          placeholder="Search name, email, message..."
          className="border p-2 rounded w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="date"
          className="border p-2 rounded"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />

        <input
          type="date"
          className="border p-2 rounded"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />

        <button
          onClick={() => {
            setSearch("");
            setFromDate("");
            setToDate("");
          }}
          className="bg-gray-500 text-white px-3 py-2 rounded"
        >
          Reset
        </button>

      </div>

      {/* 📊 Table */}
      <table className="w-full bg-white shadow rounded text-sm">

        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Rating</th>
            <th className="p-3">Message</th>
            <th className="p-3">Date</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredReviews.map((r) => (
            <tr key={r.id} className="text-center border-t hover:bg-gray-50">

              <td className="p-3">{r.id}</td>
              <td className="p-3">{r.name}</td>
              <td className="p-3">{r.email}</td>
              <td className="p-3">⭐ {r.rating}</td>
              <td className="p-3">{r.message}</td>

              <td className="p-3">
                {r.created_at
                  ? new Date(r.created_at).toLocaleString()
                  : "-"}
              </td>

              <td className="p-3">
                <button
                  onClick={() => deleteReview(r.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                >
                  {deletingId === r.id ? "Deleting..." : "Delete"}
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Reviews;