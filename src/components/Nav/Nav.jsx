import "./Nav.css";

import Login from "../../pages/Login/Login";

import { Outlet, Link } from "react-router-dom";
import { CiCircleChevRight } from "react-icons/ci";

function Nav() {
  return (
    <>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/how">How</Link>
        <Link to="/contact">Contact</Link>
      </nav> */}
      <header className="priNav">
        <nav className="flexContainer">
          <a className="brand" href="/">
            The Flip Challenge
          </a>
          {/* <Link className="brand" to="/">
            The Flip Challenge
          </Link> */}
          <ul className="main-nav-ul">
            <li className="nav-li">
              <a href="/how">How to Win</a>
              {/* <Link to="/how">
                <CiCircleChevRight
                  style={{ color: "white", fontSize: "50px" }}
                />
                How to Win
              </Link> */}
            </li>
            <li className="nav-li">
              <a href="/contact">Contact Us</a>
              {/* <Link to="/contact">
                <CiCircleChevRight
                  style={{ color: "white", fontSize: "50px" }}
                />
                Contact Us
              </Link> */}
            </li>
            <li className="nav-li">
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
        {/* <BrowserRouter>
          <Routes>
            <Route path="quiz" element={<ShowFrame />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<Faq />} />
          </Routes>
        </BrowserRouter> */}
        {/* 
        <Outlet /> */}
      </header>
      {/* <Outlet /> */}
    </>
  );
}

export default Nav;
