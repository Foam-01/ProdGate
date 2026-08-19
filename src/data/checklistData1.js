// Part 2: Review Cards 21 to 41
export const MASTER_CARDS_PART2 = [
    {
    id: "21",
    code: "21",
    icon: "📦",
    category: "Dependencies",
    title: "21. Dependency / Package Review",
    subtitle: "ตรวจสอบ Inventory, Security, Bundle Size, Necessity และ Versioning",
    promptText: `21. 📦 Dependency / Package Review
ตรวจสอบ Dependency และ Package ทั้งหมดของโปรเจกต์
โดยห้ามเพิ่มหรือลบ Package โดยไม่ได้รับอนุญาต

เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที

==================================================
1. Package Inventory
==================================================

ตรวจสอบ

- Package ทั้งหมด
- Production Dependency
- Development Dependency
- Package ที่ไม่ได้ใช้งาน
- Package ที่ซ้ำซ้อน
- Package ที่ทำหน้าที่คล้ายกัน

==================================================
2. Security
==================================================

ตรวจสอบ

- Known Vulnerability
- Outdated Package
- Deprecated Package
- Unmaintained Package
- Supply Chain Risk

==================================================
3. Bundle / Performance
==================================================

ตรวจสอบ

- Package ขนาดใหญ่
- Package ที่เพิ่ม Bundle Size
- Package ที่โหลดบน Client โดยไม่จำเป็น
- Tree Shaking
- Dynamic Import

==================================================
4. Necessity
==================================================

สำหรับ Package สำคัญให้วิเคราะห์

- ใช้ทำอะไร
- จำเป็นหรือไม่
- มี Native API ที่ทำแทนได้หรือไม่
- มี Dependency ซ้ำหรือไม่
- มีทางเลือกที่เบากว่าหรือไม่

==================================================
5. Version
==================================================

ตรวจสอบ

- Version
- Lockfile
- Compatibility
- Breaking Change
- Major Version
- Minor Version
- Patch Version

ห้าม Upgrade Package แบบสุ่ม

==================================================
ข้อกำหนด

- ห้ามเพิ่ม Package โดยไม่อธิบาย
- ห้ามลบ Package ที่ยังถูกใช้งาน
- ห้าม Upgrade Major Version โดยไม่วิเคราะห์
- ต้องตรวจสอบผลกระทบ
- ต้องเสนอทางเลือกก่อนแก้
- ต้องรอการอนุมัติ`
  },
    {
    id: "22",
    code: "22",
    icon: "💰",
    category: "Efficiency",
    title: "22. Cost / Resource Efficiency Review",
    subtitle: "ตรวจสอบ CPU, Memory, Database, Storage, Network และ Third-party Costs",
    promptText: `22. 💰 Cost / Resource Efficiency Review
ตรวจสอบ Cost และ Resource Efficiency ของโปรเจกต์ทั้งหมด
โดยห้ามเปลี่ยน Business Logic หรือ UX

เริ่มจากการวิเคราะห์ก่อน ห้ามเปลี่ยน Infrastructure ทันที

เป้าหมาย

ตรวจสอบว่าระบบใช้

- CPU
- Memory
- Database
- Storage
- Bandwidth
- API
- Third-party Service

อย่างคุ้มค่าหรือไม่

==================================================
1. Infrastructure
==================================================

ตรวจสอบ

- Server
- CPU
- Memory
- Storage
- Bandwidth
- CDN

==================================================
2. Database
==================================================

ตรวจสอบ

- Query จำนวนมาก
- Query ซ้ำ
- Connection
- Storage
- Database Size
- Backup
- Index

==================================================
3. Storage
==================================================

ตรวจสอบ

- Image
- Video
- File
- Storage Size
- Duplicate File
- File Compression
- File Retention

==================================================
4. Network
==================================================

ตรวจสอบ

- API Response Size
- Image Size
- Video
- JavaScript
- CSS
- Font
- Duplicate Request

==================================================
5. Third-party Service
==================================================

ตรวจสอบ

- API Call
- AI API
- Email
- Payment
- OAuth
- Maps
- Analytics
- Monitoring

==================================================
6. Caching
==================================================

วิเคราะห์ว่า

- Redis
- CDN
- Browser Cache
- API Cache

สามารถลด Cost ได้หรือไม่

แต่ห้ามเพิ่ม Cache
หากทำให้ข้อมูลผิดหรือ Stale Data โดยไม่มีวิธีจัดการ

==================================================
ข้อกำหนด

- ห้ามเพิ่ม Infrastructure เพียงเพราะคิดว่า "น่าจะเร็วขึ้น"
- ต้องประเมิน Cost / Benefit
- ต้องระบุว่าจุดใดมีค่าใช้จ่ายสูง
- ต้องเสนอทางเลือก
- ต้องรอการอนุมัติ`
  },
    {
    id: "23",
    code: "23",
    icon: "🏢",
    category: "Business Logic",
    title: "23. Business Logic Review",
    subtitle: "ตรวจสอบ Business Rules, Workflows, Client Trust, Race Conditions & State Transitions",
    promptText: `23. 🏢 Business Logic Review
ตรวจสอบ Business Logic ของโปรเจกต์ทั้งหมด
โดยห้ามเปลี่ยน Business Rule หรือพฤติกรรมของระบบ
โดยไม่ได้รับอนุญาต

เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที

เป้าหมาย

ตรวจสอบว่าระบบทำงานตาม Business Requirement จริงหรือไม่
และตรวจสอบว่าผู้ใช้สามารถใช้ระบบผิดวิธี
เพื่อให้ได้ผลลัพธ์ที่ไม่ควรได้รับหรือไม่

==================================================
1. Business Rule
==================================================

ตรวจสอบ

- Rule
- Condition
- Permission
- Status
- State
- Calculation
- Validation
- Workflow

==================================================
2. Workflow
==================================================

ตรวจสอบ

Step 1
↓
Step 2
↓
Step 3
↓
Complete

ตรวจสอบว่า User สามารถ

- ข้าม Step
- ย้อน Step
- ทำ Step ซ้ำ
- ทำ Step พร้อมกัน
- เรียก API ขั้นต่อไปโดยตรง

ได้หรือไม่

==================================================
3. Duplicate Action
==================================================

ตรวจสอบ

- Submit ซ้ำ
- Payment ซ้ำ
- Reward ซ้ำ
- Coupon ซ้ำ
- Create ซ้ำ
- Delete ซ้ำ
- Update ซ้ำ

ตรวจสอบ Idempotency ตามความเหมาะสม

==================================================
4. Client Trust
==================================================

ตรวจสอบว่าระบบเชื่อข้อมูลจาก Frontend
ในส่วนที่ไม่ควรเชื่อหรือไม่

ตัวอย่าง

- Price
- Role
- User ID
- Permission
- Status
- Balance
- Discount
- Reward

ข้อมูลสำคัญต้องได้รับการตรวจสอบที่ Backend

==================================================
5. Concurrent Action
==================================================

ตรวจสอบกรณี

User A
↓
Request A

พร้อมกับ

Request B

ตรวจสอบ

- Race Condition
- Transaction
- Lock
- Atomic Operation
- Duplicate Operation

==================================================
6. State Transition
==================================================

ตรวจสอบว่า Status สามารถเปลี่ยนได้อย่างถูกต้องหรือไม่

ตัวอย่าง

Pending
↓
Processing
↓
Success

ตรวจสอบว่า User สามารถทำ

Pending
↓
Success

โดยข้าม Processing ได้หรือไม่

==================================================
7. Authorization + Business Logic
==================================================

ตรวจสอบว่า

User ธรรมดา
ไม่สามารถทำ Action
ที่ควรเป็นของ Admin

และตรวจสอบว่า

User สามารถเข้าถึง Resource
ของ User อื่นได้หรือไม่

==================================================
ข้อกำหนด

- ห้ามเปลี่ยน Business Rule
- ห้ามเปลี่ยน UX
- ห้ามเปลี่ยน API Contract
- ห้ามแก้ Logic โดยไม่ได้รับอนุญาต
- หากพบสิ่งที่คิดว่าเป็น Bug ให้แสดง Evidence
- ต้องอธิบาย Expected Behavior กับ Actual Behavior
- ต้องระบุ Impact
- ต้องเสนอวิธีแก้
- ต้องรอการอนุมัติ`
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
