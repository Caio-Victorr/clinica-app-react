import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootswatch/dist/flatly/bootstrap.css'
import Login from './views/login';
import Home from './views/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'toastr/build/toastr.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
