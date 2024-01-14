import "./Faq.css";
import faqImg from "../../components/assets/faq.jpg";
import FaqAccordion from "./Accordion";

function Faq() {
  return (
    <>
      <img className="imgFaq" src={faqImg} alt="faq image" />

      <FaqAccordion />
    </>
  );
}

export default Faq;
