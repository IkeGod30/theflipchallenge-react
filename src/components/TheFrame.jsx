import { useState } from "react";

import Frame from "../pages/QuizForm/Quiz";
// import App from "../App";

function ShowFrame() {
  const source = [
    "https://www.onlinequizcreator.com/the-merchant-of-venice/quiz-493884",
    "https://www.onlinequizcreator.com/animal-farm/quiz-493767",
    "https://www.onlinequizcreator.com/purple-hibiscus/quiz-492496",
    "https://www.onlinequizcreator.com/things-fall-apart/quiz-492336",
    "https://www.onlinequizcreator.com/animal-farm/quiz-492141",
  ];

  const [Url, setUrl] = useState(source); // State for iframe src
  // const [Url, setUrl] = useState(Array(5).fill(source)); // State for iframe src

  function changeSrc(source) {
    setUrl(source);
  }

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
      <Frame resource={Url} />
    </div>
  );
}

export default ShowFrame;
