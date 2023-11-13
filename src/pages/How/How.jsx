import { Link } from "react-router-dom";
import "./How.css";

function HowtoWin() {
  return (
    <>
      <div>
        <h4>Home</h4>
        <Link to="/">Home</Link>
      </div>
      <div>
        <h4>How to Win</h4>
        <Link to="/how">How To Win</Link>
      </div>
      <div>
        <h4>Contact Us</h4>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div>
        <h4>Quiz Form</h4>
        <Link to="/quiz">Play the Quiz</Link>
      </div>

      <section>
        <div className="container howColDiv">
          <div className="container-fluid row">
            <div className="col-sm-4">
              <h2 className="howColText">Select the Prize</h2>
              <img className="imgSelect" src="select.jpg" />
              <br />
              <br />

              <ul className="listStyle">
                <li>Each prize is displayed and described in the home page</li>
                <br />
                <li>
                  Since the quiz questions are generated wholly from featured
                  books, hover the mouse over each prize's description for
                  details of the book from which each set of questions is
                  generated
                </li>
                <br />
                <li>
                  Then once you decide on the prize you wish to win, click on
                  the desired prize from the gallery to be routed to the quiz
                  page
                </li>
                <br />
                <li>
                  Respond to the prompt by clicking{" "}
                  <b>
                    <em>OK</em>
                  </b>
                  , and this will take you to the quiz page
                </li>
              </ul>
            </div>

            <div className="col-sm-4">
              <h2 className="howColText">Answer the Questions</h2>
              <img className="imgSelect" src="question_.jpg" />
              <br />
              <br />

              <ul className="listStyle">
                <li>
                  On the quiz page, log in to play if you are already registered
                </li>
                <br />
                <li>
                  If you have not registered, you have to register before you
                  can log in to participate in the contest. Registration is
                  completely free!
                </li>
                <br />
                <br />
                <li>
                  Once you log in, click on{" "}
                  <b>
                    <em>Start Quiz</em>
                  </b>{" "}
                  to load the quiz questions.
                </li>
                <br />
              </ul>
            </div>

            <div className="col-sm-4">
              <h2 className="howColText">Win the Prize</h2>
              <img className="imgSelect" src="win.jpg" />
              <br />
              <br />
              <ul className="listStyle">
                <li>
                  In the quiz, select your answers for each timed question
                </li>
                <br />
                <li>
                  At the end of the quiz, your score will show on the quiz page.
                  The questions carry equal marks, unless otherwise indicated.
                  You can play each quiz only once per session
                </li>
                <br />
                <li>
                  If two or more contestants score the same points, the
                  contestants with the same highest scores will keep
                  participating in follow-up quizes until someone scores the
                  highest points. The winner is the person with the highest
                  accurate and most prompt answers. The contest is based on
                  speed and accuracy. There is no element of chance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowtoWin;
