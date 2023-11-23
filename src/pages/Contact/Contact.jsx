import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <>
      {/* <div>
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

      <div>
        <h4>Quiz Form</h4>
        <Link to="/quiz">Play the Quiz</Link>
      </div> */}

      <section>
        {/* <h2>CONTACT US</h2>
        <form className="form-control-sm">
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form> */}

        <div className="contact">
          <h3>CONTACT US</h3>
          <hr />
        </div>

        <div className="button">
          <button className="btn btn-primary btnContact">
            Click to drop us a line!
          </button>
        </div>

        <br />

        <form className="container cont">
          <div className="row mb-3 formInputs">
            <label
              for="inputEmail"
              className="col-sm-2 col-form-label inputs"
            ></label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control inputs inputColor"
                id="inputEmail"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className="row mb-3 formInputs">
            <label
              for="inputName"
              className="col-sm-2 col-form-label inputs"
            ></label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control inputs inputColor"
                id="inputName"
                placeholder="Full Name"
                required
              />
            </div>
          </div>
          <div className="row mb-3 formInputs">
            <label
              for="textarea"
              className="col-sm-2 col-form-label inputs"
            ></label>
            <div className="col-sm-10">
              <textarea
                className="form-control inputs inputColor"
                id="inputText"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>

          <div className="row mb-3 formInputs">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input
                  className="form-check-input inputs"
                  type="checkbox"
                  id="checkRemember"
                />
                <label
                  className="form-check-label inputs checkText"
                  for="checkRemember"
                >
                  Send me copy of this message
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 offset-sm-2">
              <button type="submit" className="btn btn-primary button2">
                Send
              </button>
              <button type="reset" className="btn btn-primary button2">
                Reset
              </button>
            </div>
          </div>
        </form>
        <hr />
      </section>
    </>
  );
}

export default Contact;
