from datetime import date
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
import json
from pymongo import MongoClient


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

# client = MongoClient("mongodb://localhost:27017/")
# db = client["cogniconnecto"]
# jobs_data = db["jobs"]

# jobs_data.insert_many([{
#             "Job Title": "Custodial Worker",
#             "Company": "Clean Sweep Services",
#             "Location": "Toronto, ON",
#             "Description": "Responsibilities include cleaning designated areas, disposing of trash, and maintaining cleanliness standards. Send your resume to cleansweepservices@gmail.com.",
#             "Disability Type": "Intellectual Disability",
#             "uuid": "1"
#         },

#         {
#             "Job Title": "Food Service Worker",
#             "Company": "Tasty Bites Café",
#             "Location": "Victoria, BC",
#             "Description": "Tasks include food preparation, serving customers, and maintaining kitchen hygiene. Send your resume to tastybitescafe@gmail.com.",
#             "Disability Type": "Intellectual Disability, Down Syndrome",
#             "uuid": "2"
#         },

#         {
#             "Job Title": "Library Aide",
#             "Company": "Royal Library",
#             "Location": "Vancouver, BC",
#             "Description": "Responsibilities include shelving books, assisting patrons, and organizing library materials. Send your resume to royallibrary@gmail.com.",
#             "Disability Type": "Autism, Intellectual Disability",
#             "uuid": "3"
#         },


#         {
#             "Job Title": "Garden Center Attendant",
#             "Company": "Green Thumb Garden Supplies",
#             "Location": "Calgary, AB",
#             "Description": "Duties include assisting customers with plant selection, watering plants, and maintaining garden displays. Send your resume to greenthumbgardensupplies@gmail.com.",
#             "Disability Type": "Down Syndrome",
#             "uuid": "4"
#         },


#         {
#             "Job Title": "Animal Shelter Caretaker",
#             "Company": "Paws and Claws Animal Shelter",
#             "Location": "Winnipeg, MB",
#             "Description": "Responsibilities include feeding, grooming, and providing basic care for shelter animals, as well as assisting with cleaning and organizing animal areas. Send your resume to shelter@gmail.com.",
#             "Disability Type": "Autism, Intellectual Disability",
#             "uuid": "5"
#         }])

# for job in jobs_data.find():
#     print(job)

# @router.get("/alljobs")
# async def get_jobs():
#     jobs = jobs_data.find()
#     json_data = json.dumps(jobs)
#     return json.loads(json_data)


# # @router.get("/getjobs")
# # async def get_jobs():
# #     jobs = []
# #     for x in collection.find():
# #         jobs.append(x)
# #     return jsonable_encoder(jobs)

@router.get("/alljobs")
async def get_jobs():
    fakeJobs = [
        {
            "Job_Title": "Custodial Worker",
            "Company": "Clean Sweep Services",
            "Location": "Toronto, ON",
            "Description": "Responsibilities include cleaning designated areas, disposing of trash, and maintaining cleanliness standards. Send your resume to cleansweepservices@gmail.com.",
            "Disability_Type": "Intellectual Disability",
            "uuid": "1"
        },

        {
            "Job_Title": "Food Service Worker",
            "Company": "Tasty Bites Café",
            "Location": "Victoria, BC",
            "Description": "Tasks include food preparation, serving customers, and maintaining kitchen hygiene. Send your resume to tastybitescafe@gmail.com.",
            "Disability_Type": "Intellectual Disability, Down Syndrome",
            "uuid": "2"
        },

        {
            "Job_Title": "Library Aide",
            "Company": "Royal Library",
            "Location": "Vancouver, BC",
            "Description": "Responsibilities include shelving books, assisting patrons, and organizing library materials. Send your resume to royallibrary@gmail.com.",
            "Disability_Type": "Autism, Intellectual Disability",
            "uuid": "3"
        },


        {
            "Job_Title": "Garden Center Attendant",
            "Company": "Green Thumb Garden Supplies",
            "Location": "Calgary, AB",
            "Description": "Duties include assisting customers with plant selection, watering plants, and maintaining garden displays. Send your resume to greenthumbgardensupplies@gmail.com.",
            "Disability_Type": "Down Syndrome",
            "uuid": "4"
        },


        {
            "Job_Title": "Animal Shelter Caretaker",
            "Company": "Paws and Claws Animal Shelter",
            "Location": "Winnipeg, MB",
            "Description": "Responsibilities include feeding, grooming, and providing basic care for shelter animals, as well as assisting with cleaning and organizing animal areas. Send your resume to shelter@gmail.com.",
            "Disability_Type": "Autism, Intellectual Disability",
            "uuid": "5"
        }
    ]
    json_data = json.dumps(fakeJobs)
    return json.loads(json_data)
