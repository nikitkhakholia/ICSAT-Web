import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './pages/Home/Home';
import Base from './Base';
import CallForPapers from './pages/CallForPapers/CallForPapers';
import Committees from './pages/Committees/Committees';

// eslint-disable-next-line
const bootstrapCSS = require("bootstrap/dist/css/bootstrap.css")
// eslint-disable-next-line
const bootstrapJS = require("bootstrap/dist/js/bootstrap.js")






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/icsat-23/build">
    <Base>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/callForPapers/:id' element={<CallForPapers/>}/>
      <Route path='/dates' element={<Home/>}/>
      <Route path='/committees' element={<Committees/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes></Base>
  </BrowserRouter>
);
