import React, { useState } from "react";
import { Link } from "react-router-dom";

const User: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleUsernameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const newUser = { username, email };
    api.addUser(newUser);
    setUsers([...users, newUser]);
    setUsername("");
    setEmail("");
  };
  const ping = () => {
    api.ping().then((res) => {
      console.log(res);
    });
  };

  console.log("User loaded");
  return (
    <div>
      <h1>User screen</h1>
      <button onClick={ping}>Ping</button>
      <Link to="/">Go to Home Page</Link>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Add User</button>
      </form>
      <div>
        <h2>Users:</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <strong>{user.username}</strong> - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
