import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  {store, persistor}  from './store/app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import  Login  from './components/Pages/Login/Login'
import Login from './pages/Login/Login';
import { FirebaseApp } from './utils/firebase';
import { PersistGate } from 'redux-persist/integration/react';
// import Contact from './pages/Contact/Contact';
// import HowtoWin from './pages/How/How';
// import Frame from './pages/QuizForm/Quiz';

// import HowtoWin from './components/How';
// import HowtoWin from './components/How';

FirebaseApp.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate persistor={persistor}>
    {/* <BrowserRouter> */}
            <App />
    {/* </BrowserRouter> */}
    </PersistGate>
    </Provider>
  </React.StrictMode>
);



