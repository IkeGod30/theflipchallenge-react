import "./CarouselText.css";

function CarouselText({ secondText }) {
  return (
    <>
      <div>
        <h1>Episode 1 Winner</h1>
        <p>"I thought it was a joke until I was handed my $1000 winning"</p>
        <p>
          {" "}
          - <em>Chioma Nkemdilim</em>
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
