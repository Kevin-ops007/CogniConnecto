import React from "react";
import EventCard from "./EventCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useState, useEffect } from "react";

function Event() {
    const fakeEvents = [
        {
            "event": "Cognitive Connections Expo",
            "type": "Autism, Rett Syndrome, Williams Syndrome",
            "image": "https://www.healthparkpediatrics.com/wp-content/uploads/2022/02/AdobeStock_256979830.jpeg",
            "date": "2024-03-25",
            "time": "14:00",
            "location": "123 Main St",
            "description": "Join us at the Cognitive Connections Expo on March 25, 2024, at 123 Main St, uniting communities impacted by Autism, Rett Syndrome, and Williams Syndrome for informative workshops and networking opportunities. Explore support, resources, and connections in a welcoming environment dedicated to fostering understanding and empowerment.",
            "uuid": "1"
        },

        {
            "event": "Diverse Minds Conference",
            "type": "Rett Syndrome, Intellectual Disability, Down Syndrome",
            "image": "https://www.adjtos.ca/en/news/resources/Images/RETT-Syndrome-Awareness-Month-Image.jpg",
            "date": "2024-10-26",
            "time": "15:00",
            "location": "431 Old St",
            "description": "The Diverse Minds Conference brings together experts, caregivers, and individuals with a focus on Rett Syndrome, Intellectual Disability, and Down Syndrome. This event aims to foster understanding, share insights, and explore advancements in research and support for these diverse conditions. Join us for a day of learning, collaboration, and community building.",
            "uuid": "2"
        },

        {
            "event": "AccessAbility Forum",
            "type": "Williams Syndrome, Autism, Down Syndrome",
            "image": "https://www.toplinemd.com/pemc-florida/wp-content/uploads/sites/111/2022/12/What-Is-Williams-Syndrome.jpg",
            "date": "2024-05-21",
            "time": "16:00",
            "location": "321 Zellar St",
            "description": "The AccessAbility Forum invites individuals, families, and professionals to discuss and explore topics related to Williams Syndrome, Autism, and Down Syndrome. Through panel discussions, workshops, and networking opportunities, this forum aims to promote inclusion, accessibility, and empowerment for individuals with diverse abilities. Join us as we work towards a more inclusive society for all.",
            "uuid": "3"
        },

        {
            "event": "Minds Unlocked Conference",
            "type": "Intellectual Disability, Down Syndrome, Williams Syndrome",
            "image": "https://t4.ftcdn.net/jpg/00/88/59/13/360_F_88591324_z1gGX9gZryHQhzGAd8vwIm1mwtyyAP50.jpg",
            "date": "2024-06-25",
            "time": "17:00",
            "location": "343 Pembina St",
            "description": "The Minds Unlocked Conference is a gathering dedicated to unlocking the potential and celebrating the achievements of individuals with Intellectual Disability, Down Syndrome, and Williams Syndrome. Through keynote speeches, interactive sessions, and artistic expressions, this conference aims to challenge stereotypes, inspire action, and promote acceptance. Join us in recognizing the diverse abilities and contributions of every individual.",
            "uuid": "4"
        },

        {
            "event": "Inclusive Minds Symposium",
            "type": "Down Syndrome, Autism, Intellectual Disability",
            "image": "https://images.squarespace-cdn.com/content/v1/630cad6959694e36cb854121/febb6b18-57c3-4b58-873e-833b45adf7b9/Tshirts_01.jpg",
            "date": "2024-07-29",
            "time": "18:00",
            "location": "192 Victoria St",
            "description": "The Inclusive Minds Symposium is a platform for dialogue, reflection, and advocacy on issues concerning Down Syndrome, Autism, and Intellectual Disability. Through presentations, storytelling, and interactive sessions, this symposium seeks to amplify diverse voices, foster understanding, and promote inclusive practices in all aspects of life. Join us as we celebrate diversity and champion inclusion for individuals of all abilities.",
            "uuid": "5"
        }
    ]
    const [events, setEvents] = useState(fakeEvents);
    const [state, setState] = useState("Done");
    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         let result = await axios.get(
    //             `http://127.0.0.1:8000/api/events/allevents`,
    //         );

    //         setEvents(JSON.parse(JSON.stringify(result.data)))
    //         setState("Done")
    //     }
    //     fetchEvents()
    // }, [])

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
