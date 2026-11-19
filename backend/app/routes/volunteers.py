from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from backend.app.database import get_db
from backend.app.models import VolunteerApplication, AuditLog
from backend.app.schemas import VolunteerCreate

router = APIRouter(tags=["Volunteer Network"])

@router.get("/volunteer/categories")
def get_volunteer_categories():
    return {
        "categories": [
            "Youth Volunteers",
            "Technology Volunteers",
            "AI and IT Volunteers",
            "Research Volunteers",
            "Industry Volunteers",
            "Education Volunteers",
            "Social Media Volunteers",
            "Event Volunteers",
            "Kannada Content Volunteers",
            "Business Outreach Volunteers",
            "District Coordinators"
        ]
    }

@router.post("/volunteer/applications", status_code=status.HTTP_201_CREATED)
def submit_volunteer_application(data: VolunteerCreate, db: Session = Depends(get_db)):
    vol = VolunteerApplication(
        full_name=data.fullName,
        age_group=data.ageGroup,
        email=data.email,
        phone=data.phone,
        city=data.city,
        district=data.district,
        education=data.education,
        occupation=data.occupation,
        skills=data.skills,
        preferred_role=data.preferredRole,
        availability=data.availability,
        preferred_language=data.preferredLanguage,
        motivation=data.motivation,
        guardian_consent=data.guardianConsent,
        consent=data.consent
    )
    db.add(vol)

    log = AuditLog(
        action="VOLUNTEER_APPLICATION_SUBMITTED",
        entity=f"Volunteer: {data.fullName} - {data.preferredRole}",
        user_id="public_portal"
    )
    db.add(log)
    db.commit()
    db.refresh(vol)

    return {
        "success": True,
        "message": "Volunteer enrolment received",
        "volunteer_id": vol.id,
        "status": vol.status
    }
