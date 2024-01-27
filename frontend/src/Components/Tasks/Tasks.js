import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import Header from "../Header/Header";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";

function Tasks() {
  const [show, setShow] = useState(false);
  const [modealinputTitile, setModealinputTitle] = useState("");
  const [modealinputDesc, setModealinputDesc] = useState("");
  const [modealinputDate, setModealinputDate] = useState("");

  const [IDs, setIDs] = useState(["1", "2", "3", "4", "5", "6", "7"]);
  const [tasks, setTasks] = useState({
    1: {
      id: "1",
      name: "Visit Doctor",
      description: "Visit the doctor for regular checkup.",
      date: "2024-01-30",
      time: "10:00",
      completed: false,
      show: false,
    },
    2: {
      id: "2",
      name: "Attend Autism Event",
      description:
        "The autism event allows you to meet other people with autism and share your experiences so that it allows you to make social connections.",
      date: "2024-02-02",
      time: "11:00",
      completed: false,
      show: false,
    },
    3: {
      id: "3",
      name: "Art Therapy Workshop",
      description:
        "Engage in a therapeutic art workshop designed to stimulate creativity and expression.",
      date: "2024-02-05",
      time: "14:00",
      completed: false,
      show: false,
    },
    4: {
      id: "4",
      name: "Music Therapy Session",
      description:
        "Participate in a music therapy session aimed at improving mood, communication, and social interaction.",
      date: "2024-02-08",
      time: "16:00",
      completed: false,
      show: false,
    },
    5: {
      id: "5",
      name: "Cooking Class",
      description:
        "Join a cooking class to learn new culinary skills and enjoy socializing with others.",
      date: "2024-02-12",
      time: "12:00",
      completed: false,
      show: false,
    },
    6: {
      id: "6",
      name: "Community Garden Volunteering",
      description:
        "Volunteer at a community garden to engage in meaningful activities and connect with nature.",
      date: "2024-02-15",
      time: "09:00",
      completed: false,
      show: false,
    },
    7: {
      id: "7",
      name: "Nature Walk",
      description:
        "Enjoy a refreshing nature walk to promote relaxation and physical well-being.",
      date: "2024-02-18",
      time: "10:30",
      completed: false,
      show: false,
    },
  });

  const toggleShowA = (id) => {
    let new_object = { ...tasks };
    new_object[id].show = !new_object[id].show;
    setTasks(new_object);
  };

  const DeleteTask = (id) => {
    let old_IDs = [...IDs];
    const new_IDs = old_IDs.filter((ID) => ID !== id);

    setIDs(new_IDs);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const CreateTask = () => {
    let old_IDs = [...IDs];
    let new_ID = old_IDs.length + 1;
    while (IDs.includes(new_ID)) {
      new_ID++;
    }
    const new_IDs = [...old_IDs, String(new_ID)];
    setIDs(new_IDs);

    let new_object = { ...tasks };
    new_object[new_ID] = {
      id: String(new_ID),
      name: modealinputTitile,
      description: modealinputDesc,
      date: modealinputDate,
      time: "13:00",
      completed: false,
      show: false,
    };
    setTasks(new_object);
    setModealinputDate("");
    setModealinputDesc("");
    setModealinputTitle("");
    setShow(false);
  };

  const handleChangeTitle = (event) => {
    setModealinputTitle(event.target.value);
  };

  const handleChangeDesc = (event) => {
    setModealinputDesc(event.target.value);
  };

  const handleChangeDate = (event) => {
    setModealinputDate(event.target.value);
  };

  return (
    <>
      <Header />
      <>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Create a task</Modal.Title>
          </Modal.Header>
          <>
            <h3>Title</h3>
            <input onChange={handleChangeTitle} />
          </>

          <>
            <h3>Description</h3>
            <input onChange={handleChangeDesc} />
          </>

          <>
            <h3>Due Date</h3>
            <input onChange={handleChangeDate} />
          </>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={CreateTask}>
              Create Task
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      {IDs.map((task_id) => (
        <Container fluid>
          <Row className="justify-content-md-center" key={task_id}>
            <Col sm={6} className="mb-2">
              <Button
                onClick={() => {
                  toggleShowA(task_id);
                }}
                variant="outline-dark"
              >
                {tasks[task_id].name}
              </Button>
              <Toast
                fluid
                onClose={() => {
                  toggleShowA(task_id);
                }}
                show={tasks[task_id].show}
                animation={false}
              >
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">{tasks[task_id].name}</strong>
                  <small>{tasks[task_id].completed}</small>
                </Toast.Header>
                <Toast.Body>{tasks[task_id].description}</Toast.Body>
                <Button
                  variant="outline-danger"
                  className="justify-content-md-center"
                  size="sm"
                  onClick={() => {
                    DeleteTask(task_id);
                  }}
                >
                  Delete Task
                </Button>{" "}
              </Toast>
            </Col>
          </Row>
        </Container>
      ))}
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col sm={6}>
            <Button variant="primary" onClick={handleShow}>
              Add Task
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Tasks;
