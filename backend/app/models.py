import uuid
from datetime import datetime
from sqlalchemy import Column, String, Integer, Float, Boolean, Text, DateTime, ForeignKey, JSON
from backend.app.database import Base

def generate_uuid():
    return str(uuid.uuid4())

class Location(Base):
    __tablename__ = "locations"

    id = Column(String(50), primary_key=True, default=generate_uuid)
    name = Column(String(255), nullable=False)
    name_kn = Column(String(255), nullable=False)
    category = Column(String(100), nullable=False)
    taluk = Column(String(100), nullable=False)
    taluk_kn = Column(String(100), nullable=False)
    lat = Column(Float, nullable=False)
    lng = Column(Float, nullable=False)
    is_proposed = Column(Boolean, default=False)
    tagline = Column(String(255), nullable=True)
    tagline_kn = Column(String(255), nullable=True)
    description = Column(Text, nullable=True)
    description_kn = Column(Text, nullable=True)
    key_highlights = Column(JSON, nullable=True)
    source = Column(String(255), nullable=True)
    established = Column(String(50), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class Sector(Base):
    __tablename__ = "sectors"

    id = Column(String(50), primary_key=True, default=generate_uuid)
    slug = Column(String(100), unique=True, nullable=False)
    title = Column(String(255), nullable=False)
    title_kn = Column(String(255), nullable=False)
    tagline = Column(String(255), nullable=True)
    tagline_kn = Column(String(255), nullable=True)
    summary = Column(Text, nullable=True)
    summary_kn = Column(Text, nullable=True)
    why_it_matters = Column(Text, nullable=True)
    belagavi_advantage = Column(Text, nullable=True)
    key_initiatives = Column(JSON, nullable=True)
    collaboration_scope = Column(JSON, nullable=True)
    icon = Column(String(50), default="Cpu")
    stats = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class Initiative(Base):
    __tablename__ = "initiatives"

    id = Column(String(50), primary_key=True, default=generate_uuid)
    slug = Column(String(100), unique=True, nullable=False)
    title = Column(String(255), nullable=False)
    title_kn = Column(String(255), nullable=False)
    short_desc = Column(Text, nullable=True)
    short_desc_kn = Column(Text, nullable=True)
    status = Column(String(50), default="Proposed") # Proposed, Under Development, Active, Completed
    category = Column(String(100), nullable=True)
    objectives = Column(JSON, nullable=True)
    participation_scope = Column(Text, nullable=True)
    progress_updates = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class Report(Base):
    __tablename__ = "reports"

    id = Column(String(50), primary_key=True, default=generate_uuid)
    slug = Column(String(100), unique=True, nullable=False)
    title = Column(String(255), nullable=False)
    title_kn = Column(String(255), nullable=False)
    category = Column(String(100), nullable=False)
    published_date = Column(String(50), nullable=False)
    pages = Column(Integer, default=24)
    author = Column(String(100), default="BEDF Research & Policy Wing")
    summary = Column(Text, nullable=True)
    summary_kn = Column(Text, nullable=True)
    key_takeaways = Column(JSON, nullable=True)
    citation = Column(String(255), nullable=True)
    file_url = Column(String(255), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class MembershipApplication(Base):
    __tablename__ = "membership_applications"

    id = Column(String(50), primary_key=True, default=generate_uuid)
    full_name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    phone = Column(String(50), nullable=False)
    city = Column(String(100), default="Belagavi")
    district = Column(String(100), default="Belagavi")
    profession = Column(String(255), nullable=True)
    organization = Column(String(255), nullable=True)
    category = Column(String(100), default="Professional Member")
    areas_of_interest = Column(String(255), nullable=True)
    introduction = Column(Text, nullable=True)
    consent = Column(Boolean, default=True)
    status = Column(String(50), default="Pending Review")
    created_at = Column(DateTime, default=datetime.utcnow)

class VolunteerApplication(Base):
    __tablename__ = "volunteer_applications"

    id = Column(String(50), primary_key=True, default=generate_uuid)
    full_name = Column(String(255), nullable=False)
    age_group = Column(String(50), default="18-25")
    email = Column(String(255), nullable=False)
    phone = Column(String(50), nullable=False)
    city = Column(String(100), default="Belagavi")
    district = Column(String(100), default="Belagavi")
    education = Column(String(255), nullable=True)
    occupation = Column(String(255), nullable=True)
    skills = Column(Text, nullable=True)
    preferred_role = Column(String(100), default="Technology Volunteers")
    availability = Column(String(100), default="Weekends")
    preferred_language = Column(String(100), default="Kannada & English")
    motivation = Column(Text, nullable=True)
    guardian_consent = Column(Boolean, default=False)
    consent = Column(Boolean, default=True)
    status = Column(String(50), default="Pending Verification")
    created_at = Column(DateTime, default=datetime.utcnow)

class PartnershipApplication(Base):
    __tablename__ = "partnership_applications"

    id = Column(String(50), primary_key=True, default=generate_uuid)
    org_name = Column(String(255), nullable=False)
    contact_person = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    phone = Column(String(50), nullable=False)
    org_type = Column(String(100), default="Industry / Corporate")
    collaboration_scope = Column(Text, nullable=True)
    message = Column(Text, nullable=True)
    status = Column(String(50), default="Received")
    created_at = Column(DateTime, default=datetime.utcnow)

class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(String(50), primary_key=True, default=generate_uuid)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    phone = Column(String(50), nullable=False)
    organization = Column(String(255), nullable=True)
    enquiry_type = Column(String(100), default="General Enquiry")
    message = Column(Text, nullable=False)
    status = Column(String(50), default="New")
    created_at = Column(DateTime, default=datetime.utcnow)

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(String(50), primary_key=True, default=generate_uuid)
    action = Column(String(100), nullable=False)
    entity = Column(String(255), nullable=False)
    user_id = Column(String(100), default="system")
    details = Column(Text, nullable=True)
    timestamp = Column(DateTime, default=datetime.utcnow)
