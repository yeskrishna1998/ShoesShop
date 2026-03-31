import { useEffect, useState } from "react";

function Contacts() {

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const res = await fetch(
        "https://shoes-backend-1lip.onrender.com/contact"
      );

      if (!res.ok) throw new Error("API failed");

      const data = await res.json();

      setContacts(data || []);

    } catch (err) {
      console.error("ERROR:", err);
      setContacts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter((c) =>
    c.name?.toLowerCase().includes(search.toLowerCase()) ||
    c.email?.toLowerCase().includes(search.toLowerCase()) ||
    c.phone?.includes(search)
  );

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Contacts ({filteredContacts.length})
      </h1>

      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full bg-white shadow rounded text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Address</th>
              <th className="p-2">Message</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredContacts.map((c) => (
              <tr key={c.id} className="text-center border-t">
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.address}</td>
                <td>{c.message}</td>
                <td>
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
  );
}

export default Contacts;