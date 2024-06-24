import "./Nav.css";

import Login from "../../pages/Login/Login";

import { Outlet, Link } from "react-router-dom";
import { CiCircleChevRight } from "react-icons/ci";

function Nav() {
  return (
    <>
      <section className="priNav">
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top flexContainer"
          id="mainNav"
        >
          <div className="container-fluid">
            <a className="brand" href="/">
              {" "}
              The Flip Challenge
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/how">
                    How to Win
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
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
