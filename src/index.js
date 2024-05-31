import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  store  from './store/app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Contact from './pages/Contact/Contact';
// import HowtoWin from './pages/How/How';
// import Frame from './pages/QuizForm/Quiz';

// import HowtoWin from './components/How';
// import HowtoWin from './components/How';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >

    {/* <BrowserRouter> */}
            <App />
    {/* </BrowserRouter> */}

    </Provider>
  </React.StrictMode>
);



