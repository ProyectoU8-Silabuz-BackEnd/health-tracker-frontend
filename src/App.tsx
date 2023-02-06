import NavbarSito from "./components/navegate/navbar";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Sign from "./components/pages/sign";
import {BrowserRouter, Route, Routes , Router } from "react-router-dom";
import './App.css';
// import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';

export default function App(){
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return(
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarSito />}>
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="sign" element={<Sign/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

