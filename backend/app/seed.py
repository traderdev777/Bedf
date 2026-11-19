import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))

from backend.app.database import engine, SessionLocal, Base
from backend.app.models import Location, Sector, Initiative, Report, MembershipApplication, AuditLog

SEED_SECTORS = [
    {
        "id": "ai-tech",
        "slug": "artificial-intelligence-technology",
        "title": "Artificial Intelligence & Technology",
        "title_kn": "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ",
        "tagline": "Unlocking Tier-2 Tech Sovereignty and Intelligent Systems",
        "tagline_kn": "ದ್ವಿತೀಯ ಶ್ರೇಣಿಯ ತಂತ್ರಜ್ಞಾನ ನಾವೀನ್ಯತೆ ಮತ್ತು ಸ್ವಾವಲಂಬನೆ",
        "summary": "Fostering enterprise software, software-as-a-service (SaaS), edge AI, embedded intelligence, and specialized engineering IT services tailored for manufacturing.",
        "summary_kn": "ಉತ್ಪಾದನಾ ವಲಯಕ್ಕೆ ಪೂರಕವಾದ ಎಂಟರ್‌ಪ್ರೈಸ್ ಸಾಫ್ಟ್‌ವೇರ್, ಸಾಸ್ (SaaS), ಎಡ್ಜ್ ಎಐ ಮತ್ತು ಎಂಬೆಡೆಡ್ ಇಂಟೆಲಿಜೆನ್ಸ್ ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ಉತ್ತೇಜಿಸುವುದು.",
        "why_it_matters": "High living costs in tier-1 tech metros make Belagavi an attractive alternative with high engineer retention, lower infrastructure burn rates, and world-class quality of life.",
        "belagavi_advantage": "Direct access to VTU's statewide talent pipeline, existing optical fiber connectivity, and pleasant year-round climate attracting skilled returnees.",
        "key_initiatives": ["Belagavi AI Sandbox Lab", "Tier-2 SaaS Incubation Grants", "GPU & Edge-Compute Facility Access"],
        "collaboration_scope": ["Tech multinational offshore engineering centers", "Cloud infrastructure providers", "Regional academic AI testbeds"],
        "icon": "Cpu",
        "stats": [{"label": "Graduating Engineers/Year", "value": "15,000+"}]
    },
    {
        "id": "aerospace-aeronautical",
        "slug": "aerospace-aeronautical",
        "title": "Aerospace & Aeronautical",
        "title_kn": "ಏರೋಸ್ಪೇಸ್ ಮತ್ತು ಏರೋನಾಟಿಕಲ್",
        "tagline": "Home of India's Pioneer Precision Aerospace SEZ",
        "tagline_kn": "ಭಾರತದ ಮೊದಲ ನಿಖರ ಏರೋಸ್ಪೇಸ್ ಸೆಜ್‌ನ ಹೆಮ್ಮೆಯ ತವರು",
        "summary": "Precision CNC machining, titanium structural airframe parts, landing gear actuators, aero-engine assemblies, and aviation interiors.",
        "summary_kn": "ಏರ್‌ಫ್ರೇಮ್ ಭಾಗಗಳು, ಲ್ಯಾಂಡಿಂಗ್ ಗೇರ್, ಏರೋ-ಎಂಜಿನ್ ಬಿಡಿಭಾಗಗಳು ಮತ್ತು ನಿಖರ ಸಿಎನ್‌ಸಿ ಮ್ಯಾಚಿಂಗ್ ಉತ್ಪಾದನೆ.",
        "why_it_matters": "Global civil and defence aviation orders require robust Tier-2 & Tier-3 precision suppliers capable of sub-micron tolerance and AS9100 certification.",
        "belagavi_advantage": "The established Aequs SEZ at Hattargi proves global viability with active supply contracts to Boeing, Airbus, Safran, and Collins Aerospace.",
        "key_initiatives": ["Civil & Defence MRO Blueprint", "Avionics Surface-Treatment Cluster", "Aerospace AS9100 Certification Support"],
        "collaboration_scope": ["Global Tier-1 aerostructure integrators", "AAI Sambra civil-enclave expansion", "Defence offset program coordinators"],
        "icon": "Plane",
        "stats": [{"label": "Precision SEZ Campus", "value": "250+ Acres"}]
    },
    {
        "id": "defence-technology",
        "slug": "defence-advanced-technology",
        "title": "Defence & Advanced Technology",
        "title_kn": "ರಕ್ಷಣೆ ಮತ್ತು ಸುಧಾರಿತ ತಂತ್ರಜ್ಞಾನ",
        "tagline": "Heritage of Valor Powered by Tactical Engineering",
        "tagline_kn": "ಶೌರ್ಯದ ಪರಂಪರೆಯೊಂದಿಗೆ ಆಧುನಿಕ ರಕ್ಷಣಾ ಎಂಜಿನಿಯರಿಂಗ್",
        "summary": "Defence electronics, ruggedized communication hardware, tactical drones, composite ballistic armaments, and precision military mechanisms.",
        "summary_kn": "ರಕ್ಷಣಾ ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್, ಸಂವಹನ ಸಾಧನಗಳು, ಯುದ್ಧ ಡ್ರೋನ್‌ಗಳು ಮತ್ತು ಶಸ್ತ್ರಾಸ್ತ್ರ ಬಿಡಿಭಾಗಗಳ ತಯಾರಿಕೆ.",
        "why_it_matters": "India's Atmanirbhar Bharat defence offset mandate accelerates domestic sourcing of critical sub-assemblies and replacement components.",
        "belagavi_advantage": "Deep-rooted military presence with MLIRC, Commando Training Wing, and Air Force Station Sambra combined with metallurgic foundries.",
        "key_initiatives": ["Tactical UAV Testing Corridor", "Defence Casting Quality Lab", "Veterans Technical Skilling Initiative"],
        "collaboration_scope": ["DRDO laboratory partnerships", "Defence Public Sector Undertakings (DPSUs)", "Private tactical technology manufacturers"],
        "icon": "Shield",
        "stats": [{"label": "Military Heritage Since", "value": "1768"}]
    },
    {
        "id": "advanced-manufacturing",
        "slug": "advanced-manufacturing",
        "title": "Advanced Manufacturing",
        "title_kn": "ಸುಧಾರಿತ ಉತ್ಪಾದನೆ ಮತ್ತು ಎಂಜಿನಿಯರಿಂಗ್",
        "tagline": "Foundry Capital of South India Evolving to Smart Factories",
        "tagline_kn": "ದಕ್ಷಿಣ ಭಾರತದ ಫೌಂಡ್ರಿ ರಾಜಧಾನಿಯಿಂದ ಸ್ಮಾರ್ಟ್ ಫ್ಯಾಕ್ಟರಿಯತ್ತ",
        "summary": "Hydraulic actuators, crankshafts, ductile iron castings, precision molds, EV battery pack enclosures, and robotic automated welding.",
        "summary_kn": "ಹೈಡ್ರಾಲಿಕ್ ಉಪಕರಣಗಳು, ಆಟೋಮೋಟಿವ್ ಕ್ಯಾಸ್ಟಿಂಗ್ಸ್, ನಿಖರ ಮೋಲ್ಡ್‌ಗಳು ಮತ್ತು ರೋಬೋಟಿಕ್ ವೆಲ್ಡಿಂಗ್ ಸೌಲಭ್ಯಗಳು.",
        "why_it_matters": "High quality castings and hydraulics form the non-negotiable structural foundation of automotive, agricultural, and industrial infrastructure.",
        "belagavi_advantage": "Established Machhe, Udyambag and Honaga industrial estates housing centuries of foundry mastery and export track records.",
        "key_initiatives": ["Foundry Green Transition (Induction Melters)", "Smart Factory Sensor Pilot", "Hydraulic Component Export Consortium"],
        "collaboration_scope": ["International agricultural equipment OEMs", "Automotive Tier-1 multinational firms", "Energy efficiency consortia"],
        "icon": "Cog",
        "stats": [{"label": "Active Foundry Establishments", "value": "200+"}]
    },
    {
        "id": "startups-entrepreneurship",
        "slug": "startups-entrepreneurship",
        "title": "Startups & Entrepreneurship",
        "title_kn": "ಸ್ಟಾರ್ಟಪ್ ಮತ್ತು ಉದ್ಯಮಶೀಲತೆ",
        "tagline": "Empowering Resilient Founders from North Karnataka",
        "tagline_kn": "ಉತ್ತರ ಕರ್ನಾಟಕದ ನವೋದ್ಯಮಿಗಳ ಸಬಲೀಕರಣ",
        "summary": "Seed stage venture support, product validation labs, angel investor syndication, and IP patent filing assistance.",
        "summary_kn": "ಆರಂಭಿಕ ಹಂತದ ಬಂಡವಾಳ ಬೆಂಬಲ, ಉತ್ಪನ್ನ ಪರೀಕ್ಷಾ ಲ್ಯಾಬ್‌ಗಳು ಮತ್ತು ಪೇಟೆಂಟ್ ನೆರವು.",
        "why_it_matters": "Building homegrown technology companies creates localized high-value employment and keeps regional wealth invested in local development.",
        "belagavi_advantage": "Affordable prototyping costs, active entrepreneurial networks, and proximity to both Bengaluru and Pune venture capital ecosystems.",
        "key_initiatives": ["BEDF North Karnataka Angel Syndicate", "Hardware Makerspace Hub", "Women Entrepreneurs Regional Network"],
        "collaboration_scope": ["Venture capital funds & family offices", "KITS startup ecosystem enablers", "University entrepreneurship cells"],
        "icon": "Rocket",
        "stats": [{"label": "Incubated Prototypes Target", "value": "100+"}]
    },
    {
        "id": "education-research",
        "slug": "education-research",
        "title": "Education & Research",
        "title_kn": "ಶಿಕ್ಷಣ ಮತ್ತು ಸಂಶೋಧನೆ",
        "tagline": "The University Epicenter of Karnataka's Engineering Future",
        "tagline_kn": "ಕರ್ನಾಟಕದ ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣದ ಮುಂಚೂಣಿ ರಾಜಧಾನಿ",
        "summary": "World-class university ecosystems, advanced postgraduate laboratories, translational industry research, and lifelong technical skilling.",
        "summary_kn": "ವಿಶ್ವದರ್ಜೆಯ ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು, ಸ್ನಾತಕೋತ್ತರ ಸಂಶೋಧನಾ ಪ್ರಯೋಗಾಲಯಗಳು ಮತ್ತು ಸುಧಾರಿತ ಕೌಶಲ್ಯ ತರಬೇತಿ.",
        "why_it_matters": "Sustainable industrial leadership requires a continuous, future-ready talent supply equipped with real-world problem-solving abilities.",
        "belagavi_advantage": "Home to the headquarters of VTU governing 200+ colleges, premier medical hubs like KAHER, and top colleges like KLS GIT.",
        "key_initiatives": ["Industry-Curriculum Synchronization", "Joint Applied Research Grants", "Technician Finishing School"],
        "collaboration_scope": ["International university exchange programs", "Corporate sponsored R&D chairs", "National testing laboratories"],
        "icon": "GraduationCap",
        "stats": [{"label": "VTU Affiliated Colleges", "value": "200+"}]
    },
    {
        "id": "trade-investment",
        "slug": "trade-investment",
        "title": "Trade, Investment & Logistics",
        "title_kn": "ವ್ಯಾಪಾರ, ಹೂಡಿಕೆ ಮತ್ತು ಲಾಜಿಸ್ಟಿಕ್ಸ್",
        "tagline": "Tri-Junction Powerhouse Linking Karnataka, Maharashtra & Goa",
        "tagline_kn": "ಕರ್ನಾಟಕ, ಮಹಾರಾಷ್ಟ್ರ ಮತ್ತು ಗೋವಾ ಬೆಸೆಯುವ ಪ್ರಮುಖ ವ್ಯಾಪಾರ ಕೇಂದ್ರ",
        "summary": "Export promotion, multi-modal container transport, cold chains for horticulture, and streamlined industrial liaison.",
        "summary_kn": "ರಫ್ತು ಪ್ರೋತ್ಸಾಹ, ಮಲ್ಟಿ-ಮೋಡಲ್ ಸರಕು ಸಾಗಣೆ, ಕೃಷಿ ಉತ್ಪನ್ನಗಳ ಶೀತಲ ಶೇಖರಣೆ ಮತ್ತು ಹೂಡಿಕೆ ಮಾರ್ಗದರ್ಶನ.",
        "why_it_matters": "Direct geographical proximity to major western seaports (Mormugao, JNPT) cuts transit times and reduces supply chain vulnerabilities.",
        "belagavi_advantage": "Positioned directly on NH-48 with 6-lane access, 100km to Goa ports, 2,300m airport runway, and dual-track electrified freight rail.",
        "key_initiatives": ["Multi-Modal Logistics Park Blueprint", "Belagavi Global Exporters Desk", "Single-Window Investor Facilitation Guide"],
        "collaboration_scope": ["Federation of Indian Export Organisations (FIEO)", "Port authorities at Mormugao & JNPT", "Industrial development corporations"],
        "icon": "TrendingUp",
        "stats": [{"label": "Distance to Sea Ports", "value": "~105 Km"}]
    }
]

SEED_LOCATIONS = [
    {
        "id": "aequs-sez",
        "name": "Aequs Precision Engineering SEZ",
        "name_kn": "ಏಕ್ವಸ್ ಪ್ರೆಸಿಷನ್ ಎಂಜಿನಿಯರಿಂಗ್ ಸೆಜ್",
        "category": "Aerospace",
        "taluk": "Hukkeri",
        "taluk_kn": "ಹುಕ್ಕೇರಿ",
        "lat": 16.1824,
        "lng": 74.5829,
        "is_proposed": False,
        "tagline": "India's first notified precision engineering Special Economic Zone",
        "description": "Spread across 250+ acres at Hattargi, Aequs is an integrated aerospace manufacturing ecosystem supplying critical machined aerostructure components to Airbus, Boeing, Safran, Collins Aerospace, and Bombardier.",
        "source": "KIADB & Aequs SEZ Gazetted Notification",
        "established": "2009"
    },
    {
        "id": "vtu-headquarters",
        "name": "Visvesvaraya Technological University (VTU) HQ",
        "name_kn": "ವಿಶ್ವೇಶ್ವರಯ್ಯ ತಾಂತ್ರಿಕ ವಿಶ್ವವಿದ್ಯಾಲಯ (ವಿಟಿಯು) ಮುಖ್ಯ ಕಚೇರಿ",
        "category": "Education",
        "taluk": "Belagavi",
        "taluk_kn": "ಬೆಳಗಾವಿ",
        "lat": 15.8988,
        "lng": 74.5489,
        "is_proposed": False,
        "tagline": "The apex university governing 200+ engineering institutions in Karnataka",
        "description": "Spread over a sprawling 120-acre 'Jnana Sangama' campus, VTU sets academic curricula, leads research initiatives, and incubates state-level technological patents.",
        "source": "VTU Official Act & Gazetted Headquarters",
        "established": "1998"
    },
    {
        "id": "machhe-ind",
        "name": "Machhe Industrial Estate",
        "name_kn": "ಮಚ್ಚೆ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ",
        "category": "Industrial",
        "taluk": "Belagavi",
        "taluk_kn": "ಬೆಳಗಾವಿ",
        "lat": 15.8015,
        "lng": 74.4690,
        "is_proposed": False,
        "tagline": "Major hub for precision casting, auto components & CNC machining",
        "description": "Houses heavy casting units, high-grade CNC machining plants, and specialized automotive component exporters supplying Tier-1 OEMs worldwide.",
        "source": "KIADB & BCCI"
    },
    {
        "id": "udyambag-foundry",
        "name": "Udyambag Foundry Cluster",
        "name_kn": "ಉದ್ಯಮಭಾಗ್ ಫೌಂಡ್ರಿ ಕ್ಲಸ್ಟರ್",
        "category": "Industrial",
        "taluk": "Belagavi",
        "taluk_kn": "ಬೆಳಗಾವಿ",
        "lat": 15.8230,
        "lng": 74.4980,
        "is_proposed": False,
        "tagline": "The historic foundry capital of South India (over 200 operational units)",
        "description": "Belagavi's flagship manufacturing zone, renowned across India for hydraulic components, crankshafts, engine blocks, and valve castings.",
        "source": "Belgaum Foundry Cluster (BFC)"
    },
    {
        "id": "belagavi-airport",
        "name": "Belagavi Airport (Sambra - IXG)",
        "name_kn": "ಬೆಳಗಾವಿ ವಿಮಾನ ನಿಲ್ದಾಣ (ಸಾಂಬ್ರಾ - IXG)",
        "category": "Logistics",
        "taluk": "Belagavi",
        "taluk_kn": "ಬೆಳಗಾವಿ",
        "lat": 15.8595,
        "lng": 74.6178,
        "is_proposed": False,
        "tagline": "Direct commercial flights connecting to Bengaluru, Mumbai, Delhi & Hyderabad",
        "description": "Features a modern passenger terminal and an upgraded 2,300m runway capable of operating all narrowbody jet airliners.",
        "source": "Airports Authority of India (AAI)"
    },
    {
        "id": "suvarna-vidhana-soudha",
        "name": "Suvarna Vidhana Soudha",
        "name_kn": "ಸುವರ್ಣ ವಿಧಾನ ಸೌಧ",
        "category": "Logistics",
        "taluk": "Belagavi",
        "taluk_kn": "ಬೆಳಗಾವಿ",
        "lat": 15.8710,
        "lng": 74.5820,
        "is_proposed": False,
        "tagline": "The monumental second legislative capital seat of Karnataka",
        "description": "Spread over 127 acres, this majestic building hosts the annual winter session of the Karnataka State Legislature.",
        "source": "Govt of Karnataka",
        "established": "2012"
    }
]

def run_seed():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    try:
        # Seed Sectors
        if db.query(Sector).count() == 0:
            for s in SEED_SECTORS:
                db.add(Sector(
                    id=s["id"],
                    slug=s["slug"],
                    title=s["title"],
                    title_kn=s["title_kn"],
                    tagline=s["tagline"],
                    tagline_kn=s["tagline_kn"],
                    summary=s["summary"],
                    summary_kn=s["summary_kn"],
                    why_it_matters=s["why_it_matters"],
                    belagavi_advantage=s["belagavi_advantage"],
                    key_initiatives=s["key_initiatives"],
                    collaboration_scope=s["collaboration_scope"],
                    icon=s["icon"],
                    stats=s["stats"]
                ))
            db.commit()
            print("Seeded sectors successfully.")

        # Seed Sample Locations
        if db.query(Location).count() == 0:
            for l in SEED_LOCATIONS:
                db.add(Location(
                    id=l["id"],
                    name=l["name"],
                    name_kn=l["name_kn"],
                    category=l["category"],
                    taluk=l["taluk"],
                    taluk_kn=l["taluk_kn"],
                    lat=l["lat"],
                    lng=l["lng"],
                    is_proposed=l["is_proposed"],
                    tagline=l["tagline"],
                    description=l["description"],
                    source=l["source"],
                    established=l.get("established")
                ))
            db.commit()
            print("Seeded locations successfully.")

        print("Backend seeding completed successfully.")
    finally:
        db.close()

if __name__ == "__main__":
    run_seed()
