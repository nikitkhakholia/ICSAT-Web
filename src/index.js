import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './pages/Home/Home';
import Base from './Base';
import CallForPapers from './pages/CallForPapers/CallForPapers';
import Committees from './pages/Committees/Committees';
import Registration from './pages/Registration/Registration';
import KeynoteSpeakers from './pages/KeynoteSpeakers/KeynoteSpeakers';
import MohammadSKhan from './pages/KeynoteSpeakers/MohammadSKhan';
import MarioJoseDivan from './pages/KeynoteSpeakers/MarioJoseDivan';
import DharmSinghJat from './pages/KeynoteSpeakers/DharmSinghJat';
// eslint-disable-next-line
const bootstrapCSS = require("bootstrap/dist/css/bootstrap.css")
// eslint-disable-next-line
const bootstrapJS = require("bootstrap/dist/js/bootstrap.js")






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Base>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/callForPapers/:id' element={<CallForPapers/>}/>
      <Route path='/Registration' element={<Registration/>}/>
      <Route path='/Committees' element={<Committees/>}/>
      <Route path='/dates' element={<Home/>}/>
      <Route path='/committees' element={<Committees/>}/>
      <Route path='/KeynoteSpeakers' element={<KeynoteSpeakers/>}/>
      <Route path='/MohammadSKhan' element={<MohammadSKhan/>}/>
      <Route path='/MarioJoseDivan' element={<MarioJoseDivan/>}/>
      <Route path='/DharmSinghJat' element={<DharmSinghJat/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes></Base>
  </BrowserRouter>
);
