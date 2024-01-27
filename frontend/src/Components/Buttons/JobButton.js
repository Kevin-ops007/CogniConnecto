import JobDetails from "../Jobs/JobDetails";
import PopUp from "../PopUp";
import Button from "react-bootstrap/Button";
import React from "react";
import { useState } from "react";

const JobButton = () => {
  const [modalShow, setModalShow] = useState(false);
  const fakeData = {
    JobTitle: "Library Aide",
    Company: "Royal Library",
    Location: "Vancouver, BC",
    Description:
      "Responsibilities include shelving books, assisting patrons, and organizing library materials. Send your resume to royallibrary@gmail.com.",
    "Disability Type": "Autism, Intellectual Disability",
    uuid: "3",
  };

  const content = () => <JobDetails data={fakeData} />;
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        More
      </Button>

      <PopUp
        show={modalShow}
        onHide={() => setModalShow(false)}
        content={content}
      />
    </>
  );
};

export default JobButton;
