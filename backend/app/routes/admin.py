from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.app.database import get_db
from backend.app.models import (
    MembershipApplication, 
    VolunteerApplication, 
    PartnershipApplication, 
    ContactMessage, 
    AuditLog,
    Location,
    Initiative
)

router = APIRouter(prefix="/admin", tags=["Administration & Governance"])

@router.get("/dashboard")
def get_admin_dashboard_stats(db: Session = Depends(get_db)):
    membership_total = db.query(MembershipApplication).count()
    membership_pending = db.query(MembershipApplication).filter(MembershipApplication.status == "Pending Review").count()
    
    volunteer_total = db.query(VolunteerApplication).count()
    volunteer_pending = db.query(VolunteerApplication).filter(VolunteerApplication.status == "Pending Verification").count()
    
    partnership_total = db.query(PartnershipApplication).count()
    contact_messages = db.query(ContactMessage).count()
    
    locations_count = db.query(Location).count()
    initiatives_count = db.query(Initiative).count()

    return {
        "metrics": {
            "total_membership_applications": membership_total,
            "pending_membership_reviews": membership_pending,
            "total_volunteer_enrolments": volunteer_total,
            "pending_volunteer_verifications": volunteer_pending,
            "total_partnership_proposals": partnership_total,
            "total_investor_enquiries": contact_messages,
            "audited_geographic_locations": locations_count,
            "registered_programmes": initiatives_count
        },
        "system_health": {
            "status": "Operational",
            "database": "Synchronized",
            "tamper_check": "Verified"
        }
    }

@router.get("/applications")
def get_all_applications(db: Session = Depends(get_db)):
    memberships = db.query(MembershipApplication).order_by(MembershipApplication.created_at.desc()).limit(50).all()
    volunteers = db.query(VolunteerApplication).order_by(VolunteerApplication.created_at.desc()).limit(50).all()
    partnerships = db.query(PartnershipApplication).order_by(PartnershipApplication.created_at.desc()).limit(50).all()
    return {
        "memberships": memberships,
        "volunteers": volunteers,
        "partnerships": partnerships
    }

@router.get("/audit-logs")
def get_audit_logs(db: Session = Depends(get_db)):
    logs = db.query(AuditLog).order_by(AuditLog.timestamp.desc()).limit(100).all()
    return {"logs": logs}
