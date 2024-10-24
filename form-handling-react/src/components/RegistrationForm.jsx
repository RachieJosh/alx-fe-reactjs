// src/components/RegistrationForm.jsx
import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }
    // Reset error if validation passes
    setError("");
    // Handle form submission (e.g., send to a mock API)
    console.log({ username, email, password });
    // Clear the form fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
