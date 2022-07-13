import React from 'react';
import ReactDOM from 'react-dom/client';
import Quote from './pages/Quote';
import Todo from './pages/Todo';
import Zulu from './pages/Zulu';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
         <Route path='/' element={<App/>} />
       <Route path='/quote' element={<Quote/>} />
         <Route path='/todo' element={<Todo/>} />
        <Route path='/zulu' element={<Zulu/>} />         
      </Routes>
  </BrowserRouter>
);


