// import { Link } from "react-router-dom";

function Frame({ resource, change }) {
  return (
    <>
      <h2>Welcome to the Quiz Page</h2>
      {/* <div>
        <h4>Home</h4>
        <Link to="/">Home</Link>
      </div>
      <div>
        <h4>Home</h4>
        <Link to="/how">How To Win</Link>
      </div>
      <div>
        <h4>Contact Us</h4>
        <Link to="/contact">Contact Us</Link>
      </div> */}

      <div>
        {/* <Frame resource={Url} /> */}
        <iframe
          title="Welcome to The Challenge"
          src={resource}
          onLoad={change}
          width="60%"
          height="250px"
        ></iframe>
        {/* <button onClick={change}>Change Source</button> */}
      </div>
    </>
  );
}

export default Frame;
