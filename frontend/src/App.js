import logo from "./logo.svg";
import "./App.css";
import JobDetails from "./Components/Jobs/JobDetails";
import Button from "react-bootstrap/Button";
import React from "react";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
      <h1>job</h1>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <JobDetails show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default App;
