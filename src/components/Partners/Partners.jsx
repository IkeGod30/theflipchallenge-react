import "./Partners.css";

// Image Imports for sponsors //
import library from "../assets/libry.png";
import walmart from "../assets/walmart_.png";
import target from "../assets/target.png";
import barnes from "../assets/barnes.png";

function PartnerBanner() {
  return (
    <div className="partners">
      <h2>OUR SPONSORSHIP PARTNERS</h2>
      <div>
        <marquee behavior="scroll" direction="left">
          <img src={library} alt="logo of Richardson Public Library" />
          <img src={walmart} alt="logo of Walmart" />
          <img src={target} alt="logo of Target" />
          <img src={barnes} alt="logo of Barnes and Noble Bookshop" />
        </marquee>
      </div>
    </div>
  );
}

export default PartnerBanner;
