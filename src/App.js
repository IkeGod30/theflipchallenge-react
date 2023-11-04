import PrizeGallery from "./components/PrizeGallery";
import React, { Suspense } from 'react';
// import Main from "./components/Pages.js";
// import { Second } from './components/Pages.js';
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import { useState } from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';


// Pages for routing
import Frame from "./pages/QuizForm/Quiz";
import Contact from './pages/Contact/Contact';
import HowtoWin from './pages/How/How';
import NoPage from './pages/NoPage/NoPage';
import Nav from "./pages/Nav/Nav";



// import './App.css';

function App() {
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

  console.log(Url) ///

  return (
    <Suspense fallback={(<div>Loading...</div>)}>
    <div>
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       
      </header>
      
      
      <div>
        
      <Nav />
      <Banner />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" component={(<PrizeGallery change2={changeSrc1} change3={changeSrc3} change4={changeSrc4} /> )} /> */}
          <Route exact path="/" element={<PrizeGallery change2={changeSrc1} change3={changeSrc3} change4={changeSrc4} />} />
          <Route path="how" element={<HowtoWin />} />
          <Route path="quiz" element={<Frame />}/>
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          {/* <Route path="nav" element={<Nav />} /> */}
        </Routes>
        </BrowserRouter>
        </div>

        <Footer />
      </div>  
      {/* <HowtoWin /> */}
      {/* <PrizeGallery resource={Url} alter={changeSrc} change={() => changeSource} change2={changeSrc1} change_={changeSrc} change3={changeSrc3} change4={changeSrc4} /> */}
      {/* <PrizeGallery change2={changeSrc1} change3={changeSrc3} change4={changeSrc4} /> */}
      {/* <Main /> */}
      {/* <Second title={'The Secondary Content'} /> */}
      <Frame resource={Url} />
      {/* <button onClick={changeSrc2}>Change Source</button> */}
    
    </div>
    </Suspense>
  );
}

export default App;
