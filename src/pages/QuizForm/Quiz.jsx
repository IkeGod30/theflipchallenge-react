import "./QuizForm.css";

function Frame({ resource, onPrizeImageClick, imgClick }) {
  return (
    <div className="frameDiv">
      <h2 className="quizPageTitle">Quiz Portal</h2>
      <div>
        <iframe
          title="Welcome to The Challenge"
          src={resource}
          width="60%"
          height="250px"
        ></iframe>
      </div>
    </div>
  );
}

export default Frame;
