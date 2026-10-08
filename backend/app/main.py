from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="SupplyMind API",
    description="AI-powered supply chain and inventory intelligence platform.",
    version="1.0.0",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "SupplyMind API is running",
        "status": "success",
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "SupplyMind Backend",
    }