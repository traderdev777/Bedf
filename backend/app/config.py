import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Belagavi Economic Development Foundation (BEDF)"
    API_V1_STR: str = "/api/v1"
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./bedf.db")
    OFFICIAL_CONTACT: str = "+91 901 908 8160"
    OFFICIAL_EMAIL: str = "contact@bedf.org"
    CORS_ORIGINS: list[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://bedf.org",
        "https://www.bedf.org"
    ]

    class Config:
        env_file = ".env"
        extra = "allow"

settings = Settings()
