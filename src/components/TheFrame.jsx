import { useState } from "react";
import { useReducer } from "react";

import Frame from "../pages/QuizForm/Quiz";
// import App from "../App";

function ShowFrame() {
  //receive iframe source as prop from parent
  const source = [
    "https://www.onlinequizcreator.com/the-merchant-of-venice/quiz-493884",
    "https://www.onlinequizcreator.com/animal-farm/quiz-493767",
    "https://www.onlinequizcreator.com/purple-hibiscus/quiz-492496",
    "https://www.onlinequizcreator.com/things-fall-apart/quiz-492336",
    "https://www.onlinequizcreator.com/animal-farm/quiz-492141",
  ];

  //  #### Put all data in a separate util directory and export to components that need them ###

  const frameUrl = {
    cruise: source[0],
    corolla: source[1],
    london: source[2],
    laptop: source[3],
    onethousandD: source[4],
    scholarship: source[5],
    rent: source[6],
    voucher: source[7],
    twentyTNaira: source[8],
    airtime: source[9],
    voucher2: source[10],
    ghana: source[11],
  };

  // Option 1: const [Url, setUrl] = useState(source); // State for iframe src
  // Option 2: const [Url, setUrl] = useState(Array(5).fill(source)); // State for iframe src

  // const [Url, setUrl] = useState(source[0]);
  const [Url, dispatch] = useReducer(framesourceReducer, {});

  // function changeSrc(source) {
  //   setUrl(source[0]);
  // }

  function changeSrc(source) {
    setUrl(Url.london);
  }
  // console.log(frameUrl.laptop);

  function changeSrc1() {
    setUrl(source[3]);
  }

  function changeSrc2() {
    setUrl(source[3]);
  }

  function changeSrc3() {
    setUrl(source[0]);
  }

  function changeSrc4() {
    setUrl(source[4]);
  }

  return (
    <div>
      <Frame resource={Url} LoadUrl={(source) => changeSrc(source)} />
      {/* <Frame resource={Url} LoadUrl={() => setUrl(source)} /> */}
      {/* <Frame resource={Url} LoadUrl={changeSrc} /> */}
    </div>
  );
}

export default ShowFrame;

// #### Iframe Source Reducer function ### //

function framesourceReducer(Url, action) {
  switch (action.type) {
    case "laptop": {
      return { ...frameSrc, quiz: "www.yahoo.com" };
    }
    case "iphone": {
      return { ...frameSrc, quiz: "www.google.com" };
    }
    case "cruise": {
      return { ...frameSrc, quiz: "www.fox.com" };
    }
    default:
      return { ...frameSrc, quiz: "www.theflipchallenge.com" };
  }
}
