import JobDetails from "../Jobs/JobDetails";
import Button from "react-bootstrap/Button";
import React from "react";
import { useState } from "react";

const JobButton = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        More
      </Button>

      <JobDetails show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default JobButton;
