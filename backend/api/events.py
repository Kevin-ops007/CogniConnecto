from datetime import date
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
import json


class Events(BaseModel):
    name: str
    event: str
    image: str
    date: str
    description: str


router = APIRouter(
    prefix="/api/events",
    tags=["events"],
    responses={404: {"description": "Not found"}},
)


@router.get("/allevents")
async def get_events():
    fakeEvents = [
        {
            "event": "Cognitive Connections Expo",
            "type": "Autism, Rett Syndrome, Williams Syndrome",
            "image": "/images/autism.jpg",
            "date": "2024-03-25",
            "time": "14:00",
            "location": "123 Main St",
            "description": "This is a description",
            "uuid": "1"
        },

        {
            "event": "Diverse Minds Conference",
            "type": "Rett Syndrome, Intellectual Disability, Down Syndrome",
            "image": "/images/rett_syndrome.jpg",
            "date": "2024-10-25",
            "time": "15:00",
            "location": "431 Old St",
            "description": "This is a description",
            "uuid": "2"
        },

        {
            "event": "AccessAbility Forum",
            "type": "Williams Syndrome, Autism, Down Syndrome",
            "image": "images/williams_syndrome.jpg",
            "date": "2024-05-25",
            "time": "16:00",
            "location": "321 Zellar St",
            "description": "This is a description",
            "uuid": "3"
        },

        # {
        #     "event": "Minds Unlocked Conference",
        #     "type": "Intellectual Disability, Down Syndrome, Williams Syndrome",
        #     "image": "images/intellectual_disability.jpg",
        #     "date": "2024-06-25",
        #     "time": "17:00",
        #     "location": "343 Pembina St",
        #     "description": "This is a description",
        #     "uuid": "4"
        # },

        # {
        #     "event": "Inclusive Minds Symposium",
        #     "type": "Down Syndrome, Autism, Intellectual Disability",
        #     "image": "images/down_syndrome.jpg",
        #     "date": "2024-07-25",
        #     "time": "18:00",
        #     "location": "192 Victoria St",
        #     "description": "This is a description",
        #     "uuid": "5"
        # }
    ]
    json_data = json.dumps(fakeEvents)
    return json.loads(json_data)
