import React, { useState } from "react";
import "./register.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="sign-in-page">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Contact No:
          <input
          type="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit"><a href="login">Sign In</a></button>
      </form>
    </div>
  );
};
export default Register;