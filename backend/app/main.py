from fastapi import FastAPI
from app.api.endpoints import health_data, predictions
from app.database.database import engine
from app.database.models import Base

app = FastAPI(title="Health Risk Prediction API")

# Create database tables
Base.metadata.create_all(bind=engine)

# Include API routers
app.include_router(health_data.router, prefix="/api/v1/health", tags=["Health Data"])
app.include_router(predictions.router, prefix="/api/v1/predictions", tags=["Predictions"])

@app.get("/")
async def root():
    return {"message": "Health Risk Prediction API"}