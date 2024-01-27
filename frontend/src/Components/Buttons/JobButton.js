import React from "react";
import { Link } from "react-router-dom";

const JobDetails = () => {
  return (
    <>
      <h1>Job Details</h1>
      <Link to="/jobinfo" className="btn btn-primary">
        Details
      </Link>
    </>
  );
};

export default JobDetails;
