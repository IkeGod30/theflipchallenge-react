import Frame from "../pages/QuizForm/Quiz";
import frm from "../features/iframeSrc/quizUrlSlice";
import { useSelector } from "react-redux";

function ShowFrame({ framesrc, imgClick }) {
  const source = useSelector((state) => state.quiz.value);
  // const source = [
  //   "https://www.onlinequizcreator.com/the-merchant-of-venice/quiz-493884",
  //   "https://www.onlinequizcreator.com/animal-farm/quiz-493767",
  //   "https://www.onlinequizcreator.com/purple-hibiscus/quiz-492496",
  //   "https://www.onlinequizcreator.com/things-fall-apart/quiz-492336",
  //   "https://www.onlinequizcreator.com/animal-farm/quiz-492141",
  // ];

  //  #### Put all data in a separate util directory and export to components that need them ###

  // const [Url, setUrl] = useState(source[0]);
  // const [Url, dispatch] = useReducer(framesourceReducer, {});

  return (
    <div>
      <Frame resource={source} onLoad={imgClick} />
    </div>
  );
}

export default ShowFrame;

// #### Iframe Source Reducer function ### //

// function framesourceReducer(Url, action) {
//   switch (action.type) {
//     case "laptop": {
//       return { ...frameSrc, quiz: "www.yahoo.com" };
//     }
//     case "iphone": {
//       return { ...frameSrc, quiz: "www.google.com" };
//     }
//     case "cruise": {
//       return { ...frameSrc, quiz: "www.fox.com" };
//     }
//     default:
//       return { ...frameSrc, quiz: "www.theflipchallenge.com" };
//   }
// }
