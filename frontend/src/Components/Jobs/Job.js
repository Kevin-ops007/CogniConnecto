import React from "react";
import JobCard from "./JobCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useState, useEffect } from "react";

function Job() {
    const fakeJobs = [
        {
            "Job_Title": "Custodial Worker",
            "Company": "Clean Sweep Services",
            "Location": "Toronto, ON",
            "Description": "Responsibilities include cleaning designated areas, disposing of trash, and maintaining cleanliness standards. Send your resume to cleansweepservices@gmail.com.",
            "Disability_Type": "Intellectual Disability",
            "uuid": "1"
        },

        {
            "Job_Title": "Food Service Worker",
            "Company": "Tasty Bites Café",
            "Location": "Victoria, BC",
            "Description": "Tasks include food preparation, serving customers, and maintaining kitchen hygiene. Send your resume to tastybitescafe@gmail.com.",
            "Disability_Type": "Intellectual Disability, Down Syndrome",
            "uuid": "2"
        },

        {
            "Job_Title": "Library Aide",
            "Company": "Royal Library",
            "Location": "Vancouver, BC",
            "Description": "Responsibilities include shelving books, assisting patrons, and organizing library materials. Send your resume to royallibrary@gmail.com.",
            "Disability_Type": "Autism, Intellectual Disability",
            "uuid": "3"
        },


        {
            "Job_Title": "Garden Center Attendant",
            "Company": "Green Thumb Garden Supplies",
            "Location": "Calgary, AB",
            "Description": "Duties include assisting customers with plant selection, watering plants, and maintaining garden displays. Send your resume to greenthumbgardensupplies@gmail.com.",
            "Disability_Type": "Down Syndrome",
            "uuid": "4"
        },


        {
            "Job_Title": "Animal Shelter Caretaker",
            "Company": "Paws and Claws Animal Shelter",
            "Location": "Winnipeg, MB",
            "Description": "Responsibilities include feeding, grooming, and providing basic care for shelter animals, as well as assisting with cleaning and organizing animal areas. Send your resume to shelter@gmail.com.",
            "Disability_Type": "Autism, Intellectual Disability",
            "uuid": "5"
        }

    ]
    const [jobs, setjobs] = useState(fakeJobs)
    const [state, setState] = useState("Done")
    // useEffect(() => {
    //     const fetchjobs = async () => {
    //         let result = await axios.get(
    //             `http://127.0.0.1:8000/api/jobs/alljobs`,
    //         );

    //         setjobs(JSON.parse(JSON.stringify(result.data)))
    //         setState("Done")
    //     }
    //     fetchjobs()
    // }, [])

    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center">
                    {state === "Done" && jobs.map(job => (
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
