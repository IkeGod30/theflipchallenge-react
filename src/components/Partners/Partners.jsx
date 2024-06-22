import "./Partners.css";

import one from "../assets/libry.png";
import two from "../assets/walmart_.png";
import three from "../assets/target.png";

function PartnerBanner() {
  return (
    <div>
      <h1>Our Partners</h1>
      <div>
        <marquee behavior="scroll" direction="left">
          <img src={one} alt="logo of Richardson Library" />
          <img src={two} alt="logo of Walmart" />
          <img src={three} alt="logo of Target" />
        </marquee>
      </div>
    </div>
  );
}

export default PartnerBanner;
