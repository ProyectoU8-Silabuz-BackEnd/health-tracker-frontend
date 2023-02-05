import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarSito from "./components/navegate/navbar";
import Home from "./components/pages/home";

export default function App(){
  return(
    <div className="App"> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarSito />}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
