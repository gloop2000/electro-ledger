import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // get users
    const fetchUsers = async () => {
      try {
        const allUsers = await api.getAllUsers();
        setUsers(allUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  });
  console.log("Home loaded");
  return (
    <div>
      <h1>Home screen</h1>
      <Link to="/user">Go to User Page</Link>
      <h2>All Users:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.username}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
