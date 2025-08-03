import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let pageContent;

  if (isLoggedIn) {
    pageContent = <UserPage onLogout={handleLogout} />;
  } else {
    pageContent = <GuestPage onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <h1> Ticket Booking App</h1>
      {pageContent}
    </div>
  );
}

export default App;
