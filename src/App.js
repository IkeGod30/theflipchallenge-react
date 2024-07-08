
import PrizeGallery, { ProtectedGallery } from "./components/PrizeGallery";
import React, { Suspense } from 'react';
// import Main from "./components/Pages.js";
// import { Second } from './components/Pages.js';
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import { useState } from 'react';
import { useReducer } from 'react'; // 
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";




// Pages for routing
// import PrizeGallery from './pages/PrizeGallery';
import Frame from './pages/QuizForm/Quiz';
// import ProtectedFrame from './pages/QuizForm/Quiz';
// import { ProtectedGallery } from "./components/PrizeGallery";
import Contact from './pages/Contact/Contact';
import HowtoWin from './pages/How/How';
import Faq from './pages/Faq/Faq';
import NoPage from './pages/NoPage/NoPage';
import ShowFrame from "./components/TheFrame";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { LandingPage } from "./pages/Landing/LandingPage";
import { useSelector } from 'react-redux';




// import './App.css';

function App() {
  const source = useSelector((state) => state.quiz.value);

const [quiz, dispatch] = useReducer(quizReducer, 'https://www.onlinequizcreator.com/things-fall-apart/quiz-492336')


// const source = ['https://www.onlinequizcreator.com/the-merchant-of-venice/quiz-493884', 'https://www.onlinequizcreator.com/animal-farm/quiz-493767', 'https://www.onlinequizcreator.com/purple-hibiscus/quiz-492496', 'https://www.onlinequizcreator.com/things-fall-apart/quiz-492336', 'https://www.onlinequizcreator.com/animal-farm/quiz-492141']
  
  const [Url, setUrl] = useState('https://www.onlinequizcreator.com/things-fall-apart/quiz-492336'); // State for iframe src 
  
  const onPrizeClick = (framesrc) => {
    setUrl(framesrc);
  }

  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <BrowserRouter>
      <Nav />
      </BrowserRouter>
      {/* <Banner /> */}
      
    <>
      <header>
       
      </header>
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<LandingPage />} />
          {/* <Route exact path="/" component={(<PrizeGallery change2={changeSrc1} change3={changeSrc3} change4={changeSrc4} /> )} /> */}
          {/* <Route path='gallery' element={<PrizeGallery imgClick={onPrizeClick} framesrc={Url} />} /> */}
          <Route path='gallery' element={<ProtectedGallery />} />
          <Route path='how' element={<HowtoWin />} />
          {/* <Route path='quiz' element={<ShowFrame framesrc={Url} imgClick={onPrizeClick} /> }/> */}
          {/* <Route path='quiz' element={<ProtectedFrame /> }/> */}
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='faq' element={<Faq />} />
          <Route path='*' element={<NoPage />} />
          
          {/* </Route> */}
        </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
    </Suspense>
  );
}


export default App;


// Reducer function alternative to useState // 
function quizReducer(quiz, action) {
  switch (action.type) {
    case "laptop": {
      return 'https://www.onlinequizcreator.com/things-fall-apart/quiz-492336';
    }
    case "vacation": {
      return 'https://www.onlinequizcreator.com/purple-hibiscus/quiz-492496';
    }
    case "scholarship": {
      return 'https://www.onlinequizcreator.com/animal-farm/quiz-493767';
    }
    case "twentyFivek": {
      return 'https://www.onlinequizcreator.com/the-merchant-of-venice/quiz-493884';
    }
    default:
      return 'https://www.onlinequizcreator.com/the-merchant-of-venice/quiz-493884';
  }
}


