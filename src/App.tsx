import NavbarSito from "./components/navegate/navbar";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Sign from "./components/pages/sign";
import Recordatory from "./components/pages/recordatory";
import { Route, Routes , Router } from "react-router-dom";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNSwiY29ycmVvIjoieml2b3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkMVFCdWg5TDlPZHQvZHZ0UEcwbGw0ZU00S3UzVjh3ZTlQcWdoUkV0ZDNubjUxZTRucHo5LnUiLCJyb2wiOiJhZG1pbiIsImNyZWF0ZUF0IjoiMjAyMy0wMi0wNlQxNToxOTo0OS4wNTZaIn0sImlhdCI6MTY3NTcyMzU2OX0.WbI9VYbOWEHccJ4ld2UMx6evVJDwXK5kncrcKZS9hQY";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

