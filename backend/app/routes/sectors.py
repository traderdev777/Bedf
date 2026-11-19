from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from backend.app.database import get_db
from backend.app.models import Sector
from backend.app.schemas import SectorBase

router = APIRouter(tags=["Focus Areas"])

@router.get("/sectors", response_model=List[SectorBase])
def get_sectors(db: Session = Depends(get_db)):
    return db.query(Sector).all()

@router.get("/sectors/{slug}", response_model=SectorBase)
def get_sector_by_slug(slug: str, db: Session = Depends(get_db)):
    sector = db.query(Sector).filter(Sector.slug == slug).first()
    if not sector:
        raise HTTPException(status_code=404, detail="Sector not found")
    return sector
