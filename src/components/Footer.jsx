import "./Footer.css";
import { BrowserRouter, Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">
              Copyright &copy; Zillion Services Ltd 2025
            </div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.twitter.com/theflipchall"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.facebook.com/profile.php?id=100092369855002"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.instagram.com/flipchall/"
                aria-label="LinkedIn"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="text-decoration-none me-3 legal" href="faq">
                {/* <Link className="text-decoration-none me-3 legal" to="/"></Link> */}
                Faq
              </a>
              <a
                className="text-decoration-none me-3 legal"
                href="privacy.html"
              >
                Privacy Policy
              </a>
              <a className="text-decoration-none legal" href="Terms.html">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* <div className="footer-div">
      <nav className="footer-nav">
        <ul>
          <li className="nav-li">
            <a href="#" className="footer-a">
              Media
            </a>
          </li>
          <li className="nav-li">
            <a href="#" className="footer-a">
              Privacy
            </a>
          </li>
          <li className="nav-li">
            <a href="#" className="footer-a">
              Legal
            </a>
          </li>
          <li className="nav-li">
            <a href="#" className="footer-a">
              Terms
            </a>
          </li>
        </ul>
      </nav>
      <div className="copyright">
        <p>Copyright &copy; Zillion Services 2024</p>
      </div>
    </div> */}
    </>
  );
}

export default Footer;
