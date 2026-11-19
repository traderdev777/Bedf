from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from backend.app.database import get_db
from backend.app.models import ContactMessage, AuditLog
from backend.app.schemas import ContactCreate

router = APIRouter(tags=["Contact"])

@router.post("/contact", status_code=status.HTTP_201_CREATED)
def submit_contact_message(data: ContactCreate, db: Session = Depends(get_db)):
    msg = ContactMessage(
        name=data.name,
        email=data.email,
        phone=data.phone,
        organization=data.organization,
        enquiry_type=data.enquiryType,
        message=data.message
    )
    db.add(msg)

    log = AuditLog(
        action="CONTACT_ENQUIRY_DISPATCHED",
        entity=f"Enquiry from {data.name} [{data.enquiryType}]",
        user_id="public_portal"
    )
    db.add(log)
    db.commit()
    db.refresh(msg)

    return {
        "success": True,
        "message": "Enquiry received by BEDF Secretariat",
        "message_id": msg.id
    }

