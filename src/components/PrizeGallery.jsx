import Prize from "./Prize";
import PrizeImg from "./PrizeImg";
import { prize } from "./Data";
import { useState } from "react";
import laptop from "./assets/laptop.jpg";
import dollar from "./assets/dollar.jpg";
import accra from "./assets/accra-min.jpg";
import airtime from "./assets/airtime-min.jpg";
import money from "./assets/money-min.jpg";
import iphone from "./assets/iphone14-min.jpg";
import laptop_ from "./assets/laptop-min.jpg";
import naira from "./assets/naira-min.jpg";
import rent from "./assets/rent-min.jpg";
import scholarship from "./assets/scholarship-min.jpg";
import vacation from "./assets/vacate.jpg";
import voucher from "./assets/voucher-min.jpg";
import england from "./assets/england2-min.jpg";

// import { Row, Col, Card } from 'antd';
// import { row, col } from "react-bootstrap";
import "./styles.css";

const prizeClick = () => {
  const wini = document.getElementsByClassName("pryze"); //pass function prop to each element

  for (let y = 0; y < wini.length; y++) {
    wini[y].addEventListener("click", quizLoad, false); // pass quizload as onClick function prop
  }
};

function quiziFrame() {
  window.open("Quiz_Form.html", "_self"); //Load page for actual quiz
}

function quizLoad() {
  // User to confirm that he/she wants to proceed

  // if (
  //   !confirm(
  //     "Dear user, do you wish to be transferred to the quiz for the contest?"
  //   )
  // ) {
  //   quiziFrame.preventDefault();
  // }

  // The quiz iframe function is called
  quiziFrame();
}

// Disable images for prizes that are not yet available for the challenge

const unavailable = document.getElementsByClassName("disable"); //pass function prop

for (let z = 0; z < unavailable.length; z++) {
  unavailable[z].addEventListener("click", noquizload, false); //use onClick prop
}

function noquizload() {
  alert(
    "Dear user, this prize is not available at the moment. Please select the prizes with green borders."
  );
}

function PrizeGallery({ resource, change, change2, change3, change4, pic }) {
  // const [Show, setShow] = useState(false);

  // const source = [
  //   "https://www.bbc.com",
  //   "https://www.go.com",
  //   "https://www.info.com",
  //   "https://www.cnn.com",
  // ];

  // const [Url, setUrl] = useState("https://www.theflipchallenge.com"); // State for iframe src

  // const [Url, setUrl] = useState(Array(12).fill(null)); // State for iframe src

  // function changeSrc() {
  //   setUrl(source[1]);
  // }
  // function changeSrc2() {
  //   setUrl(source[2]);
  // }

  // function changeSrc3() {
  //   setUrl(source[3]);
  // }

  // function Showing() {
  //   setShow(true);
  // }

  // function showTwo() {
  //   setShow(false);
  // }

  // console.log(Show);

  return (
    <>
      {/* <div>
        {Show ? (
          <h1 style={{ color: "tomato" }}>I am showing</h1>
        ) : (
          <h1 style={{ color: "green" }}>I am NOT showing</h1>
        )}
      </div> */}

      {/* <button onClick={Showing}>One</button>
      <button onClick={showTwo}>Two</button>
      <button onClick={changeSrc}>Three</button>
      <button onClick={changeSrc2}>Four</button>
      <h1>{Url}</h1> */}

      <h2 className="text-center mt-3 PrizeHead">Prize Gallery</h2>

      <section className="container-lg">
        <div className="row mainRow">
          <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure className="disable" onClick={noquizload}>
              <img className="notReady" src={vacation} />
              {/* <PrizeImg /> */}
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'NA'"
              data-bs-placement="top"
            >
              Apple Iphone 15
            </figcaption>
          </div>
          <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure className="disable" onClick={quiziFrame}>
              <img className="notReady" height="160" width="300" src={dollar} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'NA'"
              data-bs-placement="top"
            >
              Toyota Corolla Sedan
            </figcaption>
          </div>
          <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure className="disable" onClick={change2}>
              <img className="notReady" src={england} onClick={change2} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'NA'"
              data-bs-placement="top"
            >
              Vacation in London
            </figcaption>
          </div>
          <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure className="disable" onClick={change3}>
              <img className="notReady" src={laptop_} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'NA'"
              data-bs-placement="top"
            >
              Brand New HP Laptop
            </figcaption>
          </div>
          <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure className="pryze" onClick={change4}>
              <img className="ready" src={money} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'Purple Hibiscus by Ngozi Chimamanda Adichie'"
              data-bs-placement="top"
            >
              One Thousand Dollars
            </figcaption>
          </div>
          <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure className="disable" onClick={change(1)}>
              <img className="notReady" src={scholarship} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'NA'"
              data-bs-placement="top"
            >
              Tertiary Scholarship
            </figcaption>
          </div>
          <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure className="disable" onClick={change(0)}>
              <img className="notReady" src={rent} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'NA'"
              data-bs-placement="top"
            >
              One-year Rent
            </figcaption>
          </div>
          <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure className="disable" onClick={change(2)}>
              <img className="notReady" src={iphone} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'NA'"
              data-bs-placement="top"
            >
              100, 000 naira Boutique Voucher
            </figcaption>
          </div>
          <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure className="disable" onClick={change(3)}>
              <img className="notReady" src={naira} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'Things Fall Apart by Chinua Achebe'"
              data-bs-placement="top"
            >
              20, 000 naira cash
            </figcaption>
          </div>
          <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure className="disable" onClick={change(4)}>
              <img className="notReady" src={airtime} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'Things Fall Apart by Chinua Achebe'"
              data-bs-placement="top"
            >
              2, 000 naira Call Airtime
            </figcaption>
          </div>
          <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure className="disable">
              <img className="notReady" src={voucher} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'NA'"
              data-bs-placement="top"
            >
              50, 000 naira Shopping Voucher
            </figcaption>
          </div>
          <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure className="disable" onClick={change(5)}>
              <img className="notReady" src={accra} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'The Merchant of Venice by William Shakespeare'"
              data-bs-placement="top"
            >
              Vacation in Ghana
            </figcaption>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrizeGallery;
