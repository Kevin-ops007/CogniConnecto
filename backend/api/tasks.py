from datetime import date
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
import json


class Tasks(BaseModel):
    name: str
    task: str
    image: str
    date: str
    description: str


router = APIRouter(
    prefix="/api/tasks",
    tags=["tasks"],
    responses={404: {"description": "Not found"}},
)


@router.get("/alltasks")
async def get_tasks():
    fakeTasks = [
        
            {"1":{
                "id": "1",
                "name": "Visit Doctor",
                "description": "Visit the doctor for regular checkup.",
                "date": "2024-01-30",
                "time": "10:00",
                "completed": "false",
                "show": "true"
            }},
            {"2":{
                "id": "2",
                "name": "Attend Autism Event",
                "description": "The autism event allows you to meet other people with autism and share your experiences so that it allows you to make social connections.",
                "date": "2024-02-02",
                "time": "11:00",
                "completed": "false",
                "show": "true"
            }},
            {"3":{
                "id": "3",
                "name": "Art Therapy Workshop",
                "description": "Engage in a therapeutic art workshop designed to stimulate creativity and expression.",
                "date": "2024-02-05",
                "time": "14:00",
                "completed": "false",
                "show": "true"
            }},
            {"4":{
                "id": "4",
                "name": "Music Therapy Session",
                "description": "Participate in a music therapy session aimed at improving mood, communication, and social interaction.",
                "date": "2024-02-08",
                "time": "16:00",
                "completed": "false",
                "show": "true"
            }},
            {"5":{
                "id": "5",
                "name": "Cooking Class",
                "description": "Join a cooking class to learn new culinary skills and enjoy socializing with others.",
                "date": "2024-02-12",
                "time": "12:00",
                "completed": "false",
                "show": "true"
            }},
            {"6":{
                "id": "6",
                "name": "Community Garden Volunteering",
                "description": "Volunteer at a community garden to engage in meaningful activities and connect with nature.",
                "date": "2024-02-15",
                "time": "09:00",
                "completed": "false",
                "show": "true"
            }},
            {"7":{
                "id": "7",
                "name": "Nature Walk",
                "description": "Enjoy a refreshing nature walk to promote relaxation and physical well-being.",
                "date": "2024-02-18",
                "time": "10:30",
                "completed": "false",
                "show": "true"
            }}
        
    ]
    json_data = json.dumps(fakeTasks)
    return json.loads(json_data)
