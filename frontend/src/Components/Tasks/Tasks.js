import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Header from "../Header/Header";

function Tasks() {
        const [IDs, setIDs] = useState([
            "1",
            "2",
            "3",
            "4",
        ]);
        const [tasks, setTasks] = useState({
            "1":{
                "id": "1",
                "name": "Task 1",
                "description": "Description 1",
                "date": "2021-10-01",
                "time": "10:00",
                "completed": false,
                "show": true
            },
            "2":{
                "id": "2",
                "name": "Task 2",
                "description": "Description 2",
                "date": "2021-10-02",
                "time": "11:00",
                "completed": false,
                "show": true
            },
            "3":{
                "id": "3",
                "name": "Task 3",
                "description": "Description 3",
                "date": "2021-10-03",
                "time": "12:00",
                "completed": false,
                "show": true
            },
            "4":{
                "id": "4",
                "name": "Task 4",
                "description": "Description 4",
                "date": "2021-10-04",
                "time": "13:00",
                "completed": false,
                "show": true
            },
        });
      
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
      
        return (
            <>
             <Header />
            {IDs.map((task_id) => (
            <Row key={task_id}>
            <Col md={6} className="mb-2">
              <Button onClick={() =>{toggleShowA(task_id)}} className="mb-2">
                {tasks[task_id].name}
              </Button>
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
            </Row>))
            }
        
        </>
          
        );
}

export default Tasks;
