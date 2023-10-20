import PrizeGallery from "./components/PrizeGallery";
// import Main from "./components/Pages.js";
// import { Second } from './components/Pages.js';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import { useState } from 'react';
import Frame from "./components/Quiz";
// import HowtoWin from "./components/How"; //

// import './App.css';

function App() {
  const source = ['https://www.bbc.com', 'https://www.go.com', 'https://www.info.com', 'https://www.abcnews.com', 'https://www.msnbc.com']
  
  const [Url, setUrl] = useState('https://www.theflipchallenge.com'); // State for iframe src 

  function changeSrc() {
    setUrl(source[0])
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
 

  return (
    <div>
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       
      </header>
      <Nav />
      <Banner />  
      {/* <HowtoWin /> */}
      <PrizeGallery change2={changeSrc1} change={changeSrc} change3={changeSrc3} change4={changeSrc4} />
      {/* <Main /> */}
      {/* <Second title={'The Secondary Content'} /> */}
      <Frame resource={Url} />
      {/* <button onClick={changeSrc2}>Change Source</button> */}
      <Footer />

    </div>
  );
}

export default App;
