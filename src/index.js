import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/style.css'
import Home from './pages/home';
import Apropos from './pages/apropos';
import Contact from './pages/contact';
import Question1 from './pages/question1';
import Question2 from './pages/question2';
import Condition from './pages/conditions';
import Mentions from './pages/mentions';
import NotFound from './pages/404notfound';
import Confidentialite from './pages/confidentialités';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/apropos' Component={Apropos}/>
        <Route exact path='/contact' Component={Contact}/>
        <Route exact path='/question1' Component={Question1}/>
        <Route exact path='/question2' Component={Question2}/>
        <Route exact path='/conditions' Component={Condition}/>
        <Route exact path='/mentions-légales' Component={Mentions}/>
        <Route exact path='/politique-de-confidentialité' Component={Confidentialite}/>
        <Route path='*' Component={NotFound} />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
