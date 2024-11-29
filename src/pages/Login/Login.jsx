import "./Login.css";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { setUser } from "../../features/iframeSrc/auth-slice";
import { AuthApi } from "../../api/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "../../utils/sweetalert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const user = await AuthApi.signin(email, password);
      dispatch(setUser(user));
      toast("success", "Successful Login");
      navigate("/gallery");
    } catch (err) {
      toast("error", "Invalid login credentials");
      navigate("/login");
    }
  };

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
          Don't have an account? <Link to={"/signup"}>Sign Up</Link>
        </span>
        <span>
          Forgot password? <Link to={"/reset"}>Reset Password</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
