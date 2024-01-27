import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tasks from './Components/Tasks/Tasks';
import EventPage from './Components/Events/EventPage';
import JobPage from './Components/Jobs/JobPage';
import Speech from './Components/Speech/Speech';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/tasks" element={<Tasks />}></Route>
      <Route path="/events" element={<EventPage />}></Route>
      <Route path="/jobs" element={<JobPage />}></Route>
      <Route path="/speech" element={<Speech />} ></Route>
    </Routes>
  </BrowserRouter>
);
