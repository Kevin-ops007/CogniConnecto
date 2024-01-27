import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";

const SingleCard = (prop) => {
    const uid = prop.uuid.toString().padStart(4, "0");
    console.log(uuid);

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src={prop.img}></Card.Img>
            <Card.Body>
                <Card.Title>{prop.name}</Card.Title>
                <Card.Text>
                    {prop.description}
                </Card.Text>
                <Link to="/eventInfo" className="btn btn-success">
                    More info
                </Link>
            </Card.Body>
        </Card >
    );
};

export default SingleCard;
