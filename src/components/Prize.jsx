import PrizeImg from "./PrizeImg";
import laptop from "./assets/laptop.jpg";
import Bk from "./assets/book.jpg";

import "./Prize.css";

function Prize({ pic, description, quiz, onClick }) {
  return (
    <>
      <div>
        {/* <img src={PrizeImg} alt="A laptop computer" width="250" onClick={onClick} /> */}
        <PrizeImg pic={laptop} />
        {/* <PrizeImg pic2={Bk} /> */}
        {/* <p>{pic}</p> */}
        <div className="prize-div">
          {/* <p>{description}</p>
          <p>{quiz}</p> */}
        </div>
      </div>
    </>
  );
}

export default Prize;
