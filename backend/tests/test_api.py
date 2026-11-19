from fastapi.testclient import TestClient
from backend.app.main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert "Belagavi Economic Development Foundation" in data["organization"]
    assert data["status"] == "Operational"

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"

def test_get_sectors():
    response = client.get("/api/v1/sectors")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 7

def test_get_locations():
    response = client.get("/api/v1/locations")
    assert response.status_code == 200
    data = response.json()
    assert len(data) > 0

def test_membership_application():
    payload = {
        "fullName": "Test Industrialist",
        "email": "test@bedf.org",
        "phone": "+91 901 908 8160",
        "city": "Belagavi",
        "district": "Belagavi",
        "profession": "Precision Machining Engineer",
        "organization": "Belagavi Foundries Pvt Ltd",
        "category": "Corporate Member",
        "areasOfInterest": "Aerospace, Foundries",
        "introduction": "Testing automated API verification",
        "consent": True
    }
    response = client.post("/api/v1/membership/applications", json=payload)
    assert response.status_code == 201
    assert response.json()["success"] is True

def test_admin_dashboard_metrics():
    response = client.get("/api/v1/admin/dashboard")
    assert response.status_code == 200
    data = response.json()
    assert "metrics" in data
    assert data["metrics"]["total_membership_applications"] >= 1
