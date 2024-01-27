import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

const SingleCard = (prop) => {
    const uuid = prop.uuid.toString().padStart(4, "0");
    const [open, setOpen] = React.useState(false);

    return (
        <Card >
            <Card.Img
                style={{ height: 250 }}
                variant="top"
                src={prop.img}></Card.Img>
            <Card.Body>
                <Card.Title>{prop.event}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{prop.location}</Card.Subtitle>
                <Card.Text>
                    {prop.description}
                </Card.Text>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="accessibilty-consideration"
                    aria-expanded={open}
                >
                    Accessibilty Considerations
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        {prop.type}
                    </div>
                </Collapse>
            </Card.Body>
            <Card.Footer className="text-muted text-center">
                {prop.time}
            </Card.Footer>
        </Card >
    );
};


export default SingleCard;
