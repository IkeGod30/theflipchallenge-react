import "./Nav.css";

import book from "../assets/bookIcon.jpg";

import Login from "./Log/Login";
import Logout from "./Log/Logout";
import LogToggle from "../LogToggle/LogToggle";

import { Outlet, Link } from "react-router-dom";
import { CiCircleChevRight } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../features/iframeSrc/authSelectors";
import { AuthApi } from "../../api/auth";
import { setUser } from "../../features/iframeSrc/auth-slice";

import { useState } from "react";

function Nav() {
  const [logstatus, setlogstatus] = useState(false); //
  const [isLogged, setIsLogged] = useState("login");
  const dispatch = useDispatch();
  const logout = () => {
    AuthApi.signout();
    dispatch(setUser(null));
    // changeLog();
    // setlogstatus(true); //
  };

  function changeLog() {
    if (logstatus) {
      setIsLogged("login");
      // return <p>Logged In</p>;
    }
    setIsLogged("signout");
    // return <p>Logged Out</p>;
  }

  return (
    <>
      <section className="priNav">
        <nav
          className="navbar navbar-expand-lg navbar-dark flexContainer"
          id="mainNav"
        >
          <div className="container-fluid">
            <a className="brand" href="/">
              {" "}
              The Flip Challenge
            </a>
            {/* <a className="brand" href="/"><img src={book} width="100" height="100"/>
            </a> */}
            <button
              style={{ color: "inherit" }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/how">
                    How to Win
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li> */}
                {/* <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li> */}
                {/* <li className="nav-item">
                  <Link className="nav-link" href="/" onClick={logout}>
                    Logout
                  </Link>
                  <LogToggle />
                  <Logout />
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* <header className="priNav">
        <nav className="flexContainer">
          <a className="brand" href="/">
            The Flip Challenge
          </a>
          <ul className="main-nav-ul">
            <li className="nav-li">
              <a href="/how">How to Win</a>
              <CiCircleChevRight style={{ color: "white", fontSize: "50px" }} />
              How to Win
            </li>
            <li className="nav-li">
              <a href="/contact">Contact Us</a>
              <CiCircleChevRight style={{ color: "white", fontSize: "50px" }} />
              Contact Us
            </li>
            <li className="nav-li">
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header> */}
    </>
  );
}

export default Nav;
