import CarouselText from "./CarouselText";
import "./BannerCarousel.css";

function BannCarousel() {
  return (
    <>
      <section className="carousel-section">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <img src={laptop} className="d-block w-100" alt={"First"} /> */}
              <CarouselText
                carouselHeading={"Episode 1 Winner"}
                carouselFeedback={
                  "I thought it was a joke until I was handed my $1000 winning"
                }
                carouselName={"- Chioma Nkemdilim"}
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p> */}
              </div>
            </div>
            <div className="carousel-item">
              <CarouselText
                carouselHeading={"Episode 2 Winner"}
                carouselFeedback={
                  "I am so happy to have discovered The Flip Challenge"
                }
                carouselName={"- Stacey Morgan"}
              />
              {/* <CarouselText /> */}
              {/* <img src={} className="d-block w-100" alt={}> */}
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>Episode Two Winner</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div> */}
            </div>
            <div className="carousel-item">
              <CarouselText
                carouselHeading={"Episode 3 Winner"}
                carouselFeedback={"This is fantastic"}
                carouselName={"- Maria Nebo"}
              />
              {/* <img src={} className="d-block w-100" alt={}> */}
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div> */}
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default BannCarousel;
