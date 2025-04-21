from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class HealthDataBase(BaseModel):
    age: int
    bmi: float
    glucose: float
    blood_pressure: float
    insulin: float

class HealthDataCreate(HealthDataBase):
    pass

class HealthData(HealthDataBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class PredictionInput(BaseModel):
    age: int
    bmi: float
    glucose: float
    blood_pressure: float
    insulin: float

class PredictionOutput(BaseModel):
    risk_score: float
    risk_level: str