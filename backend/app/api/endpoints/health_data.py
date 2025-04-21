from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database.database import get_db
from app.database.models import HealthData
from app.models.schemas import HealthDataCreate, HealthData

router = APIRouter()

@router.post("/", response_model=HealthData)
async def create_health_data(data: HealthDataCreate, db: Session = Depends(get_db)):
    db_data = HealthData(**data.dict())
    db.add(db_data)
    db.commit()
    db.refresh(db_data)
    return db_data

@router.get("/", response_model=List[HealthData])
async def get_health_data(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(HealthData).offset(skip).limit(limit).all()

@router.get("/{id}", response_model=HealthData)
async def get_health_data_by_id(id: int, db: Session = Depends(get_db)):
    data = db.query(HealthData).filter(HealthData.id == id).first()
    if not data:
        raise HTTPException(status_code=404, detail="Data not found")
    return data