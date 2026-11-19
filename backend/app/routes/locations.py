from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from backend.app.database import get_db
from backend.app.models import Location
from backend.app.schemas import LocationBase

router = APIRouter(tags=["Geography & Locations"])

@router.get("/locations", response_model=List[LocationBase])
def get_locations(category: str = None, taluk: str = None, db: Session = Depends(get_db)):
    query = db.query(Location)
    if category and category != "All":
        query = query.filter(Location.category == category)
    if taluk and taluk != "all":
        query = query.filter(Location.taluk.ilike(taluk))
    return query.all()

@router.get("/map-data")
def get_map_data(db: Session = Depends(get_db)):
    locations = db.query(Location).all()
    return {
        "district": "Belagavi",
        "state": "Karnataka",
        "taluks_count": 15,
        "total_locations": len(locations),
        "locations": locations
    }

@router.get("/districts")
def get_districts():
    return {
        "district": "Belagavi",
        "headquarters": "Belagavi City",
        "taluks": [
            "Belagavi", "Hukkeri", "Gokak", "Chikkodi", "Bailhongal", 
            "Khanapur", "Saundatti", "Ramdurg", "Athani", "Raybag", 
            "Nipani", "Kittur", "Mudalgi", "Kagwad", "Yaragatti"
        ]
    }

