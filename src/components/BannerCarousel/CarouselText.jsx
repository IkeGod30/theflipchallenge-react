import "./CarouselText.css";

function CarouselText({ carouselHeading, carouselFeedback , carouselName}) {
  return (
    <>
      <div>
        {/* <h1>Episode 1 Winner</h1> */}
        <h1>{carouselHeading}</h1>
        {/* <p>"I thought it was a joke until I was handed my $1000 winning"</p> */}
        <p>{carouselFeedback}</p>
        <p>
          {/* {" "}
          - <em>Chioma Nkemdilim</em> */}
          <em>{carouselName}</em>
        </p>

        {/* <h1>Episode 2 Winner</h1>
        <p>{secondText}</p>
        <p>
          {" "}
          - <em>Chioma Nkemdilim</em>
        </p> */}
      </div>
    </>
  );
}

export default CarouselText;
