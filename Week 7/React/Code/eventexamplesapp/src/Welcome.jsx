import React from "react";

const Welcome = () => {
  const sayMessage = (msg) => {
    alert(`Message: ${msg}`);
  };

  return (
    <div>
      <h2>Welcome Message</h2>
      <button onClick={() => sayMessage("Welcome")}>Say Welcome</button>
    </div>
  );
};

export default Welcome;
