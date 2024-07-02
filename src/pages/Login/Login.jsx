import "./Login.css";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    console.log("submitted", email, password);
    e.preventDefault();
  };

  console.log(email, password);
  return (
    <div className="formContainer">
      <h2 className="title">
        Sign In <br />
        to play and win
      </h2>
      <form onSubmit={submit} className="formGroup">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="input"
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="input"
          type="password"
          placeholder="Password"
        />
        <Button type="submit" className="button" variant="contained">
          Sign In
        </Button>
        <span>
          Don't have an account? <Link>Sign Up</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
