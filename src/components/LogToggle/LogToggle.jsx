import React from "react";
import { useState } from "react";
import { AuthApi } from "../../api/auth";
import { setUser } from "../../features/iframeSrc/auth-slice";
import { selectUser } from "../../features/iframeSrc/authSelectors";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./LogToggle.css";

function LogToggle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    AuthApi.signout();
    dispatch(setUser(null));
    
  };
  const [btnTitle, setbtnTitle] = useState("login");

  function challenge() {
    navigate("/");
  }

  function login() {
    if (btnTitle === "login") {
      //   setbtnTitle("logout");
      //   navigate("/login");
      //   challenge();
      alert("Logging In");
      setbtnTitle("logout");
    } else if (btnTitle === "logout") {
      logout();
      //   challenge();
      setbtnTitle("login");
      //   alert("Logging Out");

      //   challenge();
    }
  }

  return (
    <div>
      <button className="btnT" onClick={login}>
        {btnTitle}
      </button>
    </div>
  );
}

export default LogToggle;
