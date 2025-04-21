from fastapi import APIRouter, Depends
from app.models.schemas import PredictionInput, PredictionOutput
from app.ml.predict import predict_risk

router = APIRouter()

@router.post("/", response_model=PredictionOutput)
async def predict(data: PredictionInput):
    risk_score = predict_risk(data.dict())
    risk_level = "High" if risk_score > 0.7 else "Medium" if risk_score > 0.3 else "Low"
    return {"risk_score": risk_score, "risk_level": risk_level}