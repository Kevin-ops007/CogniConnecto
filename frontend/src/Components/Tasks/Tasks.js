import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Header from "../Header/Header";
import Container from "react-bootstrap/Container";
import Modal from 'react-bootstrap/Modal';

function Tasks() {
        const [show, setShow] = useState(false);
        const [modealinputTitile, setModealinputTitle] = useState("");
        const [modealinputDesc, setModealinputDesc] = useState("");
        const [modealinputDate, setModealinputDate] = useState("");

        const [IDs, setIDs] = useState([
        ]);
        const [tasks, setTasks] = useState({
        });
        useEffect(() => {
            let formattedTasks = JSON.stringify(tasks);
            localStorage.setItem("Tasks", formattedTasks);

            let formattedIDs = JSON.stringify(IDs);
            localStorage.setItem("IDs", formattedIDs);
            //console.log(tasks)
            console.log("******************");

             //window.addEventListener("beforeunload", () => {
                // Clear the "questionSet" from localStorage when the user closes the page
                //localStorage.removeItem("Tasks");
             //});
        }, []);

        const toggleShowA = (id) => {
            let new_object = {...tasks};
            new_object[id].show = !new_object[id].show;
            setTasks(new_object);
        }

        const DeleteTask = (id) => {
            let old_IDs = [...IDs];
            const new_IDs = old_IDs.filter((ID) => ID !== id);
            
            setIDs(new_IDs);
        }

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const CreateTask = () => {
            let old_IDs = [...IDs];
            const new_ID = old_IDs.length + 1;
            const new_IDs = [...old_IDs, String(new_ID)];
            setIDs(new_IDs);

            let new_object = {...tasks};
            new_object[new_ID] = {
                "id": String(new_ID),
                "name": modealinputTitile,
                "description": modealinputDesc,
                "date": modealinputDate,
                "time": "13:00",
                "completed": false,
                "show": true
            };
            setTasks(new_object);
            setModealinputDate("");
            setModealinputDesc("");
            setModealinputTitle("");
            setShow(false);
        }

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
                        <input onChange={handleChangeTitle}/>
                    </>
                    
                    <>
                        <h3>Description</h3>
                        <input onChange={handleChangeDesc}/>
                    </>
                    
                    <>
                        <h3>Due Date</h3>
                        <input onChange={handleChangeDate}/> 
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
            <Col md={6} className="mb-2">
              <Button onClick={() =>{toggleShowA(task_id)}} variant="outline-dark">{tasks[task_id].name}</Button>
              <Toast onClose={() =>{toggleShowA(task_id)}} show={tasks[task_id].show} animation={false}>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>{tasks[task_id].completed}</small>
                </Toast.Header>
                <Toast.Body>{tasks[task_id].description}</Toast.Body>
                <Button variant="outline-danger" size="sm" onClick={()=>{DeleteTask(task_id)}}>Delete Task</Button>{' '}
              </Toast>
            </Col>
            
            </Row>
            </Container>
            ))
            }
            <Container fluid> 
            <Row className="justify-content-md-center">
                <Button className="justify-content-md-center" variant="primary" onClick={handleShow}>Add Task</Button>{' '}
            </Row>   
            </Container>
        
        </>
          
        );
}

export default Tasks;
