import { useState } from "react";

import Frame from "../pages/QuizForm/Quiz";
// import App from "../App";

function ShowFrame() { //receive iframe source as prop from parent
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

  // const [Url, setUrl] = useState(frameUrl.cruise); // State for iframe src

  const [Url, setUrl] = useState(source[0]);

  // function changeSrc(source) {
  //   setUrl(source[0]);
  // }

  function changeSrc() {
    setUrl(Url.london);
    // setUrl(alert(frameUrl.london));
  }
  // console.log(frameUrl.london);
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
      <Frame resource={Url} LoadUrl={() => changeSrc(source)} /> 
      {/* <Frame resource={Url} LoadUrl={changeSrc} /> */}
    </div>
  );
}

export default ShowFrame;
