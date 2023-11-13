import "./Nav.css";

import { Outlet, Link, BrowserRouter } from "react-router-dom";
import { CiCircleChevRight } from "react-icons/ci";

function Nav() {
  return (
    <>
      <header className="priNav">
        <nav className="flexContainer">
          <BrowserRouter>
            <Link className="brand" to="/">
              The Flip Challenge
            </Link>
          </BrowserRouter>
          <ul className="main-nav-ul">
            <li className="nav-li">
              <BrowserRouter>
                <Link to="/how">
                  <CiCircleChevRight
                    style={{ color: "white", fontSize: "50px" }}
                  />
                  How to Win
                </Link>
              </BrowserRouter>
            </li>
            <li className="nav-li">
              <BrowserRouter>
                <Link to="/contact">
                  <CiCircleChevRight
                    style={{ color: "white", fontSize: "50px" }}
                  />
                  Contact Us
                </Link>
              </BrowserRouter>
            </li>
          </ul>
        </nav>

        <Outlet />
      </header>
    </>
  );
}

export default Nav;
