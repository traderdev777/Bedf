from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from backend.app.database import get_db
from backend.app.models import MembershipApplication, AuditLog
from backend.app.schemas import MembershipCreate

router = APIRouter(tags=["Membership"])

@router.get("/membership/plans")
def get_membership_plans():
    return {
        "tiers": [
            {"tier": "Individual Member", "category": "Citizen / Student / Enthusiast"},
            {"tier": "Professional Member", "category": "Engineers / Consultants / Architects"},
            {"tier": "Business Member", "category": "MSME / Foundry / Agro Business"},
            {"tier": "Corporate Member", "category": "Tier-1 Industrial / Tech Enterprise"},
            {"tier": "Institutional Member", "category": "University / College / Research Institute"},
            {"tier": "Patron Member", "category": "Distinguished Regional Philanthropist"},
            {"tier": "Honorary Member", "category": "Invited Dignitary / Scientist"}
        ]
    }

@router.post("/membership/applications", status_code=status.HTTP_201_CREATED)
def submit_membership_application(data: MembershipCreate, db: Session = Depends(get_db)):
    app = MembershipApplication(
        full_name=data.fullName,
        email=data.email,
        phone=data.phone,
        city=data.city,
        district=data.district,
        profession=data.profession,
        organization=data.organization,
        category=data.category,
        areas_of_interest=data.areasOfInterest,
        introduction=data.introduction,
        consent=data.consent
    )
    db.add(app)
    
    # Audit trail
    log = AuditLog(
        action="MEMBERSHIP_APPLICATION_SUBMITTED",
        entity=f"Application by {data.fullName} ({data.category})",
        user_id="public_portal"
    )
    db.add(log)
    db.commit()
    db.refresh(app)
    
    return {
        "success": True,
        "message": "Application submitted successfully",
        "application_id": app.id,
        "status": app.status
    }

