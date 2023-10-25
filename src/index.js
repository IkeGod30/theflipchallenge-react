import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HowtoWin from './components/How';
// import HowtoWin from './components/How';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >

    {/* <BrowserRouter>
            <App />
    </BrowserRouter> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/How" element={<HowtoWin />} />
      </Routes>
      
      </BrowserRouter> */}
    <App />
    </Provider>
  </React.StrictMode>
);



