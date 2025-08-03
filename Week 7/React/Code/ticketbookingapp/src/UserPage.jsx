import React from "react";

const UserPage = ({ onLogout }) => {
  return (
    <div>
      <h2>Welcome Back</h2>
      
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserPage;
