import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import { setUser } from "../../features/iframeSrc/auth-slice";
import { AuthApi } from "../../api/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "../../utils/sweetalert";

import "./Reset.css";

function Reset() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    if (password === password2) {
      e.preventDefault();
      //   console.log("submitted", email, password);
      try {
        const user = await AuthApi.signup(email, password);
        dispatch(setUser(user));
        toast("success", "Successful Signup");
        navigate("/");
      } catch (err) {
        toast("error", "Sign up unsuccessful");
        // navigate("/");
      }
    } else {
      toast("error", "Password don't match");
      //   navigate("/signup");
    }
  };
  return (
    <div className="formContainer">
      <h2 className="title">
        Sign Up <br />
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

        <input
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
          className="input"
          type="password"
          placeholder="Repeat Password"
        />
        <Button type="submit" className="button" variant="contained">
          Reset
        </Button>
        {/* <span>
          Already have an account? <Link to={"/login"}>Sign In</Link>
        </span> */}
      </form>
    </div>
  );
}

export default Reset;
