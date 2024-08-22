import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../features/iframeSrc/auth-slice";
import { AuthApi } from "../../../api/auth";

import "./Log.css";

function Logout() {
  const dispatch = useDispatch();

  const logout = () => {
    AuthApi.signout();
    dispatch(setUser(null));
  };
  return (
    <div>
      <ul>
        <li className="nav-item">
          <a onClick={logout} className="nav-link">
            Logout{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Logout;
