import "./QuizForm.css";
import { useState } from "react";

function Frame({ resource, onPrizeImageClick, imgClick }) {
  const [isLoading, setIsloading] = useState(true);
  return (
    <div className="frameDiv">
      <h2 className="quizPageTitle">Quiz Portal</h2>
      <div>
        {/* {isLoading && (
          <span
            className="spinner-border d-flex justify-content-center"
            role="status"
          />
        )} */}
        <iframe
          title="Welcome to The Challenge"
          src={resource}
          width="60%"
          height="250px"
          sandbox=""
        ></iframe>
      </div>
    </div>
  );
}

export default Frame;

// To require users to be authenticated before they can access the component
// export const ProtectedFrame = withAuthRequired(Frame);
