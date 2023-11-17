import "./Nav.css";

import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
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

        {/* <section className="nav-flex">
          <div>
            <BrowserRouter>
              <h4>Home</h4>
              <Link to="/how">How To Win</Link>
            </BrowserRouter>
          </div>
          <div>
            <BrowserRouter>
              <h4>Contact Us</h4>
              <Link to="/how">Contact Us</Link>
            </BrowserRouter>
          </div>
          <div>
            <BrowserRouter>
              <h4>Quiz</h4>
              <Link to="/quiz">Quiz Page</Link>
            </BrowserRouter>
          </div>

          <div>
            <BrowserRouter>
              <h4>Frequently Asked Questions</h4>
              <Link to="/faq">Faq Page</Link>
            </BrowserRouter>
          </div>
        </section> */}

        <Outlet />
      </header>
    </>
  );
}

export default Nav;
