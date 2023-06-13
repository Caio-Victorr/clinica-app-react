import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import 'bootswatch/dist/solar/bootstrap.css'
import Login from './views/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import teste from "./views/teste"
import "toastr/build/toastr.css" 
import "toastr/build/toastr.min.js"
import CreateUser from './views/CreateUser'
=======
import 'bootswatch/dist/flatly/bootstrap.css'
import Login from './views/login';
import Home from './views/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'toastr/build/toastr.css'


>>>>>>> ee775c244079b70844945150c60a93469add37af
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/CreateUser' element={<CreateUser/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

=======
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
>>>>>>> ee775c244079b70844945150c60a93469add37af
