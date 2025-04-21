from sqlalchemy import Column, Integer, Float, String, DateTime
from app.database.database import Base
from datetime import datetime

class HealthData(Base):
    __tablename__ = "health_data"

    id = Column(Integer, primary_key=True, index=True)
    age = Column(Integer)
    bmi = Column(Float)
    glucose = Column(Float)
    blood_pressure = Column(Float)
    insulin = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)