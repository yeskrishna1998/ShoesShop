import { useEffect, useState } from "react";

function QuickRegistrations() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const res = await fetch(
          "https://shoes-backend-1lip.onrender.com/quick-registrations"
        );

        const data = await res.json();

        setUsers(data);

      } catch (error) {

        console.error("Error fetching users:", error);

      }

    };

    fetchUsers();

  }, []);

  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Quick Registrations
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full bg-white bg-amber-600 shadow rounded text-sm">

          <thead className="bg-gray-200">

            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Address</th>
              <th className="p-3">Created Date</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Status</th>
            </tr>

          </thead>

          <tbody>

            {users.map((u) => (

              <tr key={u.id} className="text-center border-t hover:bg-gray-50">

                <td className="p-3">{u.id}</td>

                <td className="p-3 font-semibold">
                  {u.name}
                </td>

                <td className="p-3">
                  {u.email}
                </td>

                <td className="p-3">
                  {u.phone}
                </td>

                <td className="p-3 max-w-[200px] truncate">
                  {u.address}
                </td>

                <td className="p-3">
                  {new Date(u.created_at).toLocaleString()}
                </td>

                <td className="p-3">
                  <a
                    href={`https://wa.me/91${u.phone}`}
                    target="_blank"
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    WhatsApp
                  </a>
                </td>

                <td className="p-3">
                  <span className="bg-yellow-200 px-3 py-1 rounded">
                    New
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default QuickRegistrations;