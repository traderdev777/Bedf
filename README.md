# BEDF — Belagavi Economic Development Foundation
### ಬೆಳಗಾವಿ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ ಪ್ರತಿಷ್ಠಾನ
**Building Belagavi. Empowering North Karnataka.**

Official Contact: **+91 901 908 8160** | Official Email: **contact@bedf.org**  
WhatsApp Hotline: [https://wa.me/919019088160](https://wa.me/919019088160)

---

## 1. Executive Overview

The **Belagavi Economic Development Foundation (BEDF)** is an independent, non-governmental, citizen-led regional platform uniting industrialists, engineers, researchers, entrepreneurs, and citizens to unlock the immense economic potential of Belagavi and North Karnataka.

The platform is built with an **Apple- and Stripe-inspired minimal, technology-driven aesthetic**, featuring deep navy (`#0B2D5B`, `#071A33`), pure white, and 24K gold (`#D4AF37`) accents, bilingual support (English & Kannada), persistent light/dark themes, an interactive Belagavi district map, and verified empirical metrics.

---

## 2. Key Architecture & Technology Stack

```
bedf/
├── frontend/                  # Next.js 16 + React 18/19 + TypeScript + Tailwind CSS
│   ├── src/app/              # Next.js App Router (11 full pages + routes)
│   │   ├── page.tsx          # Homepage (Hero, Stats, Map, 7 Sectors, Showcase, CTA)
│   │   ├── about/            # Charter, Governance, Long-term Roadmap
│   │   ├── focus-areas/      # In-depth portfolios of 7 strategic sectors
│   │   ├── discover-belagavi/# Regional profile, geography, 15 taluks, climate
│   │   ├── initiatives/      # 7 action programmes with audited status
│   │   ├── insights/         # Knowledge & research publications center
│   │   ├── join/             # Membership, Volunteer Network, Partnerships
│   │   ├── contact/          # Hotline +91 901 908 8160, WhatsApp, enquiry form
│   │   ├── admin/            # Role-based admin console & audit trail
│   │   └── credits/          # Photographer attribution & asset registry
│   ├── src/components/       # Modular UI components (Map, Header, Footer, Cards)
│   ├── src/context/          # ThemeContext (Light/Dark) & LanguageContext (EN/KN)
│   ├── src/data/             # Belagavi map coordinates, sector data, credits
│   └── public/               # BEDF Bastion vector logo, landmark SVGs, favicon
│
├── backend/                   # Python 3.12 + FastAPI + SQLAlchemy + Pydantic
│   ├── app/
│   │   ├── main.py           # FastAPI app entry with CORS & API routing
│   │   ├── config.py         # App settings & environment variables
│   │   ├── database.py       # SQLAlchemy engine & session factory
│   │   ├── models.py         # PostgreSQL / SQLite models (10 tables)
│   │   ├── schemas.py        # Pydantic v2 schemas for request validation
│   │   ├── seed.py           # Database seeder with empirical Belagavi baseline
│   │   └── routes/           # REST endpoints (/api/v1/...)
│   └── tests/                # Automated pytest unit test suite (100% pass)
│
├── docker-compose.yml         # Container orchestration for frontend & backend
└── README.md                  # Master documentation & deployment guide
```

---

## 3. Verified Belagavi Regional Facts & Dossier

All metrics on the website are grounded in published authoritative records:

| Empirical Indicator | Documented Figure | Authoritative Source |
|---|---|---|
| **District Population** | 47,79,661 | Census of India 2011 |
| **Administrative Taluks** | 15 Taluks (Largest in Karnataka) | Karnataka State Gazetteer |
| **Legislative Presence** | Suvarna Vidhana Soudha | Annual State Legislature Winter Session |
| **Sugar Factories** | 29 Operational Mills (Highest in State) | Dept of Sugar / SISMA |
| **Clean Biomass Co-Gen Power** | 400+ Megawatts | Karnataka Renewable Energy Dev (KREDL) |
| **Precision Aerospace SEZ** | Established 2009 (250+ Acres at Hattargi) | KIADB / Aequs SEZ Gazetted Notification |
| **Foundry Cluster** | 200+ Active Units (Machhe & Udyambag) | Belgaum Foundry Cluster (BFC) |
| **Engineering Talent Supply** | VTU Headquarters (Jnana Sangama) | Directing 200+ colleges statewide |
| **Sambra Airport Runway (IXG)** | 2,300m (Code 4C Runway) | Airports Authority of India (AAI) |
| **Strategic Ports Proximity** | ~105 km to Mormugao Port | NH-4A Corridor to Arabian Sea |

---

## 4. The 7 Strategic Focus Areas

1. **Artificial Intelligence & Technology**: Edge AI, embedded systems, Tier-2 SaaS, and industrial computer vision.
2. **Aerospace & Aeronautical**: Titanium airframes, landing gear actuators, and aircraft components (Aequs SEZ).
3. **Defence & Advanced Technology**: Maratha Light Infantry Regimental Centre (MLIRC, est. 1768), tactical UAVs, defense castings.
4. **Advanced Manufacturing**: South India's foundry capital, precision hydraulic actuators, and EV motor housings.
5. **Startups & Entrepreneurship**: Hardware maker incubation, Karnataka Elevate grant facilitation, and angel investor syndicates.
6. **Education & Research**: VTU apex engineering curriculum, KAHER medical research, autonomous technical institutes.
7. **Trade, Investment & Logistics**: Tri-state connectivity (Karnataka, Maharashtra, Goa) via NH-48 and NH-4A.

---

## 5. Official Brand Identity & Design System

- **Official BEDF Bastion Logo**: Built from geometric stacked blocks forming a fort bastion (honoring Belagavi Fort and Rani Chennamma’s Kittur Citadel), rising to a gold architectural crown.
- **Colour Palette**:
  - Primary Navy: `#0B2D5B`
  - Deep Navy: `#071A33`
  - Accent Gold: `#D4AF37`
  - Light Background: `#F6F8FB`
  - Text Dark: `#172033`
- **Typography**: Inter (Body), Manrope (Headings), Noto Sans Kannada (ಬೆಳಗಾವಿ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ ಪ್ರತಿಷ್ಠಾನ).
- **Themes**: Seamless Light and Dark modes with zero flash on load.

---

## 6. Getting Started & Local Development

### Prerequisites
- Node.js 18+ (tested on Node.js v24)
- Python 3.12+ (or `uv`)

### 1. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Backend Setup
```bash
cd backend
# Using uv (fastest) or standard python3 venv
uv venv .venv
source .venv/bin/activate
uv pip install -r requirements.txt

# Run database seeder
python app/seed.py

# Start FastAPI server
uvicorn backend.app.main:app --reload --port 8000
```
API Documentation is available at [http://localhost:8000/docs](http://localhost:8000/docs).

### 3. Running Backend Tests
```bash
PYTHONPATH=. backend/.venv/bin/pytest backend/tests/test_api.py
```

### 4. Running via Docker Compose
```bash
docker-compose up --build
```

---

## 7. Institutional Governance & Regulatory Disclaimer

**Belagavi Economic Development Foundation (BEDF)** is an independent, non-governmental, citizen-led regional platform. BEDF does not directly allot industrial land, grant statutory licences, or guarantee state subsidies. All economic figures are sourced from published public records.

---

© 2026 Belagavi Economic Development Foundation (BEDF). All rights reserved.

