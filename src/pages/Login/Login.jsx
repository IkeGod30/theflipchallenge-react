import "./Login.css";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="formContainer">
      <h2 className="title">
        Sign In <br />
        to play and win
      </h2>
      <form className="formGroup">
        <input className="input" type="text" placeholder="Email" />
        <input className="input" type="password" placeholder="Password"/>
        <Button className="button" variant="contained">
          Sign In
        </Button>
        <span>
          Don't have an account? <Link>Sign Up</Link>
        </span>
      </form>
    </div>
    // <div className="container">
    //   <div className="header">
    //     <div className="text">Sign Up</div>
    //     <div className="underline"></div>
    //   </div>
    //   <div className="inputs">
    //     <div className="input">
    //       <img src={""} alt={""} />
    //       <input type="text" />
    //     </div>
    //     <div className="input">
    //       <img src={""} alt={""} />
    //       <input type="email" />
    //     </div>
    //     <div className="input">
    //       <img src={""} alt={""} />
    //       <input type="password" />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Login;
