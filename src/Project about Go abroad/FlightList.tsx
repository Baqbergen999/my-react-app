import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FlightContext } from "./FlightContext";
import "./App.css";

const mockFlights = [
  { id: "1", from: "New York", to: "Los Angels", price: 450990 },
  { id: "2", from: "Almaty", to: "Dubai", price: 412000 },
  { id: "3", from: "Shymkent", to: "Antalia", price: 399990 },
  { id: "4", from: "Aktau", to: "Abu Dabi", price: 700000 },
];

function FlightList() {
  const { flights, setFlights } = useContext(FlightContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setFlights(mockFlights), 1000);
  }, []);

  const filteredFlights = flights.filter(
    (f: any) =>
      f.from.toLowerCase().includes(search.toLowerCase()) ||
      f.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="list-container">
      <h1 className="title">Flight List</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      {filteredFlights.map((flight: any) => (
        <div key={flight.id} className="card">
          <div className="card-title">
            {flight.from} → {flight.to}
          </div>
          <div className="card-price">{flight.price} KZT</div>
          <button
            className="bron-btn"
            onClick={() => navigate(`/booking/${flight.id}`)}
          >
            Book
          </button>
        </div>
      ))}
    </div>
  );
}

export default FlightList;
