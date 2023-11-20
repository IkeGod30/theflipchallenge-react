import "./Nav.css";

// import Frame from "../../pages/QuizForm/Quiz";
// import Contact from "../../pages/Contact/Contact";
// import HowtoWin from "../../pages/How/How";
// import Faq from "../../pages/Faq/Faq";
// import ShowFrame from "../../components/TheFrame";

import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { CiCircleChevRight } from "react-icons/ci";

function Nav() {
  return (
    <>
      <header className="priNav">
        <nav className="flexContainer">
          {/* <BrowserRouter> */}
          <Link className="brand" to="/">
            The Flip Challenge
          </Link>
          {/* </BrowserRouter> */}
          <ul className="main-nav-ul">
            <li className="nav-li">
              {/* <BrowserRouter> */}
              <Link to="/how">
                <CiCircleChevRight
                  style={{ color: "white", fontSize: "50px" }}
                />
                How to Win
              </Link>
              {/* </BrowserRouter> */}
            </li>
            <li className="nav-li">
              {/* <BrowserRouter> */}
              <Link to="/contact">
                <CiCircleChevRight
                  style={{ color: "white", fontSize: "50px" }}
                />
                Contact Us
              </Link>
              {/* </BrowserRouter> */}
            </li>
          </ul>
        </nav>

        {/* <nav>
          <ul>
            <li>Home</li>
            <li>Quiz</li>
            <li>Contact</li>
          </ul>
        </nav> */}

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
    </>
  );
}

export default Nav;
