// Part 2: Review Cards 21 to 41
export const MASTER_CARDS_PART2 = [
  {
    "id": "21",
    "code": "21",
    "icon": "📦",
    "category": "Dependencies",
    "title": "21. Dependency / Package Review",
    "subtitle": "ตรวจสอบ Inventory, Security, Bundle Size, Necessity และ Versioning",
    "promptText": "21 — 📦 DEPENDENCY & PACKAGE AUDIT\nตรวจสอบ Inventory, Security, Bundle Size, Necessity และ Versioning\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Unused or Redundant npm Packages\n- Known Vulnerabilities & License Compliance\n- Heavy Package Alternatives (Tree-shaking & Light Libraries)"
  },
  {
    "id": "22",
    "code": "22",
    "icon": "💰",
    "category": "Efficiency",
    "title": "22. Cost / Resource Efficiency Review",
    "subtitle": "ตรวจสอบ CPU, Memory, Database, Storage, Network และ Third-party Costs",
    "promptText": "22 — 💰 COST & RESOURCE EFFICIENCY REVIEW\nตรวจสอบ CPU, Memory, Database, Storage, Network และ Third-party Costs\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Unnecessary Database Reads/Writes\n- Heavy Asset Hosting Costs & CDN Caching Opportunities\n- Third-party API Call Optimization"
  },
  {
    "id": "23",
    "code": "23",
    "icon": "🏢",
    "category": "Business Logic",
    "title": "23. Business Logic Review",
    "subtitle": "ตรวจสอบ Business Rules, Workflows, Client Trust, Race Conditions & State Transitions",
    "promptText": "23 — 🏢 BUSINESS LOGIC & WORKFLOW INTEGRITY\nตรวจสอบ Business Rules, Workflows, Client Trust, Race Conditions & State Transitions\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Backend Enforcement of Business Rules (Never Trust Client)\n- State Transition Guards (e.g., Pending → Paid → Shipped)\n- Idempotency in Transactions & Payment Handlings"
  },
  {
    "id": "24",
    "code": "24",
    "icon": "🏗️",
    "category": "Architecture",
    "title": "24. Architecture & Technology Recommendation Review",
    "subtitle": "วิเคราะห์ Stack, Bottlenecks, Redis, RabbitMQ, Kafka, Elasticsearch, Docker, K8s & Cloud Microservices",
    "promptText": "24 — 🏗️ ARCHITECTURE & TECH STACK RECOMMENDATION\nวิเคราะห์ Stack, Bottlenecks, Redis, RabbitMQ, Kafka, Elasticsearch, Docker, K8s & Cloud Microservices\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Technical Fit for Business Scale\n- Over-engineering vs Under-engineering Evaluation\n- Pragmatic Architectural Recommendations"
  },
  {
    "id": "25",
    "code": "25",
    "icon": "📊",
    "category": "Visualization",
    "title": "25. Diagram & System Visualization",
    "subtitle": "วิเคราะห์ Architecture, Context, Data Flow, Sequence, ERD, Component, Deployment & Security Diagrams",
    "promptText": "25 — 📊 SYSTEM VISUALIZATION & DIAGRAMS\nวิเคราะห์ Architecture, Context, Data Flow, Sequence, ERD, Component, Deployment & Security Diagrams\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องจัดทำ/ตรวจสอบ:\n- Architecture & C4 Model Context Diagrams\n- ERD Diagrams & Data Relationship Views\n- Sequence Diagrams for Critical User Workflows"
  },
  {
    "id": "26",
    "code": "26",
    "icon": "🧪",
    "category": "Testing",
    "title": "26. Testing Strategy Review",
    "subtitle": "ตรวจสอบ Test Coverage, Unit, Integration, E2E, Negative & Regression Tests",
    "promptText": "26 — 🧪 COMPREHENSIVE TESTING STRATEGY\nตรวจสอบ Test Coverage, Unit, Integration, E2E, Negative & Regression Tests\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Automated Test Suite Reliability (No Flaky Tests)\n- Regression Test Coverage for Core Business Logic\n- CI Test Execution Times"
  },
  {
    "id": "27",
    "code": "27",
    "icon": "👁️",
    "category": "Observability",
    "title": "27. Observability Review",
    "subtitle": "ตรวจสอบ Logging, Metrics, Tracing, Alerting & Health Checks",
    "promptText": "27 — 👁️ OBSERVABILITY & ALERTING\nตรวจสอบ Logging, Metrics, Tracing, Alerting & Health Checks\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Real-time Alerting Thresholds (Slack/PagerDuty)\n- Key Performance Indicators (KPIs) Tracking\n- Error Rate Spikes & Automatic Warnings"
  },
  {
    "id": "28",
    "code": "28",
    "icon": "🌋",
    "category": "Reliability",
    "title": "28. Disaster Recovery Strategy Review",
    "subtitle": "ตรวจสอบ Failure Scenarios, Recovery Procedures, RTO, RPO & SPOF",
    "promptText": "28 — 🌋 DISASTER RECOVERY & SPOF ANALYSIS\nตรวจสอบ Failure Scenarios, Recovery Procedures, RTO, RPO & SPOF\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Single Point of Failure (SPOF) Identification\n- Recovery Time Objective (RTO) & Recovery Point Objective (RPO)\n- Fallback Strategies for Outages"
  },
  {
    "id": "29",
    "code": "29",
    "icon": "💾",
    "category": "Backup",
    "title": "29. Backup & Data Recovery Review",
    "subtitle": "ตรวจสอบ Database/File Backups, Restore Tests, Recovery Simulation & Security",
    "promptText": "29 — 💾 BACKUP & RECOVERY VERIFICATION\nตรวจสอบ Database/File Backups, Restore Tests, Recovery Simulation & Security\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Automated Backup Schedules & Retention Policies\n- Backup Restoration Verification Testing\n- Encrypted Storage for Database Dumps"
  },
  {
    "id": "30",
    "code": "30",
    "icon": "🔌",
    "category": "API",
    "title": "30. API Design Review",
    "subtitle": "ตรวจสอบ Naming, Request DTOs, Response Formats, Security, Versioning & Performance",
    "promptText": "30 — 🔌 ADVANCED API DESIGN AUDIT\nตรวจสอบ Naming, Request DTOs, Response Formats, Security, Versioning & Performance\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Consistent Naming & Request Payload Validation\n- Rate Limiting Policies per Endpoint\n- Deprecation Handling Strategy"
  },
  {
    "id": "31",
    "code": "31",
    "icon": "🗄️",
    "category": "Database",
    "title": "31. Database Design Review",
    "subtitle": "ตรวจสอบ Schemas, Relationships, Normalization, Indexes, Queries, Transactions & Migrations",
    "promptText": "31 — 🗄️ DATABASE DESIGN & SCHEMA INTEGRITY\nตรวจสอบ Schemas, Relationships, Normalization, Indexes, Queries, Transactions & Migrations\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Referential Integrity & Index Optimization\n- Safe Schema Migration Scripts (Zero Downtime)\n- Transaction Isolation Levels"
  },
  {
    "id": "32",
    "code": "32",
    "icon": "📈",
    "category": "Scale",
    "title": "32. Scalability Review",
    "subtitle": "วิเคราะห์ Traffic (10 -> 100,000 Users), Bottlenecks, Horizontal/Vertical Scaling & Statelessness",
    "promptText": "32 — 📈 SCALABILITY & HIGH TRAFFIC PREPARATION\nวิเคราะห์ Traffic (10 -> 100,000 Users), Bottlenecks, Horizontal/Vertical Scaling & Statelessness\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Application Statelessness Verification\n- Database Connection Scaling & Replica Strategies\n- CDN Asset Distribution"
  },
  {
    "id": "33",
    "code": "33",
    "icon": "🛡️",
    "category": "Reliability",
    "title": "33. System Reliability Review",
    "subtitle": "ตรวจสอบ Timeouts, Retries, Circuit Breakers, Fallbacks, External API/DB Failures",
    "promptText": "33 — 🛡️ SYSTEM RELIABILITY & RESILIENCE\nตรวจสอบ Timeouts, Retries, Circuit Breakers, Fallbacks, External API/DB Failures\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- External API Timeout Configuration\n- Exponential Backoff & Retry Mechanisms\n- Circuit Breaker Implementation for Failing Dependencies"
  },
  {
    "id": "34",
    "code": "34",
    "icon": "🧩",
    "category": "Maintainability",
    "title": "34. Maintainability Review",
    "subtitle": "ตรวจสอบ Code Duplication, Function Size, Coupling, Cohesion, Technical Debt & Architecture",
    "promptText": "34 — 🧩 TECHNICAL DEBT & ARCHITECTURE REFACTORING\nตรวจสอบ Code Duplication, Function Size, Coupling, Cohesion, Technical Debt & Architecture\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Technical Debt Prioritization & Backlog\n- High Coupling / Low Cohesion Components\n- Codebase Maintainability Index"
  },
  {
    "id": "35",
    "code": "35",
    "icon": "📄",
    "category": "Documentation",
    "title": "35. Project Documentation Review",
    "subtitle": "ตรวจสอบ README, Setup Guides, Environment Docs, API & Database Docs",
    "promptText": "35 — 📄 PROJECT DOCUMENTATION REVIEW\nตรวจสอบ README, Setup Guides, Environment Docs, API & Database Docs\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- README Clarity & One-command Local Setup\n- Environment Variables Documentation (.env.example)\n- API Specs & ERD Database Documentation"
  },
  {
    "id": "36",
    "code": "36",
    "icon": "💻",
    "category": "DX",
    "title": "36. Developer Experience (DX) Review",
    "subtitle": "ตรวจสอบ Setup, Scripts, Linting, Testing, Docker, Migration & Onboarding Flow",
    "promptText": "36 — 💻 DEVELOPER EXPERIENCE (DX) & ONBOARDING\nตรวจสอบ Setup, Scripts, Linting, Testing, Docker, Migration & Onboarding Flow\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Onboarding Speed for New Developers (< 15 mins setup)\n- Package Manager Scripts & Husky/Pre-commit Hooks\n- Local Development Containerization"
  },
  {
    "id": "37",
    "code": "37",
    "icon": "💵",
    "category": "Cost",
    "title": "37. Cost Optimization Review",
    "subtitle": "วิเคราะห์ Hosting, Database, Storage, API, CDN, Infrastructure Costs & Optimization",
    "promptText": "37 — 💵 COST & INFRASTRUCTURE OPTIMIZATION\nวิเคราะห์ Hosting, Database, Storage, API, CDN, Infrastructure Costs & Optimization\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Server Size & Resource Utilization Right-sizing\n- Storage Lifecycle Policies & Unused Resources Cleanup\n- Third-party SaaS / API Plan Optimization"
  },
  {
    "id": "38",
    "code": "38",
    "icon": "♿",
    "category": "Accessibility",
    "title": "38. ACCESSIBILITY",
    "subtitle": "ตรวจสอบ Accessibility ของเว็บไซต์",
    "promptText": "38. ACCESSIBILITY\nตรวจสอบ Accessibility ของเว็บไซต์\n\nโดยห้ามเปลี่ยน UI\nโดยไม่ได้รับอนุญาต\n\n==================================================\nตรวจสอบ\n\n- Keyboard Navigation\n- Focus State\n- Semantic HTML\n- Label\n- Form\n- Button\n- Image Alt\n- Screen Reader\n- Color Contrast\n- Error Message\n- Input Validation\n\n==================================================\nข้อกำหนด\n\n- ห้ามเปลี่ยน Design ทันที\n- ต้องระบุ Accessibility Issue\n- ต้องเสนอวิธีแก้ก่อน"
  },
  {
    "id": "39",
    "code": "39",
    "icon": "🔍",
    "category": "SEO / UX",
    "title": "39. SEO / UX",
    "subtitle": "ตรวจสอบ SEO และ UX ของเว็บไซต์",
    "promptText": "39. SEO / UX\nตรวจสอบ SEO และ UX ของเว็บไซต์\n\nโดยห้ามเปลี่ยน UI หรือ Business Logic\nโดยไม่ได้รับอนุญาต\n\n==================================================\nSEO & UX ตรวจสอบ\n\n- Title & Meta Description\n- Heading Structure & Semantic HTML\n- Next.js Metadata & Image Optimization\n- Loading, Empty, Error & Success States\n\n==================================================\nข้อกำหนด\n\n- ห้ามเปลี่ยน Design ทันที\n- ต้องแยก SEO Issue กับ UX Issue"
  },
  {
    "id": "40",
    "code": "40",
    "icon": "🚀",
    "category": "Production Readiness",
    "title": "40. PRODUCTION READINESS",
    "subtitle": "ตรวจสอบ Production Readiness ของ Project ทั้งหมด",
    "promptText": "40. PRODUCTION READINESS\nตรวจสอบ Production Readiness ของ Project ทั้งหมด\n\nเป้าหมาย\n\nระบบต้องพร้อมสำหรับการใช้งานจริงมากที่สุดเท่าที่เหมาะสม\n\n==================================================\nตรวจสอบ\n\nCode → Test → Security → Performance → Database → Environment → Deployment → Monitoring → Logging → Backup → Recovery\n\n==================================================\nFinal Checklist\n\nจัดระดับ\n\nREADY → READY WITH RISK → NOT READY\n\nพร้อมเหตุผล"
  },
  {
    "id": "41",
    "code": "41",
    "icon": "📝",
    "category": "Architecture",
    "title": "41. ARCHITECTURE DECISION RECORD (ADR)",
    "subtitle": "ตรวจสอบ Architecture Decision ของ Project",
    "promptText": "41. ARCHITECTURE DECISION RECORD (ADR)\nตรวจสอบ Architecture Decision ของ Project\n\nเป้าหมายคือบันทึกว่า\n\n\"ทำไมเราจึงเลือกวิธีนี้ และทำไมจึงไม่เลือกวิธีอื่น\"\n\n==================================================\nสรุปโครงสร้าง ADR\n\nProblem → Options → Decision → Reason → Trade-off → Consequence → Revisit Condition"
  }
];
