import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './index.css';
import { Home } from './pages/Home';
import { Show } from './pages/Show';
import "./style.scss";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Show/>} />
      </Routes>
    </BrowserRouter>
  
);


