
from fastapi import FastAPI, HTTPException, Request
from api import events,jobs
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(events.router)
app.include_router(jobs.router)

@app.get("/")
async def read_root():
    return {"Hello": "World"}
