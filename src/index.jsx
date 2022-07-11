import React from 'react'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from 'react-dom/client'
import App from './App'
import Music from './Music'

render(
  <BrowserRouter>
    <Routes>
        <Route path="/" exact={true} element={<App />}></Route>
        <Route path="/play" exact={true} element={<Music />}></Route>
        {/* <Route path="*" element={<NotFound/>}></Route> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
