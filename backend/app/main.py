from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.config import settings
from backend.app.database import engine, Base
from backend.app.routes import (
    locations,
    sectors,
    initiatives,
    membership,
    volunteers,
    partnerships,
    contact,
    reports,
    admin
)

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Official REST API for the Belagavi Economic Development Foundation (BEDF). Building Belagavi. Empowering North Karnataka.",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Flexible for local dev & production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API v1 Routers
app.include_router(locations.router, prefix=settings.API_V1_STR)
app.include_router(sectors.router, prefix=settings.API_V1_STR)
app.include_router(initiatives.router, prefix=settings.API_V1_STR)
app.include_router(membership.router, prefix=settings.API_V1_STR)
app.include_router(volunteers.router, prefix=settings.API_V1_STR)
app.include_router(partnerships.router, prefix=settings.API_V1_STR)
app.include_router(contact.router, prefix=settings.API_V1_STR)
app.include_router(reports.router, prefix=settings.API_V1_STR)
app.include_router(admin.router, prefix=settings.API_V1_STR)

@app.get("/")
def root():
    return {
        "organization": "Belagavi Economic Development Foundation (BEDF)",
        "tagline": "Building Belagavi. Empowering North Karnataka.",
        "kannada": "ಬೆಳಗಾವಿ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ ಪ್ರತಿಷ್ಠಾನ",
        "official_hotline": settings.OFFICIAL_CONTACT,
        "api_docs": "/docs",
        "version": "1.0.0",
        "status": "Operational"
    }

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "BEDF Master API"}

