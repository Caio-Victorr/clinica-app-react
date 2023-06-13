import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootswatch/dist/solar/bootstrap.css'
import Login from './views/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import teste from "./views/teste"
import "toastr/build/toastr.css" 
import "toastr/build/toastr.min.js"
import CreateUser from './views/CreateUser'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/CreateUser' element={<CreateUser/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

