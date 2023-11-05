import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div>
        <h4>Home</h4>
        <Link to="/">Home</Link>
      </div>
      <div>
        <h4>Home</h4>
        <Link to="/how">How To Win</Link>
      </div>
      <div>
        <h4>Contact Us</h4>
        <Link to="/contact">Contact Us</Link>
      </div>
    </>
  );
}

export default Contact;
