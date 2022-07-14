import React from 'react'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/App'
import Music from './pages/Music'

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
