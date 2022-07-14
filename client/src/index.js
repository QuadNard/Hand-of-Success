import React from 'react';
import ReactDOM from 'react-dom/client';
import Quote from './pages/Quote';
import Todo from './pages/Todo';
import Zulu from './pages/Zulu';
import './index.css';
import App from './App';
import Navbar from './components/Navbar'


import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <BrowserRouter>
  <Navbar />
  <div className="pages">
    <Routes>
         <Route path='/' element={<App/>} />
       <Route path='/quote' element={<Quote/>} />
         <Route path='/todo' element={<Todo/>} />
        <Route path='/zulu' element={<Zulu/>} />         
      </Routes>
      </div>
  </BrowserRouter>
  </div>
);


