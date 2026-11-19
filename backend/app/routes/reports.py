from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from backend.app.database import get_db
from backend.app.models import Report
from backend.app.schemas import ReportBase

router = APIRouter(tags=["Research & Insights"])

@router.get("/reports", response_model=List[ReportBase])
def get_reports(category: str = None, db: Session = Depends(get_db)):
    query = db.query(Report)
    if category and category != "All":
        query = query.filter(Report.category == category)
    return query.all()

@router.get("/datasets")
def get_open_datasets():
    return {
        "datasets": [
            {
                "id": "DS-BEL-01",
                "title": "Belagavi Taluk Demographic & Industrial Land Bank Baseline",
                "records": 15,
                "source": "Census 2011 & KIADB",
                "updated": "2026-10"
            },
            {
                "id": "DS-BEL-02",
                "title": "Sugar Mill Co-generation & Ethanol Distillation Capacities",
                "records": 29,
                "source": "SISMA / Dept of Sugar",
                "updated": "2026-09"
            }
        ]
    }

