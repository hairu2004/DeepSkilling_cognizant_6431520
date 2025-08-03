import React from "react";

const SyntheticClick = () => {
  const handleClick = (event) => {
    console.log("Synthetic event object:", event);
    alert("I was clicked!");
  };

  return (
    <div>
      <h2>Synthetic Event</h2>
      <button onClick={handleClick}>OnPress</button>
    </div>
  );
};

export default SyntheticClick;
