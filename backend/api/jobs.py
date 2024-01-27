from datetime import date
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
import json


class Jobs(BaseModel):
    name: str
    job: str
    image: str
    date: str
    description: str


router = APIRouter(
    prefix="/api/jobs",
    tags=["jobs"],
    responses={404: {"description": "Not found"}},
)


@router.get("/alljobs")
async def get_jobs():
    fakeJobs = [
        {
            "Job Title": "Custodial Worker",
            "Company": "Clean Sweep Services",
            "Location": "Toronto, ON",
            "Description": "Responsibilities include cleaning designated areas, disposing of trash, and maintaining cleanliness standards. Send your resume to cleansweepservices@gmail.com.",
            "Disability Type": "Intellectual Disability",
            "uuid": "1"
        },

        {
            "Job Title": "Food Service Worker",
            "Company": "Tasty Bites Café",
            "Location": "Victoria, BC",
            "Description": "Tasks include food preparation, serving customers, and maintaining kitchen hygiene. Send your resume to tastybitescafe@gmail.com.",
            "Disability Type": "Intellectual Disability, Down Syndrome",
            "uuid": "2"
        },

        {
            "Job Title": "Library Aide",
            "Company": "Royal Library",
            "Location": "Vancouver, BC",
            "Description": "Responsibilities include shelving books, assisting patrons, and organizing library materials. Send your resume to royallibrary@gmail.com.",
            "Disability Type": "Autism, Intellectual Disability",
            "uuid": "3"
        },


        {
            "Job Title": "Garden Center Attendant",
            "Company": "Green Thumb Garden Supplies",
            "Location": "Calgary, AB",
            "Description": "Duties include assisting customers with plant selection, watering plants, and maintaining garden displays. Send your resume to greenthumbgardensupplies@gmail.com.",
            "Disability Type": "Down Syndrome",
            "uuid": "4"
        },


        {
            "Job Title": "Animal Shelter Caretaker",
            "Company": "Paws and Claws Animal Shelter",
            "Location": "Winnipeg, MB",
            "Description": "Responsibilities include feeding, grooming, and providing basic care for shelter animals, as well as assisting with cleaning and organizing animal areas. Send your resume to shelter@gmail.com.",
            "Disability Type": "Autism, Intellectual Disability",
            "uuid": "5"
        }
    ]
    json_data = json.dumps(fakeJobs)
    return json.loads(json_data)
