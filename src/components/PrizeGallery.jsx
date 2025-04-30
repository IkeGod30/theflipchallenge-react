import { useState } from "react";
import { useReducer } from "react"; // REMOVE BEFORE BUILD

import { HashLink as Linkme } from "react-router-hash-link";

import Frame from "../pages/QuizForm/Quiz";
import ResponsiveDrawer from "./Drawer";
import SwipeableTemporaryDrawer from "./Drawer_";

// Image file imports for prizes //

import {
  laptopC,
  dollarC,
  iphoneC,
  cruise,
  shopping,
} from "../features/iframeSrc/quizUrlSlice";

import Prize from "./Prize";
import PartnerBanner from "./Partners/Partners";
import PrizeItem from "./PrizeItemS";
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
import Vacation from "./assets/Vacation.jpg";
import voucher from "./assets/voucher-min.jpg";
import england from "./assets/england2-min.jpg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Loadquiz from "./Quizload";
import { selectUser } from "../features/iframeSrc/authSelectors";
// import { withAuthRequired } from "../../hoc/withAuthRequired";
import { withAuthRequired } from "../hoc/withAuthRequired";
// import { ProtectedFrame } from "../pages/QuizForm/Quiz";

import Nav from "./Nav/Nav";
import BannCarousel from "./BannerCarousel/BannerCarousel";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom';
import { Button } from "antd/es/radio";
import { AuthApi } from "../api/auth";
import { setUser } from "../features/iframeSrc/auth-slice";
import LoggedIn from "../pages/Logged-in-profile/Logged-in-profile";
import LogToggle from "./LogToggle/LogToggle";
import Logout from "./Nav/Log/Logout";

// OLD vanilla JS dev //

const prizeClick = () => {
  const wini = document.getElementsByClassName("pryze"); //pass function prop to each element

  for (let y = 0; y < wini.length; y++) {
    wini[y].addEventListener("click", quizLoad, false); // pass quizload as onClick function prop
  }
};

const quiziFrame = () => {
  // const navigate = useNavigate();
  window.open("quiz", "_self"); //Load page for actual quiz
  // navigate("/login");
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
  // quiziFrame();
  return <Loadquiz />;
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

// function PrizeGallery({ changeUrl, imgClick, framesrc }) {
function PrizeGallery(props) {
  const navigate = useNavigate(); // Remove if not used
  const source = useSelector((state) => state.quiz.value);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(true);

  // const [isLogged, setIsLogged] = useState("");

  // const changeLog = () => {
  //   if (isLogged === "login") {
  //     setIsLogged("logout");
  //   }
  //   setIsLogged("signout");
  // };

  // const logout = () => {
  //   AuthApi.signout();
  //   dispatch(setUser(null));
  // };
  const userProfile = () => {
    return (
      <div
        className="container"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <h3
          style={{
            fontFamily: "Sans-serif",
            color: "grey",
          }}
        >
          Welcome, {user.email}
        </h3>

        {/* <LogToggle /> */}
        {/* {changeLog} */}

        {/* <LogToggle /> */}
        {/* <Link to="#" onClick={logout}>
          Logout
        </Link> */}
      </div>
    );
  };

  // <LoggedIn />;

  // const [Url, dispatch] = useReducer(urlReducer, source); //////////

  // function nairaPrize() {
  //   dispatch({
  //     type: "naira",
  //   });
  // }

  // function dollarPrize() {
  //   dispatch({
  //     type: "dollar",
  //   });
  // }

  // const [Show, setShow] = useState(false);

  return (
    <>
      {/* <ResponsiveDrawer /> */}
      <div
        className="container"
        style={{ display: "flex", justifyContent: "end" }}
      >
        <SwipeableTemporaryDrawer />
      </div>

      <div>{userProfile()}</div>

      <section className="container-lg">
        <h2 className="quizPageTitle">Prize Gallery</h2>
        <div className="row prizeRow">
          <div className="col-sm-3">
            <Linkme className="linkme" to="#Quiz_Portal">
              <PrizeItem
                onClick={() => dispatch(dollarC())}
                image={vacation}
                description={"Cruise Tour NY-Miama"}
                alt={"Picture of Cruise Ship"}
                title={"Source: Purple Hibiscus by Ngozi Chimamanda Adiche"}
              />
            </Linkme>
          </div>
          <div className="col-sm-3">
            <Linkme className="linkme" to="#Quiz_Portal">
              <PrizeItem
                onClick={() => dispatch(cruise())}
                image={dollar}
                description={"$1000"}
                alt={"Picture of Money"}
                title={"Source: Purple Hibiscus by Ngozi Chimamanda Adiche"}
              />
            </Linkme>
          </div>

          <div className="col-sm-3">
            <Linkme className="linkme" to="#Quiz_Portal">
              <PrizeItem
                onClick={() => dispatch(iphoneC())}
                image={iphone}
                description={"Iphone 15 pro max"}
                alt={"Picture of Iphone"}
                title={"Source: Purple Hibiscus by Ngozi Chimamanda Adiche"}
              />
            </Linkme>
          </div>

          <div className="col-sm-3">
            <Linkme className="linkme" to="#Quiz_Portal">
              <PrizeItem
                onClick={() => dispatch(laptopC())}
                // onClick={quizLoad}
                image={laptop_}
                description={"$1000"}
                alt={"Picture of Money"}
                title={"Source: Purple Hibiscus by Ngozi Chimamanda Adiche"}
              />
            </Linkme>
          </div>

          {/* <div className="col-sm-2">
            <PrizeItem
              onClick={() => dispatch(laptopC())}
              image={laptop_}
              description={"$1000"}
              alt={"Picture of Money"}
              title={"Source: Purple Hibiscus by Ngozi Chimamanda Adiche"}
            />
          </div> */}

          {/* <div className="col-sm-2">
            <PrizeItem
              onClick={() => dispatch(laptopC())}
              image={laptop_}
              description={"$1000"}
              alt={"Picture of Money"}
              title={"Source: Purple Hibiscus by Ngozi Chimamanda Adiche"}
            />
          </div> */}
        </div>
        <div className="row" id="Quiz_Portal">
          <div className="col-sm-12">
            <Frame resource={source} />
            {/* {isLoading && <div className="spinner-border" role="status" />} */}
            {/* <ProtectedFrame resource={source} /> */}
          </div>
        </div>
      </section>

      <PartnerBanner />

      {/* <div>
        {Show ? (
          <h1 style={{ color: "tomato" }}>I am showing</h1>
        ) : (
          <h1 style={{ color: "green" }}>I am NOT showing</h1>
        )}
      </div> */}

      {/* <section
        className="firsty"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div className="col-sm-3 col-md-6 col-xxl-3">
            <figure
              className="disable"
              onMouseOver={() => dispatch(dollarC())}
              onClick={quizLoad}
            >
              <img className="notReady" alt="cruise" src={vacation} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'NA'"
              data-bs-placement="top"
            >
              Apple Iphone 15
            </figcaption>
          </div>
          <div className="col-xl-3 col-md-6 col-xxl-3">
            <figure className="disable">
              <img
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
          <div className="col-xl-3 col-md-6 col-xxl-3">
            <figure className="disable" onClick={quizLoad}>
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
          <div className="col-xl-3 col-md-6 col-xxl-3">
            <figure className="disable" onClick={quizLoad}>
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
          <div>
            <Frame resource={source} />
          </div>
        </div>
      </section> */}

      <section className="container-lg">
        {/* <marquee>
          <h2 className="text-center mt-3 PrizeHead">Prize Gallery</h2>
        </marquee> */}
        <div
          className="row mainRow"
          // onMouseOver={props.imgClick}
          // framesrc="https://www.cnn.com"
        >
          {/* <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}></div> */}
          <div className="whole">
            {/* <div className="col-xl-4 col-md-6 col-xxl-3">
              <figure
                className="disable"
                onMouseOver={() => dispatch(dollarC())}
                onClick={quizLoad}
              >
                <img className="notReady" alt="cruise" src={vacation} />
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
              <figure className="disable">
                <img
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
              <figure className="disable" onClick={quizLoad}>
                <img className="notReady" alt="laptop computer" src={laptop_} />
              </figure>
              <figcaption
                data-bs-toggle="tooltip"
                title="Source: 'NA'"
                data-bs-placement="top"
              >
                Brand New HP Laptop
              </figcaption>
            </div> */}
            {/* <div
            onClick={props.imgClick}
            framesrc={"https://www.google.com"}
            className="col-xl-4 col-md-6 col-xxl-3"
          >
            {console.log(props.framesrc)}

            <figure className="pryze">
              <img className="ready" alt="money" src={money} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'Purple Hibiscus by Ngozi Chimamanda Adichie'"
              data-bs-placement="top"
            >
              One Thousand Dollars
            </figcaption>
          </div> */}
            {/* <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure
              className="disable"
              onClick={props.imgClick}
              framesrc={"https://www.bbcnews.com"}
            >
              <img className="notReady" alt="student" src={scholarship} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'NA'"
              data-bs-placement="top"
            >
              Tertiary Scholarship
            </figcaption>
          </div> */}
            {/* <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure
              className="disable"
              onClick={props.imgClick}
              framesrc={"https://www.google.com"}
            >
              <img className="notReady" alt="lease document" src={rent} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'NA'"
              data-bs-placement="top"
            >
              One-year Rent
            </figcaption>
          </div> */}
            {/* <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure
              className="disable"
              onClick={props.imgClick}
              framesrc={
                "https://www.onlinequizcreator.com/the-merchant-of-venice/quiz-493884"
              }
            >
              <img className="notReady" alt="iphone" src={iphone} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'NA'"
              data-bs-placement="top"
            >
              100, 000 naira Boutique Voucher
            </figcaption>
          </div> */}
            {/* <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure
              className="disable"
              onClick={props.imgClick}
              framesrc={"https://www.google.com"}
            >
              <img className="notReady" alt="naira" src={naira} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'Things Fall Apart by Chinua Achebe'"
              data-bs-placement="top"
            >
              20, 000 naira cash
            </figcaption>
          </div> */}
            {/* <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure
              className="disable"
              onClick={props.imgClick}
              framesrc={"https://www.google.com"}
            >
              <img className="notReady" alt="airtime" src={airtime} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'Things Fall Apart by Chinua Achebe'"
              data-bs-placement="top"
            >
              2, 000 naira Call Airtime
            </figcaption>
          </div> */}
            {/* <div className="col-xl-4 col-md-6 col-xxl-3">
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
          </div> */}
            {/* <div className="col-xl-4 col-md-6 col-xxl-3">
            <figure
              className="disable"
              onClick={props.imgClick}
              framesrc={"https://www.google.com"}
            >
              <img className="notReady" alt="vacation" src={accra} />
            </figure>
            <figcaption
              data-bs-toggle="tooltip"
              title="Source: 'The Merchant of Venice by William Shakespeare'"
              data-bs-placement="top"
            >
              Vacation in Ghana
            </figcaption>
          </div> */}
            {/* <Frame resource={source} /> */}
          </div>
        </div>
      </section>
    </>
  );
}

//  #### Put all data in a separate util directory and export to components that need them ###

export default PrizeGallery;
export const ProtectedGallery = withAuthRequired(PrizeGallery);

function urlReducer(source, action) {
  switch (action.type) {
    case "naira": {
      return {
        ...source,
        quiz: "https://www.onlinequizcreator.com/the-merchant-of-venice/quiz-493884",
      };
    }
    case "laptop": {
      return {
        ...source,
        quiz: "https://www.onlinequizcreator.com/animal-farm/quiz-493767",
      };
    }
    case "dollar": {
      return {
        ...source,
        quiz: "https://www.onlinequizcreator.com/purple-hibiscus/quiz-492496",
      };
    }
    default:
      return "https://www.theflipchallenge.com";
  }
}
