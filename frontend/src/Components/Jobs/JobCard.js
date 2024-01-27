import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PopUp from "../PopUp";
import JobDetails from "./JobDetails";
import { speak } from "../Speech/Speech";

const JobCard = (prop) => {
    const uuid = prop.uuid.toString().padStart(4, "0");
    const [open, setOpen] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const content = () => <JobDetails data={prop} />;
    const [speechMsg, setSpeechMsg] = React.useState(prop.Description);
    const speak = () => {
        const msg = new SpeechSynthesisUtterance();
        msg.text = speechMsg;
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 1;
        const voices = window.speechSynthesis.getVoices();
        msg.voice = voices[1];
        window.speechSynthesis.speak(msg);
    };
    const handleSpeak = () => {
        speak();
    };
    return (
        <Card >
            <Card.Body>
                <Card.Title>{prop.Job_Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{prop.Company}</Card.Subtitle>
                <Row auto>
                    <Col sm={7}>
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="accessibilty-consideration"
                            aria-expanded={open}
                        >
                            Accessibilty Considerations
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Learn More
                        </Button>

                        <PopUp
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            content={content}
                        />
                    </Col>
                    <Col>
                        <Button variant="dark" onClick={handleSpeak}>
                            Audio
                        </Button>
                    </Col>

                </Row>


                <Collapse in={open}>
                    <div id="example-collapse-text">
                        {prop.Disability_Type}
                    </div>
                </Collapse>
            </Card.Body>
            <Card.Footer className="text-muted text-center">
                {prop.Location}
            </Card.Footer>
        </Card >
    );
};


export default JobCard;
