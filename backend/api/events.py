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
            "description": "Join us at the Cognitive Connections Expo on March 25, 2024, at 123 Main St, uniting communities impacted by Autism, Rett Syndrome, and Williams Syndrome for informative workshops and networking opportunities. Explore support, resources, and connections in a welcoming environment dedicated to fostering understanding and empowerment.",
            "uuid": "1"
        },

        {
            "event": "Diverse Minds Conference",
            "type": "Rett Syndrome, Intellectual Disability, Down Syndrome",
            "image": "/images/rett_syndrome.jpg",
            "date": "2024-10-26",
            "time": "15:00",
            "location": "431 Old St",
            "description": "The Diverse Minds Conference brings together experts, caregivers, and individuals with a focus on Rett Syndrome, Intellectual Disability, and Down Syndrome. This event aims to foster understanding, share insights, and explore advancements in research and support for these diverse conditions. Join us for a day of learning, collaboration, and community building.",
            "uuid": "2"
        },

        {
            "event": "AccessAbility Forum",
            "type": "Williams Syndrome, Autism, Down Syndrome",
            "image": "images/williams_syndrome.jpg",
            "date": "2024-05-21",
            "time": "16:00",
            "location": "321 Zellar St",
            "description": "The AccessAbility Forum invites individuals, families, and professionals to discuss and explore topics related to Williams Syndrome, Autism, and Down Syndrome. Through panel discussions, workshops, and networking opportunities, this forum aims to promote inclusion, accessibility, and empowerment for individuals with diverse abilities. Join us as we work towards a more inclusive society for all.",
            "uuid": "3"
        },

        {
            "event": "Minds Unlocked Conference",
            "type": "Intellectual Disability, Down Syndrome, Williams Syndrome",
            "image": "images/intellectual_disability.jpg",
            "date": "2024-06-25",
            "time": "17:00",
            "location": "343 Pembina St",
            "description": "The Minds Unlocked Conference is a gathering dedicated to unlocking the potential and celebrating the achievements of individuals with Intellectual Disability, Down Syndrome, and Williams Syndrome. Through keynote speeches, interactive sessions, and artistic expressions, this conference aims to challenge stereotypes, inspire action, and promote acceptance. Join us in recognizing the diverse abilities and contributions of every individual.",
            "uuid": "4"
        },

        {
            "event": "Inclusive Minds Symposium",
            "type": "Down Syndrome, Autism, Intellectual Disability",
            "image": "images/down_syndrome.jpg",
            "date": "2024-07-29",
            "time": "18:00",
            "location": "192 Victoria St",
            "description": "The Inclusive Minds Symposium is a platform for dialogue, reflection, and advocacy on issues concerning Down Syndrome, Autism, and Intellectual Disability. Through presentations, storytelling, and interactive sessions, this symposium seeks to amplify diverse voices, foster understanding, and promote inclusive practices in all aspects of life. Join us as we celebrate diversity and champion inclusion for individuals of all abilities.",
            "uuid": "5"
        }
    ]
    json_data = json.dumps(fakeEvents)
    return json.loads(json_data)
