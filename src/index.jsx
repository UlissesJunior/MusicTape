import React from 'react'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from 'react-dom/client'
import App from './App'
import Music from './music'

render(
  <BrowserRouter>
    <Routes>
        <Route path="/" exact={true} element={<App />}></Route>
        <Route path="/:id" element={<Music />}></Route>
        {/* <Route path="*" element={<NotFound/>}></Route> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
