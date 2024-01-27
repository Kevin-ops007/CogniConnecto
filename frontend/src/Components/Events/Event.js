import React from "react";
import EventCard from "./EventCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useState, useEffect } from "react";

function Events() {
    const [events, setEvents] = useState(null)
    const [state, setState] = useState(null)
    useEffect(() => {
        const fetchEvents = async () => {
            let result = await axios.get(
                `http://127.0.0.1:8000/api/events/allevents`,
            );

            setEvents(JSON.parse(JSON.stringify(result.data)))
            setState("Done")
        }
        fetchEvents()
    }, [])

    return (
        <div>
            <Container fluid>
                <Row auto>
                    {state === "Done" && events.map(event => (
                        <Col md={3} xs={6} className="mb-4" key={event.uuid}>
                            <EventCard uid={event.uuid} {...event} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Cards;