import { useEffect, useState } from "react";

function Bookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    const fetchBookings = async () => {

      try {

        const res = await fetch(
          "https://shoes-backend-1lip.onrender.com/bookings"
        );

        const data = await res.json();

        setBookings(data);

      } catch (error) {

        console.error("Error fetching bookings:", error);

      }

    };

    fetchBookings();

  }, []);

  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Bookings
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full bg-white shadow rounded text-sm">

          <thead className="bg-gray-200">

            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Address</th>
              <th className="p-3">Shoe Type</th>
              <th className="p-3">Custom Shoe</th>
              <th className="p-3">Size</th>
              <th className="p-3">Issue</th>
              <th className="p-3">Pickup Date</th>
              <th className="p-3">Pickup Time</th>
              <th className="p-3">Created</th>
              <th className="p-3">Status</th>
            </tr>

          </thead>

          <tbody>

            {bookings.map((b) => (

              <tr key={b.id} className="text-center border-t hover:bg-gray-50">

                <td className="p-3">{b.id}</td>
                <td className="p-3">{b.name}</td>
                <td className="p-3">{b.email}</td>
                <td className="p-3">{b.phone}</td>
                <td className="p-3">{b.address}</td>
                <td className="p-3">{b.shoe_type}</td>
                <td className="p-3">{b.custom_shoe_type}</td>
                <td className="p-3">{b.shoe_size}</td>
                <td className="p-3">{b.issue_description}</td>
                <td className="p-3">{b.date}</td>
                <td className="p-3">{b.time}</td>
                <td className="p-3">
                  {new Date(b.created_at).toLocaleString()}
                </td>

                <td className="p-3">
                  <span className="bg-yellow-200 px-3 py-1 rounded">
                    Pending
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

export default Bookings;