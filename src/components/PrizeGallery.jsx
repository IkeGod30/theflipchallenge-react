import { useState } from "react";

import Prize from "./Prize";
import PrizeImg from "./PrizeImg";
import { prize } from "./Data";
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
import { BrowserRouter, Link, Outlet } from "react-router-dom";

import Nav from "./Nav/Nav";
import BannCarousel from "./BannerCarousel/BannerCarousel";
// import { Row, Col, Card } from 'antd';
// import { row, col } from "react-bootstrap";
import "./styles.css";
// import "./Contact.css";

const prizeClick = () => {
  const wini = document.getElementsByClassName("pryze"); //pass function prop to each element

  for (let y = 0; y < wini.length; y++) {
    wini[y].addEventListener("click", quizLoad, false); // pass quizload as onClick function prop
  }
};

const quiziFrame = () => {
  window.open("quiz", "_self"); //Load page for actual quiz
};

// function quiziFrame() {
// const [frameUrl, setframeUrl] = useState();

// ******** Put the iframe src change state function here ******* ////////

// window.open("quiz", "_self"); //Load page for actual quiz
// }

// function changeframeUrl() {
//   setframeUrl("www.yahoo.com");
// }

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

function PrizeGallery({
  resource,
  // change,
  // change2, //
  // change3,
  // change4,
  // pic,
  // sus,
  // source,
  // alter,
  // theUrl,
  LoadUrl,
  changeUrl,
  // source,
}) {
  const source = [
    {
      quiz: "https://www.onlinequizcreator.com/the-merchant-of-venice/quiz-493884",
    },
    { quiz: "https://www.onlinequizcreator.com/animal-farm/quiz-493767" },
    { quiz: "https://www.onlinequizcreator.com/purple-hibiscus/quiz-492496" },
    { quiz: "https://www.onlinequizcreator.com/things-fall-apart/quiz-492336" },
    { quiz: "https://www.onlinequizcreator.com/animal-farm/quiz-492141" },
  ];
  const [Url, setUrl] = useState(source); //////////

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
      <BannCarousel />

      {/* <Nav /> */}
      {/* <div>
        <h4>Home</h4>
        <Link to="/how">How To Win</Link>
      </div>
      <div>
        <h4>Contact Us</h4>
        <Link to="/how">Contact Us</Link>
      </div>
      <div>
        <h4>Quiz</h4>
        <Link to="/quiz">Quiz Page</Link>
      </div>

      <div>
        <h4>Frequently Asked Questions</h4>
        <Link to="/faq">Faq Page</Link>
      </div> */}

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

      <section className="container-lg">
        <marquee>
          <h2 className="text-center mt-3 PrizeHead">Prize Gallery</h2>
        </marquee>
        <div className="row mainRow">
          <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure className="disable" onClick={noquizload}>
              {/* <figure className="disable" onClick={() => noquizload(resource)}> */}
              {/* <figure className="disable" onClick={LoadUrl}> */}
              {/* <figure className="disable" onClick={noquizload}> */}
              <img className="notReady" alt="cruise" src={vacation} />
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
            <figure className="disable" onClick={changeUrl}>
              {/* <figure
              className="disable"
              onClick={() => {
                setUrl(source[0]);
              }}
            > */}
              {/* <figure className="disable" onClick={LoadUrl}> */}
              {/* <figure className="disable" onClick={LoadUrl}> */}
              {/* <figure className="disable" onClick={quiziFrame}> */}
              <img
                // onClick={quizLoad}
                className="notReady"
                alt="dollar"
                height="160"
                width="300"
                src={dollar}
              />
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
            <figure className="disable" onClick={quizLoad}>
              {/* <figure className="disable" onClick={change4}> */}
              <img className="notReady" alt="england" src={england} />
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
            <figure className="disable" onClick={LoadUrl}>
              {/* <figure className="disable" onClick={change3}> */}
              <img className="notReady" alt="laptop computer" src={laptop_} />
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
            <figure className="pryze" onClick={""}>
              <img className="ready" alt="money" src={money} />
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
            <figure className="disable" onClick={""}>
              <img className="notReady" alt="student" src={scholarship} />
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
            <figure className="disable">
              <img className="notReady" alt="lease document" src={rent} />
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
            <figure className="disable">
              <img className="notReady" alt="iphone" src={iphone} />
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
            <figure className="disable">
              <img className="notReady" alt="naira" src={naira} />
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
            <figure className="disable">
              <img className="notReady" alt="airtime" src={airtime} />
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
              <img className="notReady" alt="voucher" src={voucher} />
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
            <figure
              className="disable"
              onClick={() => {
                setUrl({ quiz: source[1] }); ///
              }}
            >
              <img
                // onClick={quizLoad}
                className="notReady"
                alt="vacation"
                src={accra}
              />
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
        {/* <Outlet /> */}
      </section>
    </>
  );
}

//  #### Put all data in a separate util directory and export to components that need them ###

// const frameUrl = {
//   cruise: source[0],
//   corolla: source[1],
//   london: source[2],
//   laptop: source[3],
//   onethousandD: source[4],
//   scholarship: source[5],
//   rent: source[6],
//   voucher: source[7],
//   twentyTNaira: source[8],
//   airtime: source[9],
//   voucher2: source[10],
//   ghana: source[11],
// };

export default PrizeGallery;
