import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Userloginsection.css";

const Userloginsection = ({ setLoginsuccess,setuserdetail,setIsdisable }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checking = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Ensure stored values are parsed correctly if they are JSON strings
    const usernames = storedUsername ? JSON.parse(storedUsername) : [];
    const passwords = storedPassword ? JSON.parse(storedPassword) : [];

    // Check if the entered username and password match the stored values
    if (usernames.includes(username) && passwords.includes(password)) {
      setLoginsuccess(true);
      setuserdetail(username[0] + username[1])
      setIsdisable(false)
      if(setLoginsuccess(true)){
        setIsdisable(false)
      }
    } else {
      alert("Invalid username or password");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    checking();
  };

  return (
    <div className="user-login-section">
      <h1>Welcome to the user login section</h1>
      <form onSubmit={handleChange}>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <button>
        <Link to="/signup">Signup</Link>
      </button>
    </div>
  );
};

export default Userloginsection;
