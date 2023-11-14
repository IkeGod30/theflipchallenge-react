import "./Faq.css";
import faqImg from "../../components/assets/faq.jpg";

function Faq() {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>

      <div className="row container-fluid faqCont">
        <div className="col-sm-12">
          <img className="imgFaq" src={faqImg} />
        </div>
      </div>

      <div className="container-fluid faqText">
        <ul>
          <li>
            <strong>Is there an age restriction?</strong>
            <br />
            Answer: You must be of legal age to participate in the contest
          </li>
          <li>
            <strong>Can a winner transfer prizes to someone else?</strong>
            <br />
            Answer: Wiinnings are not transferable. Only the winner can claim
            the prize
          </li>
          <li>
            <strong>Are prizes convertible?</strong>
            <br />
            Answer: No. No prizes will be converted into any other value
          </li>
          <li>
            <strong>Is there a deadline to claim a won prize?</strong>
            <br />
            Answer: A winner must claim his prize within 30 days after the
            winning is published
          </li>
          <li>
            <strong>Are prizes taxable?</strong>
            <br />
            Answer: Winnings are subject to the applicable tax policies in the
            jurisdiction.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Faq;
