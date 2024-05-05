import React from "react";
import { Link } from "react-router-dom";

const User: React.FC = () => {
  const ping = () => {
    api.ping();
  };

  console.log("User loaded");
  return (
    <div>
      <h1>User screen</h1>
      <button onClick={ping}>Ping</button>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default User;
