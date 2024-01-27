import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Header from "../Header/Header";

function Tasks() {
        const [showA, setShowA] = useState({
            "1":true,
            "2":true,
            "3":true,
            "4":true,
            "5":true,
            "6":true,
            "7":true,
            "8":true,
            "9":true
        });
        const [tasks, setTasks] = useState([{
            "id": "1",
            "name": "Task 1",
            "description": "Description 1",
            "date": "2021-10-01",
            "time": "10:00",
            "completed": false
          },
          {
            "id": "2",
            "name": "Task 2",
            "description": "Description 2",
            "date": "2021-10-02",
            "time": "11:00",
            "completed": false
          },
          {
            "id": "3",
            "name": "Task 3",
            "description": "Description 3",
            "date": "2021-10-03",
            "time": "12:00",
            "completed": false
          },
          {
            "id": "4",
            "name": "Task 4",
            "description": "Description 4",
            "date": "2021-10-04",
            "time": "13:00",
            "completed": false
          },
          {
            "id": "5",
            "name": "Task 5",
            "description": "Description 5",
            "date": "2021-10-05",
            "time": "14:00",
            "completed": false
          },
          {
            "id": "6",
            "name": "Task 6",
            "description": "Description 6",
            "date": "2021-10-06",
            "time": "15:00",
            "completed": false
          },
          {
            "id": "7",
            "name": "Task 7",
            "description": "Description 7",
            "date": "2021-10-07",
            "time": "16:00",
            "completed": false
          },
          {
            "id": "8",
            "name": "Task 8",
            "description": "Description 8",
            "date": "2021-10-08",
            "time": "17:00",
            "completed": false
          },
          {
            "id": "9",
            "name": "Task 9",
            "description": "Description 9",
            "date": "2021-10-09",
            "time": "18:00",
            "completed": false
        }]);
      
        const toggleShowA = (id) => {
            let new_object = {...showA}
            new_object[id] = !new_object[id]
            setShowA(new_object);
        }

        const DeleteTask = (id) => {
            let new_object = {...showA}
            new_object[id] = !new_object[id]
            setShowA(new_object);
        }
      
        return (
            <>
             <Header />
            {tasks.map((task) => (
            <Row>
            <Col md={6} className="mb-2">
              <Button onClick={() =>{toggleShowA(task.id)}} className="mb-2">
                {task.name}
              </Button>
              <Toast onClose={() =>{toggleShowA(task.id)}} show={showA[task.id]} animation={false}>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>{task.completed}</small>
                </Toast.Header>
                <Toast.Body>{task.description}</Toast.Body>
                <Button variant="outline-danger" size="sm" onClick={()=>{DeleteTask(task.id)}}>Delete Task</Button>{' '}
              </Toast>
            </Col>
            </Row>))
            }
        
        </>
          
        );
}

export default Tasks;
