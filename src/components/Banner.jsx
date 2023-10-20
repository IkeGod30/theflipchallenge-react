import flipping from "./assets/flip.mp4";

function Banner({ video }) {
  return (
    <div className="row bnar">
      <div className="col-sm-12">
        <video
          className="howBannerVideo"
          id="bannar"
          src={flipping}
          autoPlay
          loop
          muted
          poster=""
          type="video/mp4"
        ></video>
      </div>
    </div>
  );
}

export default Banner;
