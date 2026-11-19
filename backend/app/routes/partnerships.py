from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from backend.app.database import get_db
from backend.app.models import PartnershipApplication, AuditLog
from backend.app.schemas import PartnershipCreate

router = APIRouter(tags=["Partnerships"])

@router.post("/partnership/applications", status_code=status.HTTP_201_CREATED)
def submit_partnership(data: PartnershipCreate, db: Session = Depends(get_db)):
    partner = PartnershipApplication(
        org_name=data.orgName,
        contact_person=data.contactPerson,
        email=data.email,
        phone=data.phone,
        org_type=data.orgType,
        collaboration_scope=data.collaborationScope,
        message=data.message
    )
    db.add(partner)

    log = AuditLog(
        action="PARTNERSHIP_EOI_SUBMITTED",
        entity=f"Partnership EOI: {data.orgName} ({data.orgType})",
        user_id="public_portal"
    )
    db.add(log)
    db.commit()
    db.refresh(partner)

    return {
        "success": True,
        "message": "Partnership expression of interest logged",
        "partner_id": partner.id,
        "status": partner.status
    }
