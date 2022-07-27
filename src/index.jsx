import React from 'react'
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById("root"))
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/App'
import Music from './pages/Music'

root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" exact={true} element={<App />}></Route>
        <Route path="/:id" element={<Music />}></Route>
    </Routes>
  </BrowserRouter>
);
