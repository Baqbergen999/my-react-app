import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FlightContext } from "./FlightContext";
import "./FlightBooking.css";

function FlightBooking() {
  const { flightId } = useParams();
  const { flights, bookings, setBookings } = useContext(FlightContext);
  const [flight, setFlight] = useState(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const selected = flights.find((f: any) => f.id === flightId);
    setFlight(selected);
  }, [flights, flightId]);

  const handleBooking = () => {
    if (!name || !date) {
      setMessage("Please fill in all fields!");
      return;
    }
    setBookings([...bookings, { flightId, name, date }]);
    setMessage("Booking successful!");
  };

  if (!flight) return <p>Loading...</p>;

  return (
    <div className="container">
      <div>
        <h2>Flight Details</h2>
        <p>
          {flight.from} → {flight.to}
        </p>
        <p>Price: {flight.price} ₸</p>
      </div>
      <div>
        <h2>Booking</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="button" onClick={handleBooking}>
          Confirm
        </button>
        <button className="button" onClick={() => navigate("/")}>
          Back
        </button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default FlightBooking;
