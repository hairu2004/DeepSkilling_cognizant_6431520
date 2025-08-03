import React, { useState } from "react";

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const converted = parseFloat(rupees) / 90; // assuming 1 Euro = ₹90
    setEuro(converted.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Rupees:{" "}
          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
          />
        </label>
        <button type="submit">Convert</button>
      </form>
      {euro && <p>In Euro: €{euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;
