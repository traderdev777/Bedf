from pydantic import BaseModel, EmailStr
from typing import Optional, List, Dict, Any
from datetime import datetime

# Location Schemas
class LocationBase(BaseModel):
    id: str
    name: str
    name_kn: str
    category: str
    taluk: str
    taluk_kn: str
    lat: float
    lng: float
    is_proposed: bool = False
    tagline: Optional[str] = None
    tagline_kn: Optional[str] = None
    description: Optional[str] = None
    description_kn: Optional[str] = None
    key_highlights: Optional[List[str]] = None
    source: Optional[str] = None
    established: Optional[str] = None

    class Config:
        from_attributes = True

# Sector Schemas
class SectorBase(BaseModel):
    id: str
    slug: str
    title: str
    title_kn: str
    tagline: Optional[str] = None
    tagline_kn: Optional[str] = None
    summary: Optional[str] = None
    summary_kn: Optional[str] = None
    why_it_matters: Optional[str] = None
    belagavi_advantage: Optional[str] = None
    key_initiatives: Optional[List[str]] = None
    collaboration_scope: Optional[List[str]] = None
    icon: Optional[str] = "Cpu"
    stats: Optional[List[Dict[str, Any]]] = None

    class Config:
        from_attributes = True

# Initiative Schemas
class InitiativeBase(BaseModel):
    id: str
    slug: str
    title: str
    title_kn: str
    short_desc: Optional[str] = None
    short_desc_kn: Optional[str] = None
    status: str = "Proposed"
    category: Optional[str] = None
    objectives: Optional[List[str]] = None
    participation_scope: Optional[str] = None
    progress_updates: Optional[List[Dict[str, Any]]] = None

    class Config:
        from_attributes = True

# Report Schemas
class ReportBase(BaseModel):
    id: str
    slug: str
    title: str
    title_kn: str
    category: str
    published_date: str
    pages: int
    author: str
    summary: Optional[str] = None
    summary_kn: Optional[str] = None
    key_takeaways: Optional[List[str]] = None
    citation: Optional[str] = None
    file_url: Optional[str] = None

    class Config:
        from_attributes = True

# Membership Application
class MembershipCreate(BaseModel):
    fullName: str
    email: EmailStr
    phone: str
    city: Optional[str] = "Belagavi"
    district: Optional[str] = "Belagavi"
    profession: Optional[str] = None
    organization: Optional[str] = None
    category: str = "Professional Member"
    areasOfInterest: Optional[str] = None
    introduction: Optional[str] = None
    consent: bool = True

# Volunteer Application
class VolunteerCreate(BaseModel):
    fullName: str
    ageGroup: str = "18-25"
    email: EmailStr
    phone: str
    city: Optional[str] = "Belagavi"
    district: Optional[str] = "Belagavi"
    education: Optional[str] = None
    occupation: Optional[str] = None
    skills: Optional[str] = None
    preferredRole: str = "Technology Volunteers"
    availability: Optional[str] = "Weekends"
    preferredLanguage: Optional[str] = "Kannada & English"
    motivation: Optional[str] = None
    guardianConsent: Optional[bool] = False
    consent: bool = True

# Partnership Application
class PartnershipCreate(BaseModel):
    orgName: str
    contactPerson: str
    email: EmailStr
    phone: str
    orgType: str = "Industry / Corporate"
    collaborationScope: Optional[str] = None
    message: Optional[str] = None

# Contact Message
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    organization: Optional[str] = None
    enquiryType: str = "General Enquiry"
    message: str
