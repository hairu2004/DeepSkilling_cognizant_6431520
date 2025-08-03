import React from "react";
import "./App.css";

function App() {
  const office = {
    name: "Urban Office",
    rent: 55000,
    address: "Indiranagar, Bangalore",
  };

  const officeList = [
    { name: "Skyline Space", rent: 72000, address: "MG Road, Bangalore" },
    { name: "Tech Hub", rent: 45000, address: "Electronic City" },
    { name: "Green Tower", rent: 88000, address: "Whitefield" },
  ];

  return (
    <div className="App">
      <h1>Office Space Rental Listings</h1>

      <img
        src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a"
        alt="Office Space"
        width="300" height="300"
      />

      <h2>{office.name}</h2>
      <p>Address: {office.address}</p>
      <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
        Rent: ₹{office.rent}
      </p>

      <h2>Available Spaces</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.address}</p>
            <p style={{ color: item.rent < 60000 ? "red" : "green" }}>
              Rent: ₹{item.rent}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
