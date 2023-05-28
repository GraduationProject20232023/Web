import React, { Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import DicMain from './DicMain';
import Main from './Main';
import Login from './Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/DicMain" element={<DicMain/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
