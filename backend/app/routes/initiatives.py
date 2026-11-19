from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from backend.app.database import get_db
from backend.app.models import Initiative
from backend.app.schemas import InitiativeBase

router = APIRouter(tags=["Projects & Initiatives"])

@router.get("/projects", response_model=List[InitiativeBase])
def get_projects(status: str = None, db: Session = Depends(get_db)):
    query = db.query(Initiative)
    if status and status != "All":
        query = query.filter(Initiative.status == status)
    return query.all()

@router.get("/projects/{slug}", response_model=InitiativeBase)
def get_project_by_slug(slug: str, db: Session = Depends(get_db)):
    proj = db.query(Initiative).filter(Initiative.slug == slug).first()
    if not proj:
        raise HTTPException(status_code=404, detail="Initiative not found")
    return proj
