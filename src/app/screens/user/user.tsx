import React from "react";
import { Link } from "react-router-dom";

const User: React.FC = () => {
  console.log("User loaded");
  return (
    <div>
      <h1>User screen</h1>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default User;
