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
    id: "24",
    code: "24",
    icon: "🏗️",
    category: "Architecture",
    title: "24. Architecture & Technology Recommendation Review",
    subtitle: "วิเคราะห์ Stack, Bottlenecks, Redis, RabbitMQ, Kafka, Elasticsearch, Docker, K8s & Cloud Microservices",
    promptText: `24. 🏗️ PROMPT: Architecture & Technology Recommendation Review
ตรวจสอบ Architecture และ Technology ของโปรเจกต์ทั้งหมด
และวิเคราะห์ว่าโปรเจกต์ควรเพิ่ม Infrastructure
หรือ Technology เสริมอะไรหรือไม่

Stack หลักของโปรเจกต์

- Frontend: Next.js
- Backend: NestJS
- Database: Supabase / PostgreSQL
- ORM: Prisma
- Container: Docker

Technology ที่ต้องพิจารณา

- Redis
- RabbitMQ
- Kafka
- Elasticsearch
- Docker
- Kubernetes
- Microservices
- CDN
- Object Storage
- CI/CD
- Monitoring
- Logging
- Message Queue
- Cache
- Search Engine
- Load Balancer
- Background Worker
- Reverse Proxy

โดย Technology เหล่านี้เป็นเพียงตัวเลือก
ห้ามถือว่าจำเป็นต้องใช้ทุกตัว

==================================================
กฎสำคัญ
==================================================

เริ่มจากการวิเคราะห์ก่อน
ห้ามติดตั้งหรือเพิ่ม Technology ทันที

ห้ามเปลี่ยน

- UI
- UX
- Business Logic
- API Contract
- Database Schema
- Authentication Flow

โดยไม่ได้รับอนุญาต

ห้ามเพิ่ม Library / Infrastructure / Service
เพียงเพราะเป็น Technology ที่นิยม
หรือทำให้ Architecture ดูซับซ้อนขึ้น

เป้าหมายคือ

"ใช้ Technology เท่าที่จำเป็น
และเลือก Technology ให้เหมาะกับปัญหา"

==================================================
1. วิเคราะห์ Architecture ปัจจุบัน
==================================================

วิเคราะห์ระบบปัจจุบันก่อน

Frontend
↓
Backend
↓
Database
↓
External Services

ระบุ

- Component
- Service
- Database
- API
- Storage
- Authentication
- External API
- Background Job
- Cache
- Queue
- Search
- Deployment

สร้าง Architecture Diagram แบบ Text

ตัวอย่าง

User
↓
Next.js
↓
NestJS
↓
PostgreSQL

หากมี Service อื่น
ให้แสดงใน Diagram ด้วย

==================================================
2. วิเคราะห์ Bottleneck
==================================================

ค้นหาว่าระบบมี Bottleneck ที่ไหน

ตรวจสอบ

- CPU
- Memory
- Database
- Database Connection
- API Response Time
- Network
- Storage
- File Processing
- Video Processing
- Search
- Background Processing
- External API
- Concurrent Users
- Request จำนวนมาก

อย่าเสนอ Technology ก่อนระบุปัญหา

==================================================
3. วิเคราะห์ Redis
==================================================

พิจารณาว่า Redis เหมาะกับระบบหรือไม่

Redis สามารถใช้สำหรับ

- Cache
- Session
- Rate Limiting
- Temporary Data
- Distributed Lock
- Pub/Sub
- Real-time State
- Counter
- Queue บางรูปแบบ

ตรวจสอบว่าโปรเจกต์มีข้อมูล
ที่ถูกเรียกซ้ำจำนวนมากหรือไม่

ตรวจสอบว่า

Database
↓
Query เดิม
↓
ถูกเรียกซ้ำบ่อย

หรือไม่

หาก Redis เหมาะสม
ให้ระบุ

- Cache อะไร
- Key Structure
- TTL
- Cache Invalidation
- Cache Hit / Miss
- หาก Redis Down จะเกิดอะไรขึ้น
- ข้อมูลใดไม่ควร Cache

หากไม่จำเป็นต้องใช้ Redis
ให้บอกว่า

"ไม่ควรใช้ Redis ในตอนนี้"

พร้อมเหตุผล

==================================================
4. วิเคราะห์ RabbitMQ
==================================================

ตรวจสอบว่าระบบมีงาน
ที่เหมาะกับ Background Processing หรือไม่

ตัวอย่าง

- Email
- Notification
- Report
- File Processing
- Video Processing
- Image Processing
- AI Processing
- Long-running Job
- External API Job

วิเคราะห์ว่า

User Request
↓
ต้องรอ Process นี้หรือไม่

ถ้าไม่จำเป็นต้องรอ

พิจารณา

NestJS
↓
RabbitMQ
↓
Worker

ตรวจสอบ

- Producer
- Consumer
- Queue
- Exchange
- Routing
- Retry
- Dead Letter Queue
- Acknowledgement
- Duplicate Message
- Idempotency

หากระบบยังไม่มี Background Job
ที่มีความจำเป็น

ให้ระบุว่า

"ยังไม่จำเป็นต้องใช้ RabbitMQ"

==================================================
5. วิเคราะห์ Kafka
==================================================

ตรวจสอบว่าระบบมี Event
จำนวนมากและต้องการ Event Streaming หรือไม่

พิจารณา Kafka เมื่อระบบมี

- Event จำนวนมาก
- Real-time Event Processing
- Event History
- Event Replay
- Multiple Consumers
- Event-driven Architecture
- Data Pipeline
- Analytics
- Distributed Systems
- Microservices ที่ต้องแชร์ Event

ตัวอย่าง

Order Created
↓
Kafka
├── Notification Service
├── Analytics Service
├── Recommendation Service
└── Audit Service

ตรวจสอบ

- Producer
- Consumer
- Topic
- Partition
- Consumer Group
- Offset
- Retention
- Replay
- Ordering
- Replication

หากระบบมีเพียง
Background Job ธรรมดา

ให้พิจารณาว่า RabbitMQ
หรือระบบ Queue ที่ง่ายกว่า
เหมาะสมกว่า Kafka หรือไม่

หาก Event Volume ยังต่ำ
และไม่มีความต้องการ Replay

ไม่ควรเพิ่ม Kafka เพียงเพื่อความเท่

==================================================
6. วิเคราะห์ Elasticsearch
==================================================

ตรวจสอบว่าระบบมี Search Requirement
ที่ PostgreSQL จัดการได้ไม่เหมาะสมหรือไม่

พิจารณา

- Full-text Search
- Fuzzy Search
- Relevance Ranking
- Autocomplete
- Large Dataset Search
- Log Search
- Analytics
- Filtering
- Aggregation

ตัวอย่าง

User
↓
Search "iphone 15 pro"
↓
Search Engine
↓
Relevant Results

ตรวจสอบก่อนว่า PostgreSQL
สามารถรองรับ Search Requirement
ในปัจจุบันได้หรือไม่

หาก PostgreSQL เพียงพอ

ให้แนะนำว่า

"ยังไม่ควรเพิ่ม Elasticsearch"

เพื่อลด

- Infrastructure Complexity
- Memory Usage
- Maintenance
- Cost
- Data Synchronization

==================================================
7. วิเคราะห์ Docker
==================================================

ตรวจสอบว่าควร Containerize
ส่วนใดของระบบ

พิจารณา

- Next.js
- NestJS
- Redis
- RabbitMQ
- Worker
- Database สำหรับ Local Development

ตรวจสอบ

- Dockerfile
- Multi-stage Build
- Image Size
- Layer Cache
- Environment Variable
- Secret
- Network
- Volume
- Health Check
- Port
- Container Restart

เป้าหมาย

Development Environment
↓
Staging
↓
Production

ควรมี Environment
ที่สามารถทำซ้ำได้อย่างสม่ำเสมอ

==================================================
8. วิเคราะห์ Kubernetes
==================================================

ห้ามแนะนำ Kubernetes
เพียงเพราะใช้ Docker

วิเคราะห์ก่อนว่า

- มี Container จำนวนมากหรือไม่
- ต้องการ Auto Scaling หรือไม่
- ต้องการ High Availability หรือไม่
- มีหลาย Service หรือไม่
- มีหลาย Instance หรือไม่
- Deployment มีความซับซ้อนหรือไม่
- ต้องการ Service Discovery หรือไม่
- มี Infrastructure Team หรือไม่
- มี Traffic สูงหรือไม่

เปรียบเทียบ

Docker Compose
vs
Docker + VPS
vs
Managed Container Platform
vs
Kubernetes

อธิบายข้อดีข้อเสีย

หากระบบยังเล็ก

ให้พิจารณาว่า

"Kubernetes อาจเพิ่ม Complexity
มากกว่าประโยชน์ที่ได้รับ"

==================================================
9. วิเคราะห์ Microservices
==================================================

ห้ามแนะนำ Microservices
เพียงเพราะต้องการให้ระบบดูเป็น Enterprise

ตรวจสอบก่อนว่า Monolith ปัจจุบัน
มีปัญหาหรือไม่

พิจารณา

- Codebase ใหญ่เกินไป
- Team ใหญ่
- Service มี Ownership แยกกัน
- Deploy แยกกัน
- Scale แยกกัน
- Technology ต่างกัน
- Failure Isolation
- Independent Development
- Independent Deployment

เปรียบเทียบ

Monolith
vs
Modular Monolith
vs
Microservices

แนะนำตัวเลือกที่เหมาะสมที่สุด

หาก Modular Monolith
สามารถแก้ปัญหาได้

ไม่ควรแยก Microservices โดยไม่จำเป็น

==================================================
10. วิเคราะห์ CDN
==================================================

ตรวจสอบว่า Static Asset
ควรใช้ CDN หรือไม่

ตรวจสอบ

- Image
- Video
- JavaScript
- CSS
- Font
- Static File

วิเคราะห์

- Cache
- Geographic Distribution
- Bandwidth
- Origin Server Load

==================================================
11. วิเคราะห์ Object Storage
==================================================

ตรวจสอบ File Storage

เช่น

- Image
- Video
- PDF
- Document
- User Upload

วิเคราะห์ว่าไฟล์ควรอยู่ที่

Application Server
หรือ
Object Storage

พิจารณา

- Storage Cost
- Scalability
- Bandwidth
- Backup
- Access Control
- Signed URL

==================================================
12. วิเคราะห์ Background Worker
==================================================

ค้นหางานที่ไม่จำเป็นต้องทำ
ใน HTTP Request

ตัวอย่าง

API Request
↓
สร้าง Report
↓
ส่ง Email
↓
Process File

หากใช้เวลานาน

พิจารณา

API
↓
Queue
↓
Worker

วิเคราะห์ว่า Worker ควรใช้

- NestJS Worker
- RabbitMQ
- Redis-based Queue
- Kafka Consumer

และอธิบายเหตุผล

==================================================
13. วิเคราะห์ CI/CD
==================================================

ตรวจสอบ

- Git
- GitHub Actions
- Build
- Test
- Lint
- Security Scan
- Docker Build
- Deploy
- Rollback

เสนอ Pipeline

Code
↓
Pull Request
↓
Lint
↓
Test
↓
Build
↓
Security Scan
↓
Docker Build
↓
Deploy

==================================================
14. วิเคราะห์ Monitoring
==================================================

ตรวจสอบว่า Production
สามารถรู้ได้หรือไม่ว่า

- API ช้า
- Database ช้า
- Error เพิ่มขึ้น
- Server Memory สูง
- CPU สูง
- Service Down
- Queue ค้าง
- Redis Down

พิจารณา

- Metrics
- Logs
- Tracing
- Alert
- Health Check

==================================================
15. วิเคราะห์ Logging
==================================================

ตรวจสอบ

- Application Log
- Error Log
- Request Log
- Authentication Log
- Security Log
- Background Job Log

ตรวจสอบว่า Log สามารถใช้
Debug Production ได้หรือไม่

แต่ต้องไม่ Log

- Password
- Token
- API Key
- Secret
- Sensitive Data

==================================================
16. วิเคราะห์ Scalability
==================================================

จำลองการเติบโต

10 Users
↓
100 Users
↓
1,000 Users
↓
10,000 Users
↓
100,000 Users

วิเคราะห์ว่า Component ใด
จะเป็น Bottleneck ก่อน

เช่น

Frontend
Backend
Database
Redis
Queue
Storage
Network

==================================================
17. วิเคราะห์ Reliability
==================================================

จำลอง

Database Down
Redis Down
RabbitMQ Down
Kafka Down
Elasticsearch Down
Backend Down
Network Failure
Container Restart

ตรวจสอบ

- ระบบส่วนไหนยังทำงานได้
- ระบบส่วนไหนควร Retry
- ระบบส่วนไหนควร Fail Gracefully
- Data จะหายหรือไม่
- Request จะถูกทำซ้ำหรือไม่

==================================================
18. Technology Decision Matrix
==================================================

สำหรับ Technology ทุกตัวที่เสนอ
ให้จัดตาราง

Technology
↓
ปัญหาที่แก้
↓
ควรใช้หรือไม่
↓
ควรใช้เมื่อไหร่
↓
เหตุผล
↓
ข้อดี
↓
ข้อเสีย
↓
Cost
↓
Complexity
↓
Alternative

ตัวอย่าง

Redis
- ใช้ / ไม่ใช้
- ใช้เมื่อ Cache เริ่มมีความสำคัญ
- ลด Database Load
- เพิ่ม Infrastructure

RabbitMQ
- ใช้ / ไม่ใช้
- ใช้เมื่อมี Background Job
- แยกงานออกจาก HTTP Request
- เพิ่ม Operational Complexity

Kafka
- ใช้ / ไม่ใช้
- ใช้เมื่อมี Event Streaming / High Volume
- รองรับ Durable Event Stream และ Replay
- Infrastructure ซับซ้อน

Elasticsearch
- ใช้ / ไม่ใช้
- ใช้เมื่อ Search ซับซ้อน
- เพิ่ม Search Capability
- ต้อง Sync Data

Kubernetes
- ใช้ / ไม่ใช้
- ใช้เมื่อ Container และ Deployment มี Scale/Complexity สูง
- เพิ่ม Automation
- เพิ่ม Operational Complexity

Microservices
- ใช้ / ไม่ใช้
- ใช้เมื่อระบบและทีมมีเหตุผลที่ต้องแยก Service
- Scale / Deploy แยกได้
- เพิ่ม Network และ Operational Complexity

==================================================
19. Final Recommendation
==================================================

หลังวิเคราะห์ทั้งหมด

แบ่ง Technology เป็น

ควรใช้ตอนนี้
↓
ควรเตรียมไว้สำหรับอนาคต
↓
ยังไม่จำเป็น
↓
ไม่แนะนำสำหรับ Architecture ปัจจุบัน

ห้ามแนะนำ Technology
เพียงเพราะเป็น Technology ที่ได้รับความนิยม

ต้องอิงจาก

- Problem
- Traffic
- Data
- Team Size
- Cost
- Complexity
- Reliability
- Scalability
- Business Requirement

==================================================
ข้อกำหนดสุดท้าย
==================================================

- ห้ามติดตั้ง Technology ทันที
- ห้ามเปลี่ยน Architecture ทันที
- ห้ามเพิ่ม Library โดยไม่อธิบาย
- ห้ามเพิ่ม Redis โดยไม่มี Use Case
- ห้ามเพิ่ม RabbitMQ โดยไม่มี Background Job
- ห้ามเพิ่ม Kafka โดยไม่มี Event Streaming Requirement
- ห้ามเพิ่ม Elasticsearch หาก PostgreSQL เพียงพอ
- ห้ามเพิ่ม Kubernetes เพียงเพราะใช้ Docker
- ห้ามเพิ่ม Microservices เพียงเพราะระบบดูเป็น Enterprise
- ต้องเริ่มจาก Problem ก่อน Technology
- ต้องวิเคราะห์ Cost และ Complexity
- ต้องเสนอทางเลือก
- ต้องรอการอนุมัติจากผมก่อนแก้ไข

หลังจากผมอนุมัติแล้ว
ให้ดำเนินการเฉพาะ Technology
ที่ได้รับอนุมัติเท่านั้น

หลังดำเนินการเสร็จ

สรุป

Before
↓
Problem
↓
Technology ที่เลือก
↓
เหตุผล
↓
Implementation
↓
After
↓
ผลลัพธ์
↓
Trade-off
↓
วิธีทดสอบ`
  },
    {
    id: "25",
    code: "25",
    icon: "📊",
    category: "Visualization",
    title: "25. Diagram & System Visualization",
    subtitle: "วิเคราะห์ Architecture, Context, Data Flow, Sequence, ERD, Component, Deployment & Security Diagrams",
    promptText: `25. Diagram & System Visualization
ตรวจสอบและวิเคราะห์การใช้ Diagram
สำหรับโปรเจกต์ทั้งหมด

โดยมีเป้าหมายเพื่อให้สามารถเข้าใจ
Architecture, Data Flow, System Flow
และความสัมพันธ์ของ Component ต่าง ๆ
ได้โดยไม่ต้องอ่าน Code ทั้งหมด

เริ่มจากการวิเคราะห์ก่อน
ห้ามแก้ไขระบบทันที

==================================================
1. วิเคราะห์ว่าควรใช้ Diagram หรือไม่
==================================================

ตรวจสอบก่อนว่า Project มีความซับซ้อน
มากพอที่จะต้องใช้ Diagram หรือไม่

ควรพิจารณาใช้ Diagram เมื่อมี

- Frontend
- Backend
- Database
- Authentication
- External API
- Redis
- RabbitMQ
- Kafka
- File Storage
- Background Worker
- Microservices
- Docker
- Cloud Services
- Multiple Services
- Complex Business Flow

หากระบบเล็กมาก
ไม่ต้องสร้าง Diagram จำนวนมากโดยไม่จำเป็น

เป้าหมายคือ

"Diagram ต้องช่วยให้เข้าใจระบบง่ายขึ้น
ไม่ใช่เพิ่มเอกสารที่ไม่มีประโยชน์"

==================================================
2. System Architecture Diagram
==================================================

สร้างภาพรวม Architecture ของระบบ

ตัวอย่าง

User
↓
Next.js
↓
NestJS
├── Authentication
├── User Module
├── Focus Module
└── Video Module
↓
PostgreSQL

หากมี Infrastructure

NestJS
├── Redis
├── RabbitMQ
└── Object Storage

ให้แสดงความสัมพันธ์ด้วย

ตรวจสอบว่า Diagram
ตรงกับ Architecture จริงหรือไม่

ห้ามสร้าง Diagram จากสิ่งที่
ระบบไม่ได้ใช้งานจริง

==================================================
3. System Context Diagram
==================================================

แสดงระบบในมุมมองระดับสูง

แสดง

- User
- System
- External System
- External API
- Third-party Service

ตัวอย่าง

User
↓
Focus Pulse
├── Google OAuth
├── GitHub OAuth
├── Supabase
└── Video Storage

ใช้ Diagram นี้เมื่อ

- เริ่ม Project ใหม่
- อธิบายระบบให้คนอื่น
- Onboarding Developer
- อธิบายระบบกับทีม
- วิเคราะห์ Dependency

==================================================
4. Data Flow Diagram
==================================================

ตรวจสอบข้อมูลว่า

Data
↓
มาจากไหน
↓
ผ่านอะไร
↓
ถูกประมวลผลที่ไหน
↓
ถูกเก็บที่ไหน
↓
ส่งกลับไปที่ไหน

ตัวอย่าง

User
↓
Next.js
↓
NestJS
↓
Validation
↓
Service
↓
Prisma
↓
PostgreSQL
↓
Response

ใช้เมื่อ

- Debug
- Security Review
- Performance Review
- API Review
- Database Review

==================================================
5. Sequence Diagram
==================================================

ใช้เมื่อมี Flow ที่ซับซ้อน

เช่น Login

User
↓
Next.js
↓
NestJS
↓
OAuth Provider
↓
Callback
↓
NestJS
↓
Database
↓
Session / Token
↓
User

ตรวจสอบลำดับเหตุการณ์

- ใครเรียกใคร
- เรียกเมื่อไหร่
- Response กลับเมื่อไหร่
- Error เกิดตรงไหน
- Authentication เกิดตรงไหน

ควรใช้กับ

- Login
- Register
- Payment
- OAuth
- File Upload
- Background Job
- Queue
- External API
- Complex Transaction

==================================================
6. Entity Relationship Diagram
==================================================

ตรวจสอบ Database Relationship

แสดง

- Table
- Primary Key
- Foreign Key
- One-to-One
- One-to-Many
- Many-to-Many
- Constraint

ตัวอย่าง

User
│
├── FocusSession
│
├── Goal
│
└── Video

ใช้เมื่อ

- ออกแบบ Database
- Review Database
- แก้ปัญหา Query
- ตรวจสอบ Relationship
- เพิ่ม Feature

ตรวจสอบว่า ER Diagram
ตรงกับ Database Schema จริง

==================================================
7. Component Diagram
==================================================

แสดงความสัมพันธ์ของ Component

เช่น Frontend

Dashboard
├── Header
├── Sidebar
├── FocusTimer
├── Statistics
└── VideoPlayer

Backend

AuthModule
UserModule
FocusModule
VideoModule

ใช้เพื่อ

- เข้าใจ Codebase
- Refactor
- Code Review
- Onboarding
- วิเคราะห์ Dependency

==================================================
8. Deployment Diagram
==================================================

แสดงว่า Application
ถูก Deploy ที่ไหน

ตัวอย่าง

User
↓
CDN
↓
Next.js
↓
NestJS
↓
Supabase
↓
PostgreSQL

หากใช้ Docker

Internet
↓
Reverse Proxy
↓
Docker
├── Next.js
├── NestJS
├── Redis
└── Worker

ใช้เมื่อ

- Deploy Production
- Docker
- Cloud
- VPS
- Kubernetes
- Load Balancer
- CDN

==================================================
9. Authentication Flow Diagram
==================================================

แสดง Authentication Flow

ตัวอย่าง

User
↓
Login
↓
Google OAuth
↓
Callback
↓
Backend
↓
Validate User
↓
Create / Update User
↓
Session / Token
↓
Authenticated User

ต้องตรวจสอบ

- Token
- Session
- Cookie
- OAuth
- Refresh Token
- Logout

ใช้ Diagram เพื่อช่วย Security Review

==================================================
10. Business Flow Diagram
==================================================

แสดง Business Logic

ตัวอย่าง Focus Session

Start
↓
Select Duration
↓
Start Timer
↓
Focus
↓
Timer Complete
↓
Save Session
↓
Play Relaxation Video
↓
Update Statistics
↓
Complete

ใช้เมื่อ Business Logic มีหลายขั้นตอน

เช่น

- Payment
- Order
- Booking
- Approval
- Reward
- Workflow
- Focus Session

==================================================
11. Error Flow Diagram
==================================================

ไม่ควรวาดเฉพาะ Happy Path

ให้ตรวจสอบ Error Flow ด้วย

ตัวอย่าง

API Request
↓
Validation
├── Invalid → 400
│
└── Valid
      ↓
   Database
      ├── Error → 500
      │
      └── Success → 200

ตรวจสอบ

- Validation Error
- Authentication Error
- Authorization Error
- Database Error
- External API Error
- Timeout
- Retry
- Fallback

==================================================
12. Async / Queue Flow Diagram
==================================================

หากใช้

- Redis Queue
- RabbitMQ
- Kafka
- Background Worker

ให้แสดง Flow

API
↓
Queue
↓
Worker
↓
Process
↓
Database

ตรวจสอบ

- Producer
- Consumer
- Queue
- Retry
- Dead Letter
- Duplicate Message
- Idempotency

==================================================
13. Diagram สำหรับ Performance
==================================================

ใช้ Diagram วิเคราะห์

Request
↓
Frontend
↓
API
↓
Database

ตรวจสอบว่า

ส่วนไหนช้า

เช่น

API
↓
Service
↓
Query 1
↓
Query 2
↓
Query 3
↓
External API

หากพบ Bottleneck
ให้ระบุจุดที่ควรตรวจสอบเพิ่มเติม

==================================================
14. Diagram สำหรับ Security
==================================================

วิเคราะห์ Trust Boundary

ตัวอย่าง

Public Internet
        ↓
     Frontend
        ↓
     API
        ↓
 Authentication
        ↓
 Authorization
        ↓
    Database

ตรวจสอบ

- จุดที่ User ควบคุมได้
- จุดที่ต้อง Validate
- จุดที่ต้อง Authenticate
- จุดที่ต้อง Authorize
- จุดที่มี Sensitive Data
- External Service
- Trust Boundary

==================================================
15. Diagram สำหรับ Scalability
==================================================

แสดงระบบเมื่อ Traffic เพิ่มขึ้น

100 Users
↓
1 API
↓
Database

เปรียบเทียบกับ

10,000 Users
↓
Load Balancer
↓
API Instance 1
API Instance 2
API Instance 3
↓
Redis
↓
Database

วิเคราะห์ว่า

ส่วนไหน Scale ได้
ส่วนไหนเป็น Bottleneck
และส่วนไหนเป็น Single Point of Failure

==================================================
16. ตรวจสอบ Diagram กับ Code จริง
==================================================

ห้ามเชื่อ Diagram เพียงอย่างเดียว

เปรียบเทียบ

Diagram
vs
Source Code
vs
Database
vs
Deployment Configuration

หากไม่ตรงกัน

ให้ระบุ

- Diagram ผิด
หรือ
- Code ผิด
หรือ
- Architecture เปลี่ยนแล้วแต่ Diagram ไม่ได้ Update

==================================================
17. เมื่อไหร่ควรสร้าง Diagram
==================================================

แนะนำให้สร้างเมื่อ

1. เริ่ม Project ใหม่
2. Architecture ซับซ้อน
3. เพิ่ม Feature ใหญ่
4. เพิ่ม External Service
5. เพิ่ม Redis
6. เพิ่ม Queue
7. เพิ่ม Microservice
8. เปลี่ยน Database
9. เปลี่ยน Authentication
10. Deploy Production
11. Debug ปัญหาซับซ้อน
12. Security Review
13. Performance Review
14. Onboarding Developer
15. เตรียมสัมภาษณ์ / Presentation

==================================================
18. ไม่ควรใช้ Diagram เมื่อ
==================================================

- ระบบเล็กมาก
- Flow ง่ายมาก
- Diagram ไม่ช่วยเพิ่มความเข้าใจ
- Diagram มีรายละเอียดมากเกินไป
- Diagram ไม่ Update ตาม Code
- สร้าง Diagram เพียงเพื่อให้ดู Professional

==================================================
19. Diagram ที่แนะนำให้ Project มี
==================================================

สำหรับ Project ทั่วไป

ขั้นต่ำ

1. System Architecture
2. Database ERD
3. Main Data Flow

Project ที่ซับซ้อน

เพิ่ม

4. Sequence Diagram
5. Authentication Flow
6. Business Flow
7. Deployment Diagram
8. Error Flow

Project ที่เป็น Production / Distributed System

เพิ่ม

9. Queue Flow
10. Security / Trust Boundary
11. Scalability Diagram
12. Failure / Recovery Flow

==================================================
ข้อกำหนด
==================================================

- Diagram ต้องสะท้อนระบบจริง
- ห้ามสร้าง Diagram ที่ไม่ตรงกับ Code
- ห้ามสร้าง Diagram มากเกินความจำเป็น
- Diagram ต้องช่วยในการตัดสินใจ
- หาก Architecture เปลี่ยน ต้องพิจารณา Update Diagram
- ก่อนสร้าง Diagram ให้บอกว่า Diagram นี้มีไว้เพื่ออะไร
- หากไม่จำเป็นต้องใช้ Diagram ให้บอกว่าไม่จำเป็น
- ห้ามแก้ Code เพียงเพื่อให้ตรงกับ Diagram
- ห้ามเปลี่ยน Architecture โดยไม่ได้รับอนุญาต

หลังวิเคราะห์ให้สรุป

Diagram
↓
Purpose
↓
สิ่งที่ Diagram แสดง
↓
ปัญหาที่พบ
↓
ความสัมพันธ์กับ Code
↓
Recommendation`
  },
    {
    id: "26",
    code: "26",
    icon: "🧪",
    category: "Testing",
    title: "26. Testing Strategy Review",
    subtitle: "ตรวจสอบ Test Coverage, Unit, Integration, E2E, Negative & Regression Tests",
    promptText: `26. TESTING
ตรวจสอบ Testing Strategy ของโปรเจกต์ทั้งหมด
โดยห้ามเปลี่ยน Business Logic หรือพฤติกรรมของระบบ
โดยไม่ได้รับอนุญาต

เริ่มจากการวิเคราะห์ก่อน
ห้ามเขียนหรือแก้ไข Test ทันที

==================================================
1. Test Coverage
==================================================

ตรวจสอบว่าระบบมี Test ครอบคลุมส่วนสำคัญหรือไม่

ตรวจสอบ

- Authentication
- Authorization
- API
- Business Logic
- Database
- Utility
- Component
- Form
- Validation
- Error Handling

ระบุจุดที่ยังไม่มี Test

==================================================
2. Unit Test
==================================================

ตรวจสอบ Function หรือ Service
ที่สามารถทดสอบแยกได้

ตรวจสอบ

- Pure Function
- Utility
- Service
- Validation
- Business Rule

ห้ามเขียน Test เพียงเพื่อเพิ่ม Coverage
โดยไม่มีประโยชน์ในการตรวจสอบระบบ

==================================================
3. Integration Test
==================================================

ตรวจสอบการทำงานร่วมกันของ

- API
- Service
- Database
- Authentication
- External Service

ตรวจสอบว่า Component
ทำงานร่วมกันถูกต้องหรือไม่

==================================================
4. E2E Test
==================================================

ตรวจสอบ Flow สำคัญของ User

เช่น

Register
↓
Login
↓
Dashboard
↓
Create Data
↓
Update Data
↓
Logout

พิจารณา E2E สำหรับ Critical User Flow

==================================================
5. Negative Test
==================================================

ทดสอบกรณีผิดพลาด

- Invalid Input
- Unauthorized
- Forbidden
- Missing Data
- Duplicate Data
- Expired Token
- Database Error
- External API Error

==================================================
6. Regression Test
==================================================

ตรวจสอบว่า Feature ใหม่
ทำให้ Feature เดิมเสียหรือไม่

==================================================
7. Test Quality
==================================================

ตรวจสอบว่า Test

- อ่านง่าย
- Maintain ได้
- ไม่ซ้ำซ้อน
- ไม่ขึ้นกับลำดับ Test
- ไม่ขึ้นกับข้อมูลแบบ Hardcode
- ไม่ Flaky

==================================================
ข้อกำหนด
==================================================

- ห้ามเพิ่ม Test โดยไม่อธิบายเหตุผล
- ห้ามแก้ Production Code เพื่อให้ Test ผ่าน
- ห้าม Mock มากเกินความจำเป็น
- ต้องระบุ Test ที่สำคัญที่สุดก่อน
- ต้องรออนุมัติก่อนแก้ไข`
  },
    {
    id: "27",
    code: "27",
    icon: "👁️",
    category: "Observability",
    title: "27. Observability Review",
    subtitle: "ตรวจสอบ Logging, Metrics, Tracing, Alerting & Health Checks",
    promptText: `27. OBSERVABILITY
ตรวจสอบ Observability ของระบบทั้งหมด
โดยห้ามเปลี่ยน Business Logic

เริ่มจากการวิเคราะห์ก่อน
ห้ามเพิ่ม Monitoring ทันที

เป้าหมายคือ

Production มีปัญหา
↓
Developer สามารถรู้ได้ว่า
เกิดอะไรขึ้น
ที่ไหน
เมื่อไหร่
และทำไม

==================================================
1. Logging
==================================================

ตรวจสอบ

- Application Logs
- Error Logs
- Authentication Logs
- API Logs
- Background Job Logs

ตรวจสอบว่า Log มี

- Timestamp
- Request ID
- User Context ที่เหมาะสม
- Error Context

แต่ห้าม Log

- Password
- Token
- Secret
- API Key
- Sensitive Data

==================================================
2. Metrics
==================================================

ตรวจสอบ

- Request Count
- Response Time
- Error Rate
- CPU
- Memory
- Database Connection
- Queue Length
- Cache Hit Rate

==================================================
3. Tracing
==================================================

หากระบบมีหลาย Service

ตรวจสอบ Request Flow

User
↓
Next.js
↓
NestJS
↓
Redis
↓
Database
↓
External API

ตรวจสอบว่า Trace
สามารถหาจุดที่ช้าได้หรือไม่

==================================================
4. Alerting
==================================================

ตรวจสอบว่าเหตุการณ์สำคัญ
สามารถแจ้งเตือนได้หรือไม่

เช่น

- API Error สูง
- Server Down
- Database Connection เต็ม
- Memory สูง
- Queue ค้าง
- External API Down

==================================================
5. Health Check
==================================================

ตรวจสอบ

- Application Health
- Database Health
- Redis Health
- Queue Health
- External Service Health

==================================================
ข้อกำหนด
==================================================

- ห้ามเพิ่ม Monitoring โดยไม่มีเหตุผล
- ห้ามเก็บ Sensitive Data
- ต้องเสนอ Metric ที่จำเป็นก่อน
- ต้องระบุ Cost
- ต้องรออนุมัติก่อนติดตั้ง`
  },
    {
    id: "28",
    code: "28",
    icon: "🌋",
    category: "Reliability",
    title: "28. Disaster Recovery Strategy Review",
    subtitle: "ตรวจสอบ Failure Scenarios, Recovery Procedures, RTO, RPO & SPOF",
    promptText: `28. DISASTER RECOVERY
ตรวจสอบ Disaster Recovery Strategy
ของระบบทั้งหมด

โดยห้ามเปลี่ยน Architecture
โดยไม่ได้รับอนุญาต

เริ่มจากการวิเคราะห์ก่อน

==================================================
1. Failure Scenario
==================================================

จำลอง

- Server Down
- Database Down
- Redis Down
- Queue Down
- Storage Down
- Network Failure
- Deployment Failure
- Application Crash

==================================================
2. Recovery
==================================================

ตรวจสอบ

- Restart
- Failover
- Restore
- Rollback
- Retry
- Recovery Procedure

==================================================
3. RTO
==================================================

กำหนด

Recovery Time Objective

ระบบควรกลับมาใช้งานได้ภายในกี่นาที/ชั่วโมง

==================================================
4. RPO
==================================================

กำหนด

Recovery Point Objective

ยอมรับการสูญเสียข้อมูลได้มากแค่ไหน

==================================================
5. Single Point of Failure
==================================================

ค้นหา Component ที่ถ้าพังแล้ว
ระบบทั้งหมดพัง

==================================================
ข้อกำหนด
==================================================

- ห้ามอ้างว่าระบบ Recover ได้
  หากยังไม่เคยทดสอบ
- ต้องแยก Recovery Plan
  กับ Actual Recovery Test
- ต้องระบุความเสี่ยง
- ต้องรออนุมัติก่อนเปลี่ยน Architecture`
  },
    {
    id: "29",
    code: "29",
    icon: "💾",
    category: "Backup",
    title: "29. Backup & Data Recovery Review",
    subtitle: "ตรวจสอบ Database/File Backups, Restore Tests, Recovery Simulation & Security",
    promptText: `29. BACKUP & DATA RECOVERY
ตรวจสอบ Backup และ Data Recovery
ของระบบทั้งหมด

==================================================
1. Database Backup
==================================================

ตรวจสอบ

- Backup Frequency
- Retention
- Backup Location
- Encryption
- Access Control

==================================================
2. Restore Test
==================================================

ตรวจสอบว่า Backup
สามารถ Restore ได้จริงหรือไม่

ห้ามถือว่า

"มี Backup = Backup ใช้งานได้"

==================================================
3. File Backup
==================================================

ตรวจสอบ

- Image
- Video
- Document
- User Upload

==================================================
4. Recovery
==================================================

จำลอง

Database ถูกลบ
↓
Restore Backup
↓
ตรวจสอบ Data Integrity

==================================================
5. Backup Security
==================================================

ตรวจสอบ

- Access
- Encryption
- Secret
- Public Access
- Retention

==================================================
ข้อกำหนด
==================================================

- ห้ามลบข้อมูลจริงเพื่อทดสอบ
- ใช้ Test/Staging Environment
- ห้ามเปิดเผย Backup
- ต้องรออนุมัติก่อนเปลี่ยน Backup Policy`
  },
    {
    id: "30",
    code: "30",
    icon: "🔌",
    category: "API",
    title: "30. API Design Review",
    subtitle: "ตรวจสอบ Naming, Request DTOs, Response Formats, Security, Versioning & Performance",
    promptText: `30. API DESIGN
ตรวจสอบ API Design ทั้งหมด
โดยห้ามเปลี่ยน API Contract
โดยไม่ได้รับอนุญาต

==================================================
1. Naming
==================================================

ตรวจสอบ

- Endpoint Naming
- HTTP Method
- Resource Naming
- Consistency

==================================================
2. Request
==================================================

ตรวจสอบ

- DTO
- Validation
- Required Field
- Optional Field
- Data Type

==================================================
3. Response
==================================================

ตรวจสอบ

- Response Structure
- Status Code
- Error Format
- Pagination
- Metadata

==================================================
4. Security
==================================================

ตรวจสอบ

- Authentication
- Authorization
- Rate Limit
- Input Validation

==================================================
5. API Versioning
==================================================

ตรวจสอบว่าการเปลี่ยน API
จะกระทบ Client เดิมหรือไม่

==================================================
6. Performance
==================================================

ตรวจสอบ

- Payload Size
- Over-fetching
- Under-fetching
- Pagination
- Duplicate Request

==================================================
ข้อกำหนด
==================================================

- ห้ามเปลี่ยน API Contract ทันที
- ต้องเสนอ Breaking Change ก่อน
- ต้องระบุผลกระทบต่อ Frontend
- ต้องรออนุมัติ`
  },
    {
    id: "31",
    code: "31",
    icon: "🗄️",
    category: "Database",
    title: "31. Database Design Review",
    subtitle: "ตรวจสอบ Schemas, Relationships, Normalization, Indexes, Queries, Transactions & Migrations",
    promptText: `31. DATABASE DESIGN
ตรวจสอบ Database Design ทั้งหมด
โดยห้ามเปลี่ยน Schema ทันที

==================================================
1. Schema
==================================================

ตรวจสอบ

- Table
- Column
- Data Type
- Primary Key
- Foreign Key
- Constraint

==================================================
2. Relationship
==================================================

ตรวจสอบ

- One-to-One
- One-to-Many
- Many-to-Many

==================================================
3. Normalization
==================================================

ตรวจสอบ Data Duplication

==================================================
4. Index
==================================================

ตรวจสอบ

- Missing Index
- Unused Index
- Duplicate Index
- Composite Index

==================================================
5. Query
==================================================

ตรวจสอบ

- Slow Query
- N+1
- Full Table Scan
- Unnecessary Join
- Repeated Query

==================================================
6. Transaction
==================================================

ตรวจสอบ

- Atomicity
- Consistency
- Isolation
- Durability

==================================================
7. Migration
==================================================

ตรวจสอบว่า Migration

- ปลอดภัย
- Rollback ได้หรือไม่
- กระทบ Production หรือไม่
- Lock Table หรือไม่

==================================================
ข้อกำหนด
==================================================

- ห้ามแก้ Schema ทันที
- ห้ามเพิ่ม Index โดยไม่วิเคราะห์ Query
- ต้องแสดงผลกระทบ
- ต้องรออนุมัติ`
  },
    {
    id: "32",
    code: "32",
    icon: "📈",
    category: "Scale",
    title: "32. Scalability Review",
    subtitle: "วิเคราะห์ Traffic (10 -> 100,000 Users), Bottlenecks, Horizontal/Vertical Scaling & Statelessness",
    promptText: `32. SCALABILITY
ตรวจสอบ Scalability ของระบบทั้งหมด

โดยห้ามเปลี่ยน Architecture ทันที

==================================================
1. Traffic
==================================================

วิเคราะห์

10 Users
100 Users
1,000 Users
10,000 Users
100,000 Users

==================================================
2. Bottleneck
==================================================

ค้นหา

- CPU
- Memory
- Database
- Network
- Storage
- API
- External Service

==================================================
3. Horizontal Scaling
==================================================

ตรวจสอบว่า Backend
สามารถเพิ่ม Instance ได้หรือไม่

==================================================
4. Vertical Scaling
==================================================

ตรวจสอบว่าการเพิ่ม

CPU
RAM

ช่วยได้หรือไม่

==================================================
5. Stateless
==================================================

ตรวจสอบว่า Backend
สามารถทำงานหลาย Instance
โดยไม่พึ่ง Memory ของ Instance เดียวหรือไม่

==================================================
ข้อกำหนด
==================================================

- ห้าม Scale โดยไม่มี Bottleneck
- ต้องวัดก่อน
- ต้องระบุ Cost
- ต้องระบุ Trade-off`
  },
    {
    id: "33",
    code: "33",
    icon: "🛡️",
    category: "Reliability",
    title: "33. System Reliability Review",
    subtitle: "ตรวจสอบ Timeouts, Retries, Circuit Breakers, Fallbacks, External API/DB Failures",
    promptText: `33. RELIABILITY
ตรวจสอบ Reliability ของระบบทั้งหมด

เป้าหมาย

ระบบบางส่วนพัง
↓
ระบบส่วนอื่นควรทำงานต่อได้
หากเป็นไปได้

==================================================
ตรวจสอบ

- Timeout
- Retry
- Circuit Breaker
- Fallback
- Health Check
- Graceful Shutdown
- Idempotency
- Transaction
- Failure Isolation

==================================================
External API

ตรวจสอบ

External API Down
↓
ระบบของเราจะเกิดอะไรขึ้น?

==================================================
Database

ตรวจสอบ

Database Slow
↓
ระบบจะ Timeout หรือไม่?

==================================================
ข้อกำหนด

- ห้าม Retry แบบไม่จำกัด
- ห้ามสร้าง Retry Storm
- ห้ามเปลี่ยน Behavior โดยไม่ได้รับอนุญาต
- ต้องวิเคราะห์ Failure Scenario`
  },
    {
    id: "34",
    code: "34",
    icon: "🧩",
    category: "Maintainability",
    title: "34. Maintainability Review",
    subtitle: "ตรวจสอบ Code Duplication, Function Size, Coupling, Cohesion, Technical Debt & Architecture",
    promptText: `34. MAINTAINABILITY
ตรวจสอบ Maintainability ของ Codebase

โดยห้ามเปลี่ยน Behavior ของระบบ

==================================================
ตรวจสอบ

- Code Duplication
- Function ขนาดใหญ่
- Class ขนาดใหญ่
- Module ที่รับผิดชอบหลายอย่าง
- Naming
- Dependency
- Coupling
- Cohesion
- Complexity
- Dead Code
- Technical Debt

==================================================
ตรวจสอบ Architecture

ว่า

Module A
↓
เรียก
↓
Module B
↓
เรียก
↓
Module C

มี Dependency ที่ซับซ้อนเกินไปหรือไม่

==================================================
เป้าหมาย

Developer คนใหม่
ควรสามารถเข้าใจ Code
ได้โดยไม่ต้องถามผู้เขียนทุกเรื่อง

==================================================
ข้อกำหนด

- ห้าม Refactor เพียงเพื่อความสวย
- ต้องมีเหตุผล
- ต้องไม่เปลี่ยน Behavior
- ต้องเสนอ Refactor ก่อน`
  },
    {
    id: "35",
    code: "35",
    icon: "📄",
    category: "Documentation",
    title: "35. Project Documentation Review",
    subtitle: "ตรวจสอบ README, Setup Guides, Environment Docs, API & Database Docs",
    promptText: `35. DOCUMENTATION
ตรวจสอบ Documentation ของ Project

==================================================
ตรวจสอบ

- README
- Installation
- Environment
- Architecture
- API
- Database
- Authentication
- Deployment
- Troubleshooting
- Development Guide

==================================================
README

ตรวจสอบว่า Developer ใหม่
สามารถทำ

Clone
↓
Install
↓
Configure
↓
Run
↓
Test

ได้หรือไม่

==================================================
API Documentation

ตรวจสอบ

- Endpoint
- Request
- Response
- Error
- Authentication

==================================================
ข้อกำหนด

- Documentation ต้องตรงกับ Code
- ห้ามเขียนข้อมูลที่ไม่ตรงกับระบบ
- หาก Code เปลี่ยน
  ให้ระบุ Documentation ที่ควร Update`
  },
    {
    id: "36",
    code: "36",
    icon: "💻",
    category: "DX",
    title: "36. Developer Experience (DX) Review",
    subtitle: "ตรวจสอบ Setup, Scripts, Linting, Testing, Docker, Migration & Onboarding Flow",
    promptText: `36. DEVELOPER EXPERIENCE (DX)
ตรวจสอบ Developer Experience
ของ Project

เป้าหมาย

ทำให้ Developer
สามารถ Develop Project
ได้ง่ายและรวดเร็ว

==================================================
ตรวจสอบ

- Setup
- Installation
- Environment
- Scripts
- Lint
- Format
- Test
- Build
- Docker
- Database Migration

==================================================
ตัวอย่าง

npm run dev
npm run test
npm run lint
npm run build
docker compose up

ตรวจสอบว่า Command
สามารถทำงานได้จริง

==================================================
Onboarding

จำลอง Developer ใหม่

Clone Project
↓
Install
↓
Environment
↓
Run
↓
Test

ตรวจสอบว่าติดปัญหาตรงไหน

==================================================
ข้อกำหนด

- ห้ามเพิ่ม Tool โดยไม่จำเป็น
- ต้องลดความซับซ้อน
- ต้องไม่เพิ่ม Process ที่ไม่มีประโยชน์`
  },
    {
    id: "37",
    code: "37",
    icon: "💵",
    category: "Cost",
    title: "37. Cost Optimization Review",
    subtitle: "วิเคราะห์ Hosting, Database, Storage, API, CDN, Infrastructure Costs & Optimization",
    promptText: `37. COST OPTIMIZATION
ตรวจสอบ Cost ของ Project
โดยไม่ลดความสามารถของระบบ
โดยไม่ได้รับอนุญาต

==================================================
ตรวจสอบ

- Hosting
- Database
- Storage
- Bandwidth
- API
- CDN
- Redis
- Queue
- Logging
- Monitoring
- Docker Infrastructure

==================================================
ค้นหา

- Resource ที่ไม่ได้ใช้
- Server ใหญ่เกินไป
- Database ใหญ่เกินไป
- Storage ที่ไม่จำเป็น
- API Request ซ้ำ
- Log ที่เก็บมากเกินไป

==================================================
เปรียบเทียบ

Current Cost
vs
Optimized Cost

==================================================
ข้อกำหนด

- ห้ามลด Resource จนกระทบ Performance
- ต้องระบุ Trade-off
- ต้องวิเคราะห์ก่อนลด Cost`
  },
    {
    id: "38",
    code: "38",
    icon: "♿",
    category: "Accessibility",
    title: "38. ACCESSIBILITY",
    subtitle: "ตรวจสอบ Accessibility ของเว็บไซต์",
    promptText: `38. ACCESSIBILITY
ตรวจสอบ Accessibility ของเว็บไซต์

โดยห้ามเปลี่ยน UI
โดยไม่ได้รับอนุญาต

==================================================
ตรวจสอบ

- Keyboard Navigation
- Focus State
- Semantic HTML
- Label
- Form
- Button
- Image Alt
- Screen Reader
- Color Contrast
- Error Message
- Input Validation

==================================================
ตรวจสอบ Form

Input
↓
Label
↓
Error
↓
Screen Reader

==================================================
Keyboard

ตรวจสอบว่า

Tab
↓
สามารถเข้าถึง Element สำคัญ
ได้ครบหรือไม่

==================================================
ข้อกำหนด

- ห้ามเปลี่ยน Design ทันที
- ต้องระบุ Accessibility Issue
- ต้องเสนอวิธีแก้ก่อน`
  },
    {
    id: "39",
    code: "39",
    icon: "🔍",
    category: "SEO / UX",
    title: "39. SEO / UX",
    subtitle: "ตรวจสอบ SEO และ UX ของเว็บไซต์",
    promptText: `39. SEO / UX
ตรวจสอบ SEO และ UX
ของเว็บไซต์

โดยห้ามเปลี่ยน UI หรือ Business Logic
โดยไม่ได้รับอนุญาต

==================================================
SEO

ตรวจสอบ

- Title
- Meta Description
- Heading
- Semantic HTML
- URL
- Sitemap
- Robots
- Canonical
- Open Graph
- Structured Data
- SSR / SSG
- Loading Performance

==================================================
Next.js

ตรวจสอบ

- Metadata
- Server Components
- Static Generation
- Dynamic Rendering
- Image Optimization

==================================================
UX

ตรวจสอบ

- Loading State
- Empty State
- Error State
- Success State
- Feedback
- Navigation
- Form Experience
- Mobile Experience

==================================================
ข้อกำหนด

- ห้ามเปลี่ยน Design ทันที
- ต้องแยก SEO Issue กับ UX Issue
- ต้องอธิบายผลกระทบ`
  },
    {
    id: "40",
    code: "40",
    icon: "🚀",
    category: "Production Readiness",
    title: "40. PRODUCTION READINESS",
    subtitle: "ตรวจสอบ Production Readiness ของ Project ทั้งหมด",
    promptText: `40. PRODUCTION READINESS 
ตรวจสอบ Production Readiness
ของ Project ทั้งหมด

เป้าหมาย

ระบบต้องพร้อมสำหรับ
การใช้งานจริงมากที่สุดเท่าที่เหมาะสม

==================================================
ตรวจสอบ

Code
↓
Test
↓
Security
↓
Performance
↓
Database
↓
Environment
↓
Deployment
↓
Monitoring
↓
Logging
↓
Backup
↓
Recovery

==================================================
Security

ตรวจสอบ

- Secret
- HTTPS
- Authentication
- Authorization
- Rate Limit
- Security Headers

==================================================
Performance

ตรวจสอบ

- API
- Database
- Frontend
- Image
- Video
- Cache

==================================================
Deployment

ตรวจสอบ

- Build
- Environment
- Migration
- Rollback
- Health Check

==================================================
Monitoring

ตรวจสอบ

- Error
- Performance
- Server
- Database

==================================================
Final Checklist

จัดระดับ

READY
↓
READY WITH RISK
↓
NOT READY

พร้อมเหตุผล

==================================================
ข้อกำหนด

- ห้ามบอกว่า Production Ready
  หากยังไม่ได้ตรวจสอบ
- ห้ามอ้างว่าไม่มีปัญหา = ปลอดภัย 100%
- ต้องแสดง Risk ที่ยังเหลือ`
  },
    {
    id: "41",
    code: "41",
    icon: "📝",
    category: "Architecture",
    title: "41. ARCHITECTURE DECISION RECORD (ADR)",
    subtitle: "ตรวจสอบ Architecture Decision ของ Project",
    promptText: `41. ARCHITECTURE DECISION RECORD (ADR)
อันนี้ผมอยากให้คุณ ให้ความสำคัญเป็นพิเศษ ครับ เพราะมันช่วยให้คุณฝึก “คิดก่อนเลือก Technology”
ตรวจสอบ Architecture Decision
ของ Project

เป้าหมายคือบันทึกว่า

"ทำไมเราจึงเลือกวิธีนี้
และทำไมจึงไม่เลือกวิธีอื่น"

==================================================
1. Decision
==================================================

ระบุว่าเราตัดสินใจอะไร

ตัวอย่าง

เลือก Redis สำหรับ Cache

==================================================
2. Context
==================================================

อธิบายปัญหา

ตัวอย่าง

Dashboard มี Query ซ้ำจำนวนมาก
และ Database Load สูง

==================================================
3. Options
==================================================

แสดงทางเลือก

Option 1
ใช้ PostgreSQL อย่างเดียว

Option 2
ใช้ Redis Cache

Option 3
ใช้ Database Replica

==================================================
4. Decision
==================================================

เลือก Option ไหน

==================================================
5. Reason
==================================================

อธิบายเหตุผล

- Performance
- Cost
- Complexity
- Scalability
- Maintainability

==================================================
6. Trade-off
==================================================

ระบุข้อเสียของ Decision

เช่น

Redis

ข้อดี
- ลด Database Load
- Response เร็ว

ข้อเสีย
- เพิ่ม Infrastructure
- ต้องจัดการ Cache Invalidation

==================================================
7. Consequence
==================================================

หลังเลือกแล้ว

ระบบจะเปลี่ยนอะไร

==================================================
8. Revisit Condition
==================================================

ระบุว่า

"เมื่อไหร่ควรกลับมาทบทวน Decision นี้"

ตัวอย่าง

เมื่อ Traffic > 100,000 Requests/day

หรือ

เมื่อ Redis Cache Hit Rate ต่ำกว่า 50%

==================================================
9. Alternatives Rejected
==================================================

อธิบายว่า

ทำไมไม่เลือก

- RabbitMQ
- Kafka
- PostgreSQL
- Database Replica

==================================================
10. Architecture Decision
==================================================

สรุป

Problem
↓
Options
↓
Decision
↓
Reason
↓
Trade-off
↓
Consequence
↓
Revisit Condition

==================================================
ข้อกำหนด

- ห้ามเลือก Technology เพราะความนิยม
- ต้องมี Problem ก่อน Technology
- ต้องมีเหตุผลรองรับ
- ต้องระบุ Trade-off
- ต้องระบุ Alternative
- ต้องระบุว่าเมื่อไหร่ควรเปลี่ยน Decision
- ห้ามสร้าง ADR สำหรับทุกเรื่องเล็ก ๆ
- ใช้กับ Decision ที่มีผลต่อ Architecture`
  }
];
