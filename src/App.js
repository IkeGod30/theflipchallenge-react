import PrizeGallery from "./components/PrizeGallery";
import React, { Suspense } from 'react';
// import Main from "./components/Pages.js";
// import { Second } from './components/Pages.js';
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import { useState } from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
// import ShowFrame from "./components/TheFrame";


// Pages for routing
// import PrizeGallery from './pages/PrizeGallery';
import Frame from './pages/QuizForm/Quiz';
import Contact from './pages/Contact/Contact';
import HowtoWin from './pages/How/How';
import Faq from './pages/Faq/Faq';
import NoPage from './pages/NoPage/NoPage';
import ShowFrame from "./components/TheFrame";




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
    <>
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       
      </header>
        
      {/* <Nav /> */}
      {/* <Banner /> */}
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <BrowserRouter>
        {/* <Nav /> */}
        {/* <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Quiz</li>
            <li>Contact</li>
          </ul>
        </nav> */}
        <Routes>
          {/* <Route exact path="/" component={(<PrizeGallery change2={changeSrc1} change3={changeSrc3} change4={changeSrc4} /> )} /> */}
          <Route path="/" element={<PrizeGallery change2={changeSrc1} change3={changeSrc3} change4={changeSrc4} />} >
          <Route path="how" element={<HowtoWin />} />
          <Route path="quiz" element={<ShowFrame /> }/>
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </div>

     
    
      {/* <HowtoWin /> */}
      {/* <PrizeGallery resource={Url} alter={changeSrc} change={() => changeSource} change2={changeSrc1} change_={changeSrc} change3={changeSrc3} change4={changeSrc4} /> */}
      {/* <PrizeGallery change2={changeSrc1} change3={changeSrc3} change4={changeSrc4} /> */}
      {/* <Main /> */}
      {/* <Second title={'The Secondary Content'} /> */}
      {/* <Frame resource={Url} /> */}
      {/* <ShowFrame /> */}
      {/* <button onClick={changeSrc2}>Change Source</button> */}
      <Footer />
    </>
    </Suspense>
  );
}

export default App;
