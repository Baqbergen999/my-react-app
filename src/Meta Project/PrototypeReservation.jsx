import React, { useState } from "react";

const PrototypeReservation = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "1",
    name: "",
    contact: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4">Reserve a Table</h2>
      
      {submitted ? (
        <div className="text-center text-green-600 font-semibold">
          Reservation Confirmed! 🎉
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Select Date</label>
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700">Select Time</label>
            <input 
              type="time" 
              name="time" 
              value={formData.time} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700">Number of Guests</label>
            <input 
              type="number" 
              name="guests" 
              value={formData.guests} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              min="1" 
              max="10" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700">Your Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              placeholder="Enter your name" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700">Contact Information</label>
            <input 
              type="email" 
              name="contact" 
              value={formData.contact} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              placeholder="Enter your email or phone" 
              required 
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Confirm Reservation
          </button>
        </form>
      )}
    </div>
  );
};

export default PrototypeReservation;