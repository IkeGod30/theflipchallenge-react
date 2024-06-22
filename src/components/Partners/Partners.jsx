import "./Partners.css";

import library from "../assets/libry.png";
import walmart from "../assets/walmart_.png";
import target from "../assets/target.png";

function PartnerBanner() {
  return (
    <div>
      <h1>Our Partners</h1>
      <div>
        <marquee behavior="scroll" direction="left">
          <img src={library} alt="logo of Richardson Library" />
          <img src={walmart} alt="logo of Walmart" />
          <img src={target} alt="logo of Target" />
        </marquee>
      </div>
    </div>
  );
}

export default PartnerBanner;
