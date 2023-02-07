import NavbarSito from "./components/navegate/navbar";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Sign from "./components/pages/sign";
import DocSign from "./components/pages/docSign";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import React from 'react';

export default function App(){
  return(
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarSito />}>
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="sign" element={<Sign/>} />
            <Route path="DocSign" element={<DocSign/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

