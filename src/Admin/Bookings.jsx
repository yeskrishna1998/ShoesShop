import { useEffect, useState } from "react";

function Bookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8000/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));

  }, []);

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Bookings
      </h1>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-200">

          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Shoe</th>
            <th className="p-3">Issue</th>
            <th className="p-3">Date</th>
            <th className="p-3">Status</th>
          </tr>

        </thead>

        <tbody>

          {bookings.map((b, i) => (

            <tr key={i} className="text-center border-t">

              <td className="p-3">{b.name}</td>
              <td>{b.phone}</td>
              <td>{b.shoeType}</td>
              <td>{b.issueDescription}</td>
              <td>{b.date}</td>
              <td>
                <span className="bg-yellow-200 px-3 py-1 rounded">
                  Pending
                </span>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Bookings;