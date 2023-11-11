function Frame() {

  const source = ['https://www.onlinequizcreator.com/the-merchant-of-venice/quiz-493884', 'https://www.onlinequizcreator.com/animal-farm/quiz-493767', 'https://www.onlinequizcreator.com/purple-hibiscus/quiz-492496', 'https://www.onlinequizcreator.com/things-fall-apart/quiz-492336', 'https://www.onlinequizcreator.com/animal-farm/quiz-492141']
  
  const [Url, setUrl] = useState(source); // State for iframe src 
  // const [Url, setUrl] = useState(Array(5).fill(source)); // State for iframe src 

  function changeSrc(source) {
    setUrl(source)
  }

  function changeSrc1() {
    setUrl(source[3])
  }

  function changeSrc2() {
    setUrl(source[3])
  }

  function changeSrc3() {
    setUrl(source[0])
  }

  function changeSrc4() {
    setUrl(source[4])
  }
 
  function changeSource(i) {
    const nextUrl = Url.slice();
    nextUrl[i] = Url;
    setUrl(nextUrl)
    // changeSrc(source)
  }


  return (
    <>
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
      <Frame resource={Url} />
        {/* <iframe
          title="Welcome to The Challenge"
          src={resource}
          onLoad={change}
          width="100%"
          height="250px"
        ></iframe> */}
        {/* <button onClick={change}>Change Source</button> */}
      </div>
    </>
  );
}

export default Frame;
