import NavbarSito from "./components/navegate/navbar";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Sign from "./components/pages/sign";
import Recordatory from "./components/pages/recordatory";
import { Route, Routes , Router } from "react-router-dom";
import DocSign from "./components/pages/docSign";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import React from 'react';

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

export default function App(){
  return(
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarSito />}>
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="sign" element={<Sign/>} />
            <Route path="recordatory" element={<Recordatory token={token} />} />
            <Route path="DocSign" element={<DocSign/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

