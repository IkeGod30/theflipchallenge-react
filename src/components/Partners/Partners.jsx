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
          <img src={one} />
          <img src={two} />
          <img src={three} />
        </marquee>
      </div>
    </div>
  );
}

export default PartnerBanner;
