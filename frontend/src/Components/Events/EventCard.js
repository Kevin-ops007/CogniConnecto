import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SingleCard = (prop) => {
  const uuid = prop.uuid.toString().padStart(4, "0");
  const [open, setOpen] = React.useState(false);
  const [speechMsg, setSpeechMsg] = React.useState(prop.description);
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
  const time = prop.date.toString() + " " + prop.time.toString();
  return (
    <Card>
      <Card.Img
        style={{ height: 250 }}
        variant="top"
        className="mx-auto d-block"
        src={prop.image}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{prop.event}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {prop.location}
        </Card.Subtitle>
        <Card.Text>{prop.description}</Card.Text>
        <Row auto>
          <Col sm={7}>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="accessibilty-consideration"
              aria-expanded={open}
            >
              Accessibilty Considerations
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text">{prop.type}</div>
            </Collapse>
          </Col>
          <Col>
            <Button variant="dark" href={prop.link} onClick={handleSpeak}>
              Audio
            </Button>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="text-muted text-center">{time}</Card.Footer>
    </Card>
  );
};

export default SingleCard;
