import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    bookings: 0,
    quick: 0,
    reviews: 0,
    contacts: 0
  });

  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const [bookingsRes, quickRes, reviewsRes, contactsRes] = await Promise.all([
        fetch("https://shoes-backend-1lip.onrender.com/bookings"),
        fetch("https://shoes-backend-1lip.onrender.com/quick-registrations"),
        fetch("https://shoes-backend-1lip.onrender.com/reviews"),
        fetch("https://shoes-backend-1lip.onrender.com/contact")
      ]);

      const bookings = await bookingsRes.json();
      const quick = await quickRes.json();
      const reviews = await reviewsRes.json();
      const contacts = await contactsRes.json();

      setStats({
        bookings: bookings?.length || 0,
        quick: quick?.length || 0,
        reviews: reviews?.length || 0,
        contacts: contacts?.length || 0
      });

    } catch (err) {
      console.error("ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();

    // 🔥 real-time refresh every 5 sec
    const interval = setInterval(fetchStats, 5000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      title: "Bookings",
      value: stats.bookings,
      path: "/admin/bookings",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Quick Registrations",
      value: stats.quick,
      path: "/admin/quick-registrations",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Reviews",
      value: stats.reviews,
      path: "/admin/reviews",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Contacts",
      value: stats.contacts,
      path: "/admin/contact",
      color: "from-pink-500 to-pink-700"
    }
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Dashboard 🚀
      </h1>

      {loading ? (
        <p className="text-lg">Loading stats...</p>
      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card, i) => (

            <div
              key={i}
              onClick={() => navigate(card.path)}
              className={`cursor-pointer p-6 rounded-xl text-white shadow-lg bg-gradient-to-r ${card.color}
              transform hover:scale-105 hover:shadow-2xl transition duration-300`}
            >

              <p className="text-sm opacity-80">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {card.value}
              </h2>

              <p className="text-xs mt-2 opacity-70">
                Click to view →
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Dashboard;