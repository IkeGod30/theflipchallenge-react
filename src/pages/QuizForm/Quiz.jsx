function Frame({ resource, onPrizeImageClick, imgClick }) {
  return (
    <>
      <h2>Welcome to the Quiz Page</h2>
      <div>
        <iframe
          // onLoad={onPrizeImageClick}
          onLoad={console.log(resource)}
          // onLoad={imgClick}
          title="Welcome to The Challenge"
          src={resource}
          width="60%"
          height="250px"
        ></iframe>
        {/* <button onClick={change}>Change Source</button> */}
      </div>
    </>
  );
}

export default Frame;
