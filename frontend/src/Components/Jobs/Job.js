import React from "react";
import JobCard from "./JobCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useState, useEffect } from "react";

function Job() {
  const [jobs, setjobs] = useState(null);
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchjobs = async () => {
      let result = await axios.get(`http://127.0.0.1:8000/api/jobs/alljobs`);

      setjobs(JSON.parse(JSON.stringify(result.data)));
      setState("Done");
    };
    fetchjobs();
  }, []);

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          {state === "Done" &&
            jobs.map((job) => (
              <Col sm={7} className="mb-4" key={job.uuid}>
                <JobCard key={job.uuid} {...job} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default Job;
