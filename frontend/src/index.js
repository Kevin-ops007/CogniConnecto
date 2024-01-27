import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tasks from './Components/Tasks/Tasks';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
      </Routes>
    </BrowserRouter>
);


