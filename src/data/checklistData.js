import { MASTER_CARDS_PART2 } from './checklistData1';

export const GENERAL_RULES = [
  "1. ทำหน้าที่เป็น Senior Developer / Code Reviewer",
  "2. ห้ามรีบแก้ไขโค้ด",
  "3. เริ่มจากการอ่านและวิเคราะห์โค้ดที่มีอยู่ก่อน",
  "4. ห้ามสมมติว่า Architecture ปัจจุบันผิด",
  "5. ห้ามเพิ่ม Library หรือ Technology เพียงเพราะเป็น Best Practice",
  "6. ต้องตรวจสอบว่าปัญหามีอยู่จริงก่อนแก้",
  "7. ต้องระบุ Root Cause",
  "8. ต้องระบุ Impact",
  "9. ต้องเสนอ Solution อย่างน้อย 1 วิธี",
  "10. ต้องบอกข้อดีและข้อเสียของ Solution",
  "11. ต้องบอก Risk ของการแก้ไข",
  "12. ต้องแยก Critical / High / Medium / Low",
  "13. ก่อนลงมือแก้ ต้องรอการอนุมัติจากผม",
  "14. หลังผมอนุมัติ จึงค่อยแก้ไข",
  "15. แก้เฉพาะจุดที่จำเป็น",
  "16. ห้าม Rewrite โปรเจกต์ทั้งหมด",
  "17. ห้ามเปลี่ยน Business Logic โดยไม่ได้รับอนุญาต",
  "18. ห้ามลบ Feature",
  "19. ห้ามเปลี่ยน API Contract โดยไม่ได้รับอนุญาต",
  "20. หลังแก้ไขต้องสรุป Before / After",
  "21. ต้องระบุไฟล์ที่แก้ไข",
  "22. ต้องอธิบายว่าทำไมต้องแก้",
  "23. ต้องแจ้งหากไม่พบปัญหา",
  "24. หากไม่จำเป็นต้องแก้ ให้บอกว่า \"ไม่จำเป็นต้องแก้\""
];

export const GENERAL_RULES_FORMATTED_TEXT = `🔥 กฎการทำงาน (24 ข้อ)

1. ทำหน้าที่เป็น Senior Developer / Code Reviewer
2. ห้ามรีบแก้ไขโค้ด
3. เริ่มจากการอ่านและวิเคราะห์โค้ดที่มีอยู่ก่อน
4. ห้ามสมมติว่า Architecture ปัจจุบันผิด
5. ห้ามเพิ่ม Library หรือ Technology เพียงเพราะเป็น Best Practice
6. ต้องตรวจสอบว่าปัญหามีอยู่จริงก่อนแก้
7. ต้องระบุ Root Cause
8. ต้องระบุ Impact
9. ต้องเสนอ Solution อย่างน้อย 1 วิธี
10. ต้องบอกข้อดีและข้อเสียของ Solution
11. ต้องบอก Risk ของการแก้ไข
12. ต้องแยก Critical / High / Medium / Low
13. ก่อนลงมือแก้ ต้องรอการอนุมัติจากผม
14. หลังผมอนุมัติ จึงค่อยแก้ไข
15. แก้เฉพาะจุดที่จำเป็น
16. ห้าม Rewrite โปรเจกต์ทั้งหมด
17. ห้ามเปลี่ยน Business Logic โดยไม่ได้รับอนุญาต
18. ห้ามลบ Feature
19. ห้ามเปลี่ยน API Contract โดยไม่ได้รับอนุญาต
20. หลังแก้ไขต้องสรุป Before / After
21. ต้องระบุไฟล์ที่แก้ไข
22. ต้องอธิบายว่าทำไมต้องแก้
23. ต้องแจ้งหากไม่พบปัญหา
24. หากไม่จำเป็นต้องแก้ ให้บอกว่า "ไม่จำเป็นต้องแก้"`;

export const AI_PROMPT_FRAMING = [
  {
    dont: "ช่วยปรับเว็บให้ดีขึ้น",
    do: "ตรวจสอบ Security โดยห้ามเปลี่ยน Business Logic",
    benefit: "ป้องกัน AI รื้อโครงสร้างระบบโดยไม่จำเป็น"
  },
  {
    dont: "ทำไมเว็บช้า ช่วยแก้หน่อย",
    do: "ตรวจสอบ Database Performance โดยห้ามเปลี่ยน API Contract",
    benefit: "บังคับให้ AI โฟกัสเฉพาะจุดคอขวดที่แท้จริง"
  },
  {
    dont: "จัดระเบียบโค้ดใหม่ทั้งหมดให้หน่อย",
    do: "ตรวจสอบ Code Quality โดยห้ามเปลี่ยนพฤติกรรมของระบบ",
    benefit: "ป้องกันไม่ให้เกิด Regression Bugs"
  },
  {
    dont: "ออกแบบหน้าจอนี้ใหม่ให้สวยๆ",
    do: "ตรวจสอบ UX โดยห้ามลบ Feature",
    benefit: "รักษาความสามารถเดิมของระบบไว้ครบถ้วน"
  },
  {
    dont: "ทำให้รองรับคนใช้งานมากๆ หน่อย",
    do: "ตรวจสอบ Scalability โดยห้ามเพิ่ม Infrastructure จนกว่าจะมีเหตุผลรองรับ",
    benefit: "ประหยัดค่าใช้จ่ายและป้องกันความซับซ้อนเกินจำเป็น"
  }
];

export const MASTER_INTRO = {
  title: "PROJECT REVIEW MASTER CHECKLIST",
  howToUse: `วิธีใช้งาน
เมื่อโปรเจกต์เสร็จ ไม่ต้องเอา 41 Prompt ไปสั่งพร้อมกัน
ให้ตรวจทีละด้าน เช่น
"ตรวจสอบ Security ของโปรเจกต์นี้..."
หรือ
"ตรวจสอบ Database Performance ของโปรเจกต์นี้..."
แบบนี้ AI จะทำหน้าที่เหมือน Senior Developer / Code Reviewer มากกว่า AI ที่พยายามเขียนโค้ดใหม่ทั้งโปรเจกต์`,
  
  rulesTitle: "กฎการทำงาน (24 ข้อ)",
  rulesList: GENERAL_RULES,
  rulesText: GENERAL_RULES_FORMATTED_TEXT,

  goldenTipTitle: "⭐ สิ่งที่ผมอยากให้คุณจำที่สุด",
  goldenTipText: `เวลา AI สร้างโปรเจกต์เสร็จ อย่าถามมันว่า
❌ "ช่วยปรับเว็บให้ดีขึ้น"
เพราะมันจะมีโอกาสรื้อของคุณ
ให้คุณพูดแบบนี้:
"ตรวจสอบ Security โดยห้ามเปลี่ยน Business Logic"
"ตรวจสอบ Database Performance โดยห้ามเปลี่ยน API Contract"
"ตรวจสอบ Code Quality โดยห้ามเปลี่ยนพฤติกรรมของระบบ"
"ตรวจสอบ UX โดยห้ามลบ Feature"
"ตรวจสอบ Scalability โดยห้ามเพิ่ม Infrastructure จนกว่าจะมีเหตุผลรองรับ"
แล้วตามด้วย:
"เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที และรอการอนุมัติจากผมก่อนลงมือ"
นี่แหละครับที่เปลี่ยน AI จาก "คนเขียนโค้ดให้" → "Senior ที่ Review โค้ดให้เรา"
และสำหรับคุณที่ตั้งใจฝึกเขียนเอง 70–80% แล้วให้ AI ช่วย Review วิธีนี้เหมาะมาก เพราะคุณจะได้ อ่านปัญหา → คิดตาม → ตัดสินใจ → แล้วค่อยให้ AI แก้ แทนที่จะปล่อยให้ AI ทำทุกอย่างให้ตั้งแต่ต้นครับ`
};


// Part 1: Review Cards 01 to 20
export const CARDS_PART1 = [
  {
    id: "01",
    code: "01",
    icon: "✍️",
    category: "Copywriting",
    title: "01. UI Text / Copywriting",
    subtitle: "ตรวจสอบภาษา ข้อความ ปุ่ม และข้อความแจ้งเตือนทั้งหมดในระบบ",
    promptText: `01 — ✍️ UI TEXT / COPYWRITING

เป้าหมาย

ทำให้ข้อความในระบบเป็นธรรมชาติ กระชับ และเหมือน Product จริง ไม่ใช่ข้อความที่ AI สร้างขึ้น

ตรวจสอบ UI Text และ Copywriting ของเว็บไซต์ทั้งหมด โดยห้ามเปลี่ยนโครงสร้าง UI และฟังก์ชันการทำงาน

เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที

สิ่งที่ต้องตรวจสอบ

- ตรวจสอบข้อความทุกหน้า
- ตรวจสอบข้อความบน Button
- ตรวจสอบ Heading และ Subheading
- ตรวจสอบ Placeholder
- ตรวจสอบ Form Label
- ตรวจสอบ Error Message
- ตรวจสอบ Success Message
- ตรวจสอบ Empty State
- ตรวจสอบ Loading State
- ตรวจสอบ Confirmation Dialog
- ตรวจสอบ Tooltip
- ตรวจสอบ Notification
- ตรวจสอบข้อความ Login / Register
- ตรวจสอบข้อความ Dashboard
- ตรวจสอบข้อความ Settings
- ตรวจสอบข้อความในระบบ Admin
- ตรวจสอบภาษาไทยและภาษาอังกฤษให้สม่ำเสมอ
- ตรวจสอบคำศัพท์ Technical ที่ไม่จำเป็น
- ตรวจสอบข้อความที่ฟังดูเหมือน AI สร้าง
- ตรวจสอบข้อความที่ยาวหรือฟุ่มเฟือยเกินไป
- ตรวจสอบข้อความที่ผู้ใช้ทั่วไปอาจอ่านแล้วไม่เข้าใจ

แนวทางการปรับปรุง

- ใช้ภาษาที่คนจริงใช้
- กระชับ
- อ่านแล้วเข้าใจทันที
- ไม่ใช้คำโฆษณาเกินจริง
- ไม่ใช้ศัพท์ยากโดยไม่จำเป็น
- Button ควรบอก Action ที่กำลังจะเกิดขึ้นอย่างชัดเจน
- Error Message ควรบอกปัญหาและแนวทางแก้ไข
- รักษาความหมายเดิมของระบบ

ข้อกำหนด

- ห้ามเปลี่ยน UI
- ห้ามเปลี่ยน Layout
- ห้ามเปลี่ยน UX
- ห้ามเปลี่ยน Business Logic
- ห้ามลบฟีเจอร์
- เปลี่ยนเฉพาะข้อความที่ผู้ใช้มองเห็น
- ต้องแสดงข้อความเดิม → ข้อความใหม่ก่อนแก้
- ต้องอธิบายเหตุผลของการเปลี่ยนข้อความ
- หลังแก้เสร็จให้สรุปข้อความที่เปลี่ยนทั้งหมด`
  },
  {
    "id": "02",
    "code": "02",
    "icon": "🎨",
    "category": "Design System",
    "title": "02. UI Consistency",
    "subtitle": "ตรวจสอบความสม่ำเสมอของ Typography, Components และ CSS",
    "promptText": "02 — 🎨 UI CONSISTENCY\nตรวจสอบความสม่ำเสมอของ UI ทั้งเว็บไซต์ โดยห้ามเปลี่ยนฟังก์ชันการทำงาน\n\nเริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที\n\nสิ่งที่ต้องตรวจสอบ\n\n- Typography (Font Size, Weight, Line Height)\n- Heading, Subheading & Paragraph Hierarchy\n- Button States (Default, Hover, Active, Disabled, Loading)\n- Form Elements (Input, Select, Checkbox, Radio, Textarea)\n- Cards, Modals, Dialogs, Tables & Badges\n- Alert & Toast Notifications\n- Icon System & Sizing\n- Spacing System (Margin & Padding Consistency)\n- Border Radius, Shadow & Elevation Tokens\n- Color System, Palette & Contrast Ratio\n- Dark Mode / Light Mode Consistency\n- Loading, Empty & Error States\n\nตรวจสอบว่า Component ที่มีหน้าที่เหมือนกันใช้รูปแบบเดียวกันหรือไม่\nตรวจสอบ UI ที่มีหน้าตาคล้ายกันแต่ใช้ CSS หรือ Component คนละแบบโดยไม่จำเป็น\nตรวจสอบ Design Token และ Reusable Component ที่ควรนำกลับมาใช้\n\nข้อกำหนด\n\n- ห้ามเปลี่ยน Business Logic\n- ห้ามลบฟีเจอร์\n- ห้ามเปลี่ยน API Contract\n- ห้ามเปลี่ยน Database Schema\n- ห้ามเปลี่ยน UX โดยไม่มีเหตุผล\n- ห้ามเพิ่ม Library โดยไม่จำเป็น\n- หากพบปัญหา ให้แสดงปัญหาและเสนอแนวทางก่อนแก้"
  },
  {
    "id": "03",
    "code": "03",
    "icon": "🧭",
    "category": "User Experience",
    "title": "03. UX & User Flow",
    "subtitle": "ตรวจสอบ User Flow, Navigation และการกู้คืนจากข้อผิดพลาด",
    "promptText": "03 — 🧭 UX & USER FLOW\nตรวจสอบ User Experience (UX) ของโปรเจกต์ทั้งหมด โดยห้ามเปลี่ยน Business Logic โดยไม่ได้รับอนุญาต\n\nเริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที\n\nสิ่งที่ต้องตรวจสอบ\n\n- User Flow & Navigation Structure\n- จำนวนขั้นตอนในการทำงาน (Minimize Friction)\n- ความชัดเจนของ Button & Menu Labeling\n- Form Flow & Validation Feedback\n- Auth Flow (Login, Register, Password Reset, Logout)\n- Error Flow & Recovery Options\n- Loading, Empty & Success States\n- Confirmation & Cancel Actions\n- Back Navigation & Breadcrumbs\n- Search, Filter & Pagination UX\n- Mobile Experience & Touch Targets\n- First-time User Experience (Onboarding Clarity)\n\nจำลองการใช้งานในมุมมองของ User ใหม่ที่ไม่เคยใช้ระบบมาก่อน\n\nข้อกำหนด\n\n- ห้ามเปลี่ยน Business Logic\n- ห้ามลบ Feature\n- ห้ามเปลี่ยน API\n- ห้ามแก้ Database\n- เสนอปัญหาก่อนแก้\n- จัดลำดับความสำคัญ Critical / High / Medium / Low"
  },
  {
    "id": "04",
    "code": "04",
    "icon": "📱",
    "category": "Layout",
    "title": "04. Responsive Design",
    "subtitle": "ตรวจสอบการแสดงผลบนอุปกรณ์ทุกขนาด (320px ถึง 1440px+)",
    "promptText": "04 — 📱 RESPONSIVE DESIGN & ACCESSIBILITY\nตรวจสอบ Responsive Design และ Accessibility ของเว็บไซต์ทั้งหมด โดยห้ามเปลี่ยนฟังก์ชันการทำงาน\n\nเริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที\n\nResponsive Viewports\n\n- Mobile Small (320px)\n- Mobile Standard (375px - 414px)\n- Tablet (768px)\n- Laptop (1024px)\n- Desktop (1440px+)\n- Touch Targets & Overflow Handling\n\nAccessibility (a11y)\n\n- Semantic HTML Elements\n- Image Alt Text & Form Labels\n- Keyboard Navigation & Focus Indicators\n- Color Contrast & Screen Reader Compatibility\n\nข้อกำหนด\n\n- ห้ามเปลี่ยน Business Logic\n- ห้ามลบ Feature\n- ห้ามเปลี่ยน API / Database\n- ห้ามเพิ่ม Library โดยไม่จำเป็น\n- วิเคราะห์ก่อนแก้ และสรุปจุดที่แก้ไขทั้งหมด"
  },
  {
    "id": "05",
    "code": "05",
    "icon": "⚡",
    "category": "Performance",
    "title": "05. Performance",
    "subtitle": "ตรวจสอบและปรับปรุงความเร็วในการโหลดทั้ง Frontend, Backend และ Database",
    "promptText": "05 — ⚡ PERFORMANCE OPTIMIZATION\nตรวจสอบ Performance ของเว็บไซต์ทั้งหมด และปรับปรุงความเร็วในการโหลด โดยห้ามเปลี่ยนหน้าตา ฟังก์ชันการทำงาน หรือ Business Logic\n\nเริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที\n\nFrontend Performance\n\n- Core Web Vitals (LCP, FID, CLS, INP)\n- Bundle Size & Code Splitting\n- Dynamic Imports & Lazy Loading\n- Image & Asset Optimization\n- React Re-render Bottlenecks\n\nBackend & Database\n\n- API Response Times & Slow Endpoints\n- N+1 Queries & Database Indexing\n- Connection Pooling & Payload Minimization\n- Redis Caching Candidates & TTL Planning\n\nข้อกำหนด\n\n- ห้ามเปลี่ยน UI / UX / Business Logic\n- ห้ามลบ Feature\n- ต้องเสนอแนวทางแก้ก่อนลงมือ\n- หลังแก้ให้สรุป Performance ก่อนและหลัง"
  },
  {
    "id": "06",
    "code": "06",
    "icon": "🔐",
    "category": "Security",
    "title": "06. Security",
    "subtitle": "ตรวจสอบ Authentication, Authorization, API Security, Injection และ Secrets",
    "promptText": "06 — 🔐 SECURITY AUDIT\nตรวจสอบ Security ของโปรเจกต์ทั้งหมด โดยห้ามเปลี่ยน Business Logic หรือ Authentication Flow โดยไม่ได้รับอนุญาต\n\nเริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที\n\nสิ่งที่ต้องตรวจสอบ\n\n- Authentication & Token Handling (JWT, Refresh, Cookie Flags)\n- Authorization (RBAC, Ownership Check, BOLA/IDOR)\n- API Security (CORS, Rate Limiting, Input DTO Validation)\n- Injection Vulnerabilities (SQLi, XSS, Path Traversal)\n- Secret Leaks & Environment Variables Security (.env)\n- Supabase Row Level Security (RLS) Policies\n\nข้อกำหนด\n\n- ห้ามลด Security เพื่อแก้ปัญหาอื่น\n- ห้าม Hardcode Secret\n- วิเคราะห์ระดับความเสี่ยง Critical / High / Medium / Low\n- ต้องเสนอวิธีแก้ก่อนลงมือ"
  },
  {
    "id": "07",
    "code": "07",
    "icon": "🗄️",
    "category": "Database",
    "title": "07. Database",
    "subtitle": "ตรวจสอบ Database Architecture, Query Performance, Data Integrity และ PostgreSQL/Supabase",
    "promptText": "07 — 🗄️ DATABASE ARCHITECTURE & QUERY PERFORMANCE\nตรวจสอบ Database Architecture และ Query Performance ของโปรเจกต์ทั้งหมด โดยห้ามเปลี่ยน API Contract หรือ Business Logic\n\nเริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที\n\nสิ่งที่ต้องตรวจสอบ\n\n- Schema Normalization & Column Types\n- Foreign Keys & Data Constraints\n- Indexing Strategy (B-Tree, Composite Indexes)\n- Query Performance & N+1 Problem\n- RLS Policies & Database Connection Pooling\n\nข้อกำหนด\n\n- ห้ามทำลายข้อมูล\n- Migration ต้องปลอดภัย\n- ต้องอธิบายผลดีและผลเสียก่อนเพิ่ม Index"
  },
  {
    "id": "08",
    "code": "08",
    "icon": "🧱",
    "category": "Architecture",
    "title": "08. Code Quality & Architecture",
    "subtitle": "ตรวจสอบ Code Quality, Folder Structure, SOLID, DRY, NestJS และ Next.js Architecture",
    "promptText": "08 — 🧱 CODE QUALITY & SOFTWARE ARCHITECTURE\nตรวจสอบ Code Quality และ Software Architecture ของโปรเจกต์ทั้งหมด โดยห้ามเปลี่ยนพฤติกรรมของระบบ\n\nเริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที\n\nสิ่งที่ต้องตรวจสอบ\n\n- Folder Structure & Architectural Separation\n- SOLID Principles & DRY Violations\n- Component & Service Sizing\n- NestJS / Next.js Framework Best Practices\n- Type Safety & Removal of 'any' Types\n\nข้อกำหนด\n\n- ห้าม Refactor เพียงเพราะ \"สวยกว่า\"\n- ต้องมีเหตุผลทาง Maintainability หรือ Performance\n- ระบุ Risk ของ Refactor ทุกครั้ง"
  },
  {
    "id": "09",
    "code": "09",
    "icon": "🧪",
    "category": "Testing",
    "title": "09. Testing & Quality Assurance",
    "subtitle": "ตรวจสอบ Test Coverage, Unit/Integration/E2E Test และ Edge Cases",
    "promptText": "09 — 🧪 TESTING & QA REVIEW\nตรวจสอบ Test Coverage และความสามารถในการทดสอบของโปรเจกต์ โดยห้ามเปลี่ยน Business Logic\n\nเริ่มจากการวิเคราะห์ก่อน ห้ามเขียน Test ทันที\n\nสิ่งที่ต้องตรวจสอบ\n\n- Unit Test Coverage (Core Domain & Utils)\n- Integration Test Coverage (API & Database Boundaries)\n- E2E Test Scenarios (Critical User Flows)\n- Edge Cases, Boundary Values & Failure Testing\n\nข้อกำหนด\n\n- ห้ามแก้ Production Logic เพียงเพื่อให้ Test ผ่าน\n- Test ต้องตรวจสอบพฤติกรรมจริง"
  },
  {
    "id": "10",
    "code": "10",
    "icon": "🛑",
    "category": "Error Handling",
    "title": "10. Error Handling",
    "subtitle": "ตรวจสอบ Error Handling ทั้ง Frontend/Backend, Fallback UI, Logging และ Edge Cases",
    "promptText": "10 — 🛑 ERROR HANDLING & RESILIENCE\nตรวจสอบ Error Handling ของโปรเจกต์ทั้งหมด โดยห้ามเปลี่ยน Business Logic\n\nเริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที\n\nสิ่งที่ต้องตรวจสอบ\n\n- Frontend Error Boundaries & Fallback States\n- Consistent API Error Response Format\n- Graceful Degradation & Network Failure Recovery\n- Protection against Sensitive Data Leaks in Stack Traces\n\nข้อกำหนด\n\n- ห้ามซ่อน Error\n- ห้ามใช้ 200 OK กับ Error โดยไม่มีเหตุผล\n- วิเคราะห์ก่อนแก้"
  },
  {
    "id": "11",
    "code": "11",
    "icon": "📊",
    "category": "Observability",
    "title": "11. Observability",
    "subtitle": "ตรวจสอบ Logging, Metrics, Tracing และระบบติดตามปัญหาในระดับ Production",
    "promptText": "11 — 📊 OBSERVABILITY & LOGGING\nตรวจสอบ Observability ของโปรเจกต์ทั้งหมด โดยห้ามเปลี่ยน Business Logic\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ\n\n- Structured Logging & Log Levels\n- Error Tracking Integration (Sentry / LogRocket)\n- Application Health Checks & Endpoint Metrics\n- Traceability across Services\n\nข้อกำหนด\n\n- ห้ามเก็บ Sensitive Data ใน Log\n- วิเคราะห์ก่อนติดตั้ง Monitoring Tools"
  },
  {
    "id": "12",
    "code": "12",
    "icon": "💾",
    "category": "Caching",
    "title": "12. Cache & Redis Strategy",
    "subtitle": "ประเมินและวางแผนการใช้งาน Caching, TTL, Invalidation และ Redis สำหรับระบบ",
    "promptText": "12 — 💾 CACHING & REDIS STRATEGY\nตรวจสอบว่าระบบมีส่วนใดที่เหมาะสมกับ Caching หรือ Redis โดยห้ามเพิ่ม Redis ทันที\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ\n\n- Query & API Caching Candidates\n- Cache TTL & Invalidation Strategies\n- Redis Use Cases (Rate Limiting, Session, Queue)\n- Memory Estimation & Trade-offs Analysis\n\nข้อกำหนด\n\n- ห้ามติดตั้ง Redis หากไม่มีเหตุผลชัดเจน\n- ต้องออกแบบ Cache Invalidation"
  },
  {
    "id": "13",
    "code": "13",
    "icon": "🚀",
    "category": "DevOps",
    "title": "13. Deployment & Production Readiness",
    "subtitle": "ตรวจสอบความพร้อมระดับ Production (Environment, Build, Docker, CI/CD และ Rollback)",
    "promptText": "13 — 🚀 DEPLOYMENT & PRODUCTION READINESS\nตรวจสอบความพร้อมของโปรเจกต์สำหรับ Production โดยห้ามเปลี่ยน Business Logic\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ\n\n- Environment Variables & Config Management\n- Production Build Verification & Asset Bundling\n- Dockerfile & Container Optimization\n- CI/CD Pipelines & Automated Rollback Plans\n- Health Check Endpoints (/health)\n\nข้อกำหนด\n\n- ห้าม Deploy จริงโดยไม่ได้รับอนุมัติ\n- ห้ามลบ Production Data"
  },
  {
    "id": "14",
    "code": "14",
    "icon": "📈",
    "category": "Scalability",
    "title": "14. Scalability",
    "subtitle": "วิเคราะห์ขีดจำกัด คอขวด (Bottleneck) และแผนการ Scale ตามปริมาณผู้ใช้งาน",
    "promptText": "14 — 📈 SCALABILITY & BOTTLENECK ANALYSIS\nวิเคราะห์ Scalability ของโปรเจกต์ทั้งหมด โดยห้ามเปลี่ยน Business Logic\n\nเริ่มจากการวิเคราะห์ก่อน ห้ามเพิ่ม Infrastructure ทันที\n\nสถานการณ์ที่ต้องวิเคราะห์\n\n- Traffic Scaling (10 → 1,000 → 100,000 Users)\n- Database Connection Bottlenecks\n- Stateless Application Architecture\n- Horizontal vs Vertical Scaling Feasibility\n\nข้อกำหนด\n\n- ห้ามเพิ่ม Service หรือ Infrastructure โดยไม่มีข้อมูลรองรับ\n- ต้องอธิบาย Cost / Benefit"
  },
  {
    "id": "15",
    "code": "15",
    "icon": "🛡️",
    "category": "Security",
    "title": "15. Production Security Review",
    "subtitle": "ตรวจสอบความปลอดภัยและช่องโหว่ระดับ Production รอบด้าน 18 มิติ",
    "promptText": "15 — 🛡️ PRODUCTION SECURITY REVIEW (18 DIMENSIONS)\nตรวจสอบ Security และช่องโหว่ของโปรเจกต์ทั้งหมดในระดับ Production โดยห้ามเปลี่ยน Business Logic, API Contract หรือ Auth Flow\n\nเริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที\n\n18 มิติในการตรวจสอบ:\n1. Authentication & Token Rotation\n2. Authorization & Access Control (IDOR/BOLA)\n3. API Security & Headers\n4. Injection Attacks (SQLi, NoSQLi, Command)\n5. XSS Prevention & Sanitization\n6. CSRF & Cookie Security (SameSite/HttpOnly)\n7. Sensitive Data Exposure (Logs, API Responses)\n8. Environment & Secrets Leak Check\n9. Supabase RLS Policies & Bucket Security\n10. File Upload Validation & Malware Prevention\n11. Rate Limiting & Abuse Prevention\n12. Business Logic Exploits & Price Tampering\n13. Race Conditions & Atomic Transactions\n14. Dependency Vulnerabilities (npm audit)\n15. Error Handling & Sanitized Stack Traces\n16. Security Headers Configuration\n17. Session Management & Revocation\n18. Attacker Mindset Simulation Testing\n\nข้อกำหนด:\n- ต้องระบุ Root Cause, Impact, Solutions, Risk และ Files ที่เกี่ยวข้อง\n- ต้องรอการอนุมัติก่อนแก้ไข"
  },
  {
    "id": "16",
    "code": "16",
    "icon": "🧩",
    "category": "Maintainability",
    "title": "16. Maintainability Review",
    "subtitle": "ตรวจสอบว่าโค้ดและโปรเจกต์ดูแลต่อในอนาคตได้ง่ายหรือไม่",
    "promptText": "16 — 🧩 MAINTAINABILITY REVIEW\nตรวจสอบว่าโปรเจกต์สามารถดูแล แก้ไข และพัฒนาต่อได้ง่ายหรือไม่ โดยห้ามเปลี่ยน Business Logic\n\nเริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที\n\nสิ่งที่ต้องตรวจสอบ:\n- Code Readability & Naming Conventions\n- Function & Component Sizing (Single Responsibility)\n- Code Duplication & Refactoring Candidates\n- Hardcoded Values & Magic Numbers Replacement\n- Technical Debt & Maintenance Risk Assessment\n\nข้อกำหนด:\n- ห้าม Refactor เพียงเพราะความชอบส่วนตัว\n- ต้องอธิบายความคุ้มค่าด้าน Maintainability ก่อนแก้"
  },
  {
    "id": "17",
    "code": "17",
    "icon": "🧪",
    "category": "QA",
    "title": "17. Edge Case / Boundary Case Review",
    "subtitle": "ตรวจสอบ Edge Case และ Boundary Case ของโปรเจกต์ทั้งหมด",
    "promptText": "17 — 🧪 EDGE CASE & BOUNDARY CASE REVIEW\nตรวจสอบ Edge Cases และ Boundary Conditions ของโปรเจกต์ทั้งหมด\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Null, Undefined & Empty Data Handlings\n- Max Length, Min Length & Overflow Inputs\n- Timezone, Concurrent Requests & Race States\n- Network Drops & Timeout Recoveries"
  },
  {
    "id": "18",
    "code": "18",
    "icon": "🔄",
    "category": "Data Flow",
    "title": "18. Data Flow Review",
    "subtitle": "ตรวจสอบการเดินทางของข้อมูลตั้งแต่ Frontend → Backend → Database",
    "promptText": "18 — 🔄 DATA FLOW REVIEW\nตรวจสอบการเดินทางของข้อมูลตั้งแต่ Frontend → Backend → Database\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Payload Minimization & Unused Field Stripping\n- Type Safety across Layers (DTO -> Entity -> UI Model)\n- Data Mutation Consistency & Side Effects"
  },
  {
    "id": "19",
    "code": "19",
    "icon": "🧠",
    "category": "State",
    "title": "19. State Management Review",
    "subtitle": "ตรวจสอบการจัดการ State (Local, Global, Server, Form, URL, Cache) ทั้งระบบ",
    "promptText": "19 — 🧠 STATE MANAGEMENT REVIEW\nตรวจสอบการจัดการ State (Local, Global, Server, Form, URL, Cache) ทั้งระบบ\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- Redundant State & Single Source of Truth\n- Server State vs Client State Separation (React Query / SWR vs Context)\n- Unnecessary Re-renders & Memory Leaks"
  },
  {
    "id": "20",
    "code": "20",
    "icon": "🔌",
    "category": "API",
    "title": "20. API Design Review",
    "subtitle": "ตรวจสอบ Endpoints, Requests, Responses, Status Codes, Security, Performance & Docs",
    "promptText": "20 — 🔌 API DESIGN & CONTRACT REVIEW\nตรวจสอบ Endpoints, Requests, Responses, Status Codes, Security, Performance & Docs\n\nเริ่มจากการวิเคราะห์ก่อน\n\nสิ่งที่ต้องตรวจสอบ:\n- RESTful Naming Conventions & HTTP Verbs Consistency\n- Standardized Error & Success Response Contracts\n- Versioning Strategy & OpenAPI/Swagger Documentation"
  }
];

// Combined 41 Cards
export const MASTER_41_CARDS = [...CARDS_PART1, ...MASTER_CARDS_PART2];
