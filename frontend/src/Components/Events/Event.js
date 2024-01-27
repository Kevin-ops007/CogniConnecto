import React from "react";
import EventCard from "./EventCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useState, useEffect } from "react";

function Event() {
  const [events, setEvents] = useState(null);
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchEvents = async () => {
      let result = await axios.get(
        `http://127.0.0.1:8000/api/events/allevents`
      );

      setEvents(JSON.parse(JSON.stringify(result.data)));
      setState("Done");
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          {state === "Done" &&
            events.map((event) => (
              <Col sm={7} className="mb-4 ml-6" key={event.uuid}>
                <EventCard key={event.uuid} {...event} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default Event;
