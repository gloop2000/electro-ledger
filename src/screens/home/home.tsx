import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home screen</h1>
      <Link to="/user">Go to User Page</Link>
    </div>
  );
};

export default Home;
