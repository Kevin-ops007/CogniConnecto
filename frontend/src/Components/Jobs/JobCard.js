import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const JobCard = (prop) => {
    const uuid = prop.uuid.toString().padStart(4, "0");
    const [open, setOpen] = React.useState(false);
    return (
        <Card >
            <Card.Body>
                <Card.Title>{prop.Job_Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{prop.Company}</Card.Subtitle>
                <Card.Text>
                    {prop.description}
                </Card.Text>
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
                        <Button className="float-right"  >
                            Learn More
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
