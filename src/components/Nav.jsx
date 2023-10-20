import "./Nav.css";

import { CiCircleChevRight } from "react-icons/ci";

function Nav() {
  return (
    <header className="priNav">
      <nav className="flexContainer">
        <a className="brand" href="#">
          The Flip Challenge
        </a>
        <ul className="main-nav-ul">
          <li>
            <a href="#">
              <CiCircleChevRight style={{ color: "white", fontSize: "50px" }} />
              How to Win
            </a>
          </li>
          <li>
            <a href="#">
              <CiCircleChevRight style={{ color: "white", fontSize: "50px" }} />
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
