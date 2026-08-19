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
    id: "02",
    code: "02",
    icon: "🎨",
    category: "Design System",
    title: "02. UI Consistency",
    subtitle: "ตรวจสอบความสม่ำเสมอของ Typography, Components และ CSS",
    promptText: `02 — 🎨 UI CONSISTENCY
ตรวจสอบความสม่ำเสมอของ UI ทั้งเว็บไซต์ โดยห้ามเปลี่ยนฟังก์ชันการทำงาน
 
เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที
 
สิ่งที่ต้องตรวจสอบ
 
- Typography
- Font Size
- Font Weight
- Heading
- Button
- Input
- Select
- Checkbox
- Radio
- Card
- Modal
- Dialog
- Table
- Badge
- Alert
- Toast
- Icon
- Spacing
- Border Radius
- Shadow
- Color
- Dark Mode
- Light Mode
- Loading State
- Empty State
- Error State
 
ตรวจสอบว่า Component ที่มีหน้าที่เหมือนกันใช้รูปแบบเดียวกันหรือไม่
 
ตรวจสอบ UI ที่มีหน้าตาคล้ายกันแต่ใช้ CSS หรือ Component คนละแบบโดยไม่จำเป็น
 
ตรวจสอบ Design Token และ Reusable Component ที่ควรนำกลับมาใช้
 
ข้อกำหนด
 
- ห้ามเปลี่ยน Business Logic
- ห้ามลบฟีเจอร์
- ห้ามเปลี่ยน API
- ห้ามเปลี่ยน Database
- ห้ามเปลี่ยน UX โดยไม่มีเหตุผล
- ห้ามเพิ่ม Library โดยไม่จำเป็น
- หากพบปัญหา ให้แสดงปัญหาและเสนอแนวทางก่อนแก้`
  },
    {
    id: "03",
    code: "03",
    icon: "🧭",
    category: "User Experience",
    title: "03. UX & User Flow",
    subtitle: "ตรวจสอบ User Flow, Navigation และการกู้คืนจากข้อผิดพลาด",
    promptText: `03 — 🧭 UX
ตรวจสอบ User Experience (UX) ของโปรเจกต์ทั้งหมด โดยห้ามเปลี่ยน Business Logic โดยไม่ได้รับอนุญาต
 
เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที
 
สิ่งที่ต้องตรวจสอบ
 
- User Flow
- Navigation
- จำนวนขั้นตอนในการทำงาน
- ความชัดเจนของ Button
- ความชัดเจนของ Menu
- Form Flow
- Login Flow
- Register Flow
- Logout Flow
- Error Flow
- Loading Flow
- Empty State
- Success State
- Confirmation
- Cancel Action
- Back Navigation
- Search
- Filter
- Pagination
- Mobile UX
- First-time User Experience
 
ให้จำลองการใช้งานในมุมมองของ User ใหม่ที่ไม่เคยใช้ระบบมาก่อน
 
ตรวจสอบว่า User สามารถตอบคำถามเหล่านี้ได้หรือไม่
 
- ตอนนี้ฉันอยู่หน้าไหน?
- ฉันควรทำอะไรต่อ?
- ปุ่มนี้ทำอะไร?
- ระบบกำลังทำอะไร?
- ถ้าเกิด Error ฉันต้องทำอย่างไร?
- งานที่ฉันทำสำเร็จหรือยัง?
 
ข้อกำหนด
 
- ห้ามเปลี่ยน Business Logic
- ห้ามลบ Feature
- ห้ามเปลี่ยน API
- ห้ามแก้ Database
- เสนอปัญหาก่อนแก้
- ให้ระดับความสำคัญ Critical / High / Medium / Low`
  },
    {
    id: "04",
    code: "04",
    icon: "📱",
    category: "Layout",
    title: "04. Responsive Design",
    subtitle: "ตรวจสอบการแสดงผลบนอุปกรณ์ทุกขนาด (320px ถึง 1440px+)",
    promptText: `04 — 📱 RESPONSIVE + ACCESSIBILITY
ตรวจสอบ Responsive Design และ Accessibility ของเว็บไซต์ทั้งหมด โดยห้ามเปลี่ยนฟังก์ชันการทำงาน
 
เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที
 
Responsive
 
- Desktop
- Laptop
- Tablet
- Mobile
- หน้าจอขนาดเล็ก
- Landscape
- Portrait
- Navigation
- Sidebar
- Modal
- Table
- Form
- Button
- Card
- Image
- Video
- Text Overflow
- Horizontal Scroll
 
ให้ตรวจสอบอย่างน้อย
 
- 320px
- 375px
- 768px
- 1024px
- 1440px
 
Accessibility
 
- Semantic HTML
- alt ของรูปภาพ
- Label ของ Form
- Keyboard Navigation
- Focus State
- Focus Order
- Button Accessibility
- Contrast
- Font Size
- Screen Reader
- ARIA ที่จำเป็น
- Error Message
- Form Validation
 
ข้อกำหนด
 
- ห้ามเปลี่ยน Business Logic
- ห้ามลบ Feature
- ห้ามเปลี่ยน API
- ห้ามเปลี่ยน Database
- ห้ามเพิ่ม Library โดยไม่จำเป็น
- วิเคราะห์ก่อนแก้
- หลังแก้ต้องสรุปว่าแต่ละจุดแก้อะไร`
  },
    {
    id: "05",
    code: "05",
    icon: "⚡",
    category: "Performance",
    title: "05. Performance",
    subtitle: "ตรวจสอบและปรับปรุงความเร็วในการโหลดทั้ง Frontend, Backend และ Database",
    promptText: `05 — ⚡ PERFORMANCE
อันนี้คือ Prompt ที่คุณทำไว้ ผมปรับให้สมบูรณ์ขึ้น
 
ตรวจสอบ Performance ของเว็บไซต์ทั้งหมด และปรับปรุงความเร็วในการโหลด โดยห้ามเปลี่ยนหน้าตา ฟังก์ชันการทำงาน หรือ Business Logic
 
เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที
 
Frontend
 
- วิเคราะห์ Page Load Time
- วิเคราะห์ Core Web Vitals
- ตรวจสอบ JavaScript Bundle Size
- ตรวจสอบ Network Requests
- ตรวจสอบ API Requests ที่ซ้ำ
- ตรวจสอบ React Re-render
- ตรวจสอบ Component ที่ Re-render บ่อย
- ตรวจสอบ Client Components
- ตรวจสอบ Server Components
- ตรวจสอบ Dynamic Import
- ตรวจสอบ Code Splitting
- ตรวจสอบ Lazy Loading
- ตรวจสอบ Image Optimization
- ตรวจสอบ next/image
- ตรวจสอบ Font Loading
- ตรวจสอบ Video Loading
- ตรวจสอบ Hydration
- ตรวจสอบ Prefetch
- ตรวจสอบ Preload
- ตรวจสอบ JavaScript ที่ไม่จำเป็น
 
Backend
 
- ตรวจสอบ API Response Time
- ตรวจสอบ Slow API
- ตรวจสอบ Database Query
- ตรวจสอบ N+1 Query
- ตรวจสอบ Authentication
- ตรวจสอบ Middleware
- ตรวจสอบ Guard
- ตรวจสอบ Interceptor
- ตรวจสอบ Logging
- ตรวจสอบ Memory
- ตรวจสอบ CPU
 
Database
 
- ตรวจสอบ Slow Query
- ตรวจสอบ Index
- ตรวจสอบ Query ซ้ำ
- ตรวจสอบ Pagination
- ตรวจสอบ JOIN
- ตรวจสอบ SELECT *
- ตรวจสอบ Connection Pool
 
Redis
 
- วิเคราะห์ว่าจุดใดควรใช้ Redis
- วิเคราะห์ Cache ที่เหมาะสม
- วิเคราะห์ Cache TTL
- วิเคราะห์ Cache Invalidation
- วิเคราะห์ Rate Limiting
- วิเคราะห์ Queue
- ห้ามติดตั้ง Redis หากยังไม่มีเหตุผลที่ชัดเจน
 
ข้อกำหนด
 
- ห้ามเปลี่ยน UI
- ห้ามเปลี่ยน UX
- ห้ามเปลี่ยน Business Logic
- ห้ามลบ Feature
- ห้ามเพิ่ม Library โดยไม่อธิบายเหตุผล
- ต้องแสดงปัญหาและสาเหตุก่อน
- ต้องเสนอแนวทางแก้ก่อนลงมือ
- หลังแก้ให้สรุป Performance ก่อนและหลัง หากสามารถวัดได้`
  },
    {
    id: "06",
    code: "06",
    icon: "🔐",
    category: "Security",
    title: "06. Security",
    subtitle: "ตรวจสอบ Authentication, Authorization, API Security, Injection และ Secrets",
    promptText: `06 — 🔐 SECURITY
อันนี้ผมให้ความสำคัญสูงมาก
ตรวจสอบ Security ของโปรเจกต์ทั้งหมด โดยห้ามเปลี่ยน Business Logic หรือ Authentication Flow โดยไม่ได้รับอนุญาต
 
เริ่มจากการตรวจสอบและวิเคราะห์ก่อน ห้ามแก้ไขทันที
 
Authentication
 
- Login
- Register
- Logout
- Password Hashing
- JWT
- Access Token
- Refresh Token
- Session
- Cookie
- Token Expiration
- OAuth
- Google Login
- GitHub Login
- Password Reset
- Email Verification
 
Authorization
 
- RBAC
- Permission
- Role
- Resource Authorization
- ตรวจสอบว่าผู้ใช้สามารถเข้าถึงข้อมูลของ User คนอื่นได้หรือไม่
 
API Security
 
- CORS
- Rate Limiting
- Input Validation
- DTO Validation
- API Authorization
- Mass Assignment
- Sensitive Data Exposure
- Error Response
- HTTP Security Headers
 
Injection
 
- SQL Injection
- NoSQL Injection
- XSS
- Command Injection
- Path Traversal
 
File Upload
 
- File Type
- File Size
- File Name
- Storage Permission
- Malicious File
- Public URL
 
Secrets
 
- ตรวจสอบ .env
- ตรวจสอบ API Key
- ตรวจสอบ Secret
- ตรวจสอบ Private Key
- ตรวจสอบข้อมูลลับที่อาจหลุดขึ้น Git
- ตรวจสอบ Client-side Exposure
 
Supabase
 
- ตรวจสอบ Row Level Security (RLS)
- ตรวจสอบ Policy
- ตรวจสอบ Table Permission
- ตรวจสอบ Storage Policy
- ตรวจสอบข้อมูลที่ Client สามารถเข้าถึงได้
 
ข้อกำหนด
 
- ห้ามลด Security เพื่อแก้ปัญหาอื่น
- ห้ามปิด Authentication
- ห้ามปิด RLS
- ห้าม Hardcode Secret
- ห้ามเปลี่ยน Business Logic
- วิเคราะห์ระดับความเสี่ยง Critical / High / Medium / Low
- อธิบายช่องโหว่และผลกระทบก่อนแก้
- ต้องเสนอวิธีแก้ก่อนลงมือ`
  },
    {
    id: "07",
    code: "07",
    icon: "🗄️",
    category: "Database",
    title: "07. Database",
    subtitle: "ตรวจสอบ Database Architecture, Query Performance, Data Integrity และ PostgreSQL/Supabase",
    promptText: `07 — 🗄️ DATABASE
ตรวจสอบ Database Architecture และ Query Performance ของโปรเจกต์ทั้งหมด โดยห้ามเปลี่ยน API Contract หรือ Business Logic
 
เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที
 
Schema
 
- ตรวจสอบ Table
- ตรวจสอบ Column
- ตรวจสอบ Data Type
- Primary Key
- Foreign Key
- Unique Constraint
- NOT NULL
- Default Value
- Relationship
- Normalization
- Denormalization
 
Performance
 
- Slow Query
- Index
- Composite Index
- Query ซ้ำ
- N+1 Query
- SELECT *
- JOIN
- ORDER BY
- WHERE
- GROUP BY
- Pagination
- Search
- Filter
 
Data Integrity
 
- Duplicate Data
- Orphan Data
- Constraint
- Transaction
- Race Condition
- Concurrent Update
 
Supabase/PostgreSQL
 
- RLS
- Policy
- Index
- Migration
- Function
- Trigger
- Connection Pool
- Query Plan
 
ตรวจสอบ Query ที่ถูกเรียกบ่อยและระบุว่า Query ใดเป็น Candidate สำหรับ Cache
 
ข้อกำหนด
 
- ห้ามทำลายข้อมูล
- ห้ามแก้ Schema โดยไม่อธิบายผลกระทบ
- ห้ามเปลี่ยน API Contract
- ห้ามเปลี่ยน Business Logic
- Migration ต้องปลอดภัย
- ก่อนเพิ่ม Index ต้องอธิบายผลดีและผลเสีย`
  },
    {
    id: "08",
    code: "08",
    icon: "🧱",
    category: "Architecture",
    title: "08. Code Quality & Architecture",
    subtitle: "ตรวจสอบ Code Quality, Folder Structure, SOLID, DRY, NestJS และ Next.js Architecture",
    promptText: `08 — 🧱 CODE QUALITY / ARCHITECTURE
ตรวจสอบ Code Quality และ Software Architecture ของโปรเจกต์ทั้งหมด โดยห้ามเปลี่ยนพฤติกรรมของระบบ
 
เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที
 
ตรวจสอบ
 
- Folder Structure
- Naming
- Separation of Concerns
- SOLID
- DRY
- Single Responsibility
- Reusable Component
- Duplicate Code
- Dead Code
- Unused Import
- Unused Variable
- Function ที่ยาวเกินไป
- Component ที่ใหญ่เกินไป
- TypeScript any
- Magic Number
- Magic String
- Error Handling
- Dependency
- Circular Dependency
- Coupling
- Cohesion
- Abstraction
- DTO
- Service
- Controller
- Repository
- Module
- Dependency Injection
 
NestJS
 
- Module Structure
- Controller
- Service
- DTO
- Guard
- Interceptor
- Pipe
- Exception Filter
- Dependency Injection
 
Next.js
 
- Server Component
- Client Component
- Component Boundary
- Data Fetching
- State Management
- Shared Component
 
ข้อกำหนด
 
- ห้ามเปลี่ยน Business Logic
- ห้ามเปลี่ยน API Contract
- ห้ามเปลี่ยน Database
- ห้าม Refactor เพียงเพราะ "สวยกว่า"
- ต้องมีเหตุผลทาง Maintainability หรือ Performance
- วิเคราะห์ก่อนแก้
- ระบุ Risk ของ Refactor ทุกครั้ง`
  },
    {
    id: "09",
    code: "09",
    icon: "🧪",
    category: "Testing",
    title: "09. Testing & Quality Assurance",
    subtitle: "ตรวจสอบ Test Coverage, Unit/Integration/E2E Test และ Edge Cases",
    promptText: `09 — 🧪 TESTING
ตรวจสอบ Test Coverage และความสามารถในการทดสอบของโปรเจกต์ โดยห้ามเปลี่ยน Business Logic
 
เริ่มจากการวิเคราะห์ก่อน ห้ามเขียน Test ทันที
 
ตรวจสอบ
 
Unit Test
 
- Business Logic
- Utility
- Function
- Validation
- Calculation
 
Integration Test
 
- API
- Database
- Authentication
- Authorization
- External Service
 
E2E Test
 
- Login
- Register
- Logout
- Main User Flow
- Critical Feature
- Error Flow
 
ตรวจสอบ
 
- Test Coverage
- Edge Case
- Error Case
- Happy Path
- Boundary Case
- Authentication Case
- Authorization Case
- Concurrent Case
- Timeout Case
 
ระบุ Critical User Flow ที่ควรมี E2E Test
 
ข้อกำหนด
 
- ห้ามแก้ Production Logic เพียงเพื่อให้ Test ผ่าน
- ห้าม Mock ทุกอย่างโดยไม่จำเป็น
- Test ต้องตรวจสอบพฤติกรรมจริง
- หากพบ Bug จาก Test ให้รายงานก่อนแก้
- แสดง Coverage ก่อนและหลังหากสามารถวัดได้`
  },
    {
    id: "10",
    code: "10",
    icon: "🛑",
    category: "Error Handling",
    title: "10. Error Handling",
    subtitle: "ตรวจสอบ Error Handling ทั้ง Frontend/Backend, Fallback UI, Logging และ Edge Cases",
    promptText: `10 — 🛑 ERROR HANDLING
ตรวจสอบ Error Handling ของโปรเจกต์ทั้งหมด โดยห้ามเปลี่ยน Business Logic
 
เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที
 
ตรวจสอบ
 
- API Error
- Database Error
- Authentication Error
- Authorization Error
- Validation Error
- Network Error
- Timeout
- External API Error
- File Upload Error
- Payment Error หากมี
- Third-party Service Error
- Redis Error
- Queue Error
 
Frontend
 
- Loading State
- Error State
- Empty State
- Retry
- Toast
- Dialog
- Error Message
- Fallback UI
 
Backend
 
- HTTP Status Code
- Exception Handling
- Global Exception Filter
- Logging
- Sensitive Error Information
- Error Response Format
 
ตรวจสอบว่าระบบไม่แสดง
 
- Stack Trace
- Database Error
- Password
- Token
- API Key
- Internal Architecture
 
ให้ทดสอบกรณี
 
- Internet หลุด
- API ล่ม
- Database ล่ม
- Token หมดอายุ
- Request Timeout
- User กดปุ่มซ้ำ
- Invalid Input
 
ข้อกำหนด
 
- ห้ามซ่อน Error
- ห้ามใช้ 200 OK กับ Error โดยไม่มีเหตุผล
- ห้ามเปิดเผยข้อมูล Sensitive
- วิเคราะห์ก่อนแก้`
  },
    {
    id: "11",
    code: "11",
    icon: "📊",
    category: "Observability",
    title: "11. Observability",
    subtitle: "ตรวจสอบ Logging, Metrics, Tracing และระบบติดตามปัญหาในระดับ Production",
    promptText: `11 — 📊 OBSERVABILITY
นี่คือสิ่งที่ทำให้คุณเริ่มคิดแบบ Production Developer
ตรวจสอบ Observability ของโปรเจกต์ทั้งหมด โดยห้ามเปลี่ยน Business Logic
 
เริ่มจากการวิเคราะห์ก่อน ห้ามติดตั้ง Monitoring Tool ทันที
 
ตรวจสอบ
 
Logging
 
- API Request
- API Response Time
- Error
- Authentication Event
- Database Error
- External API Error
- Queue Error
- Background Job
- Critical Business Event
 
Metrics
 
- Request Count
- Response Time
- Error Rate
- CPU
- Memory
- Database Performance
- Cache Hit Rate
- Queue Length
- Queue Failure
- Active Users หากจำเป็น
 
Tracing
 
- Request → API
- API → Service
- Service → Database
- Service → External API
 
ตรวจสอบว่าหาก User แจ้งว่า
 
"หน้า Dashboard ช้า"
 
เราสามารถระบุได้หรือไม่ว่า
 
Frontend
→ API
→ Service
→ Database
 
ช้าตรงไหน
 
ข้อกำหนด
 
- ห้ามเก็บ Sensitive Data ใน Log
- ห้าม Log Password
- ห้าม Log Token
- ห้าม Log API Key
- ห้ามเพิ่ม Monitoring Library โดยไม่อธิบายเหตุผล
- วิเคราะห์ก่อนติดตั้ง`
  },
    {
    id: "12",
    code: "12",
    icon: "💾",
    category: "Caching",
    title: "12. Cache & Redis Strategy",
    subtitle: "ประเมินและวางแผนการใช้งาน Caching, TTL, Invalidation และ Redis สำหรับระบบ",
    promptText: `12 — 💾 CACHE / REDIS
อันนี้เก็บไว้ใช้ตอนคุณพร้อมเรียน Redis
ตรวจสอบว่าระบบมีส่วนใดที่เหมาะสมกับ Caching หรือ Redis โดยห้ามเพิ่ม Redis ทันที
 
เริ่มจากการวิเคราะห์ก่อน
 
ตรวจสอบ
 
- Query ที่ถูกเรียกบ่อย
- Data ที่เปลี่ยนไม่บ่อย
- API ที่ Response ช้า
- API ที่ถูกเรียกซ้ำ
- Dashboard
- Statistics
- Profile
- Configuration
- Reference Data
- Rate Limiting
- Session
- Background Job
- Queue
 
สำหรับแต่ละ Candidate ให้ระบุ
 
- ข้อมูลอะไรควร Cache
- ทำไมควร Cache
- TTL ที่เหมาะสม
- Cache Key
- Cache Invalidation
- Cache Hit / Miss
- ผลกระทบหาก Cache มีข้อมูลเก่า
- Memory ที่คาดว่าจะใช้
- กรณีที่ไม่ควร Cache
 
Redis
 
- Cache
- Session
- Rate Limiting
- Queue
- BullMQ
- Pub/Sub หากจำเป็น
 
ข้อกำหนด
 
- ห้ามติดตั้ง Redis หากไม่มีเหตุผล
- ห้าม Cache ข้อมูล Sensitive โดยไม่วิเคราะห์
- ห้ามทำให้ข้อมูลไม่ถูกต้องเพราะ Cache
- ต้องออกแบบ Cache Invalidation
- ต้องอธิบาย Trade-off
- ห้ามเปลี่ยน Business Logic`
  },
    {
    id: "13",
    code: "13",
    icon: "🚀",
    category: "DevOps",
    title: "13. Deployment & Production Readiness",
    subtitle: "ตรวจสอบความพร้อมระดับ Production (Environment, Build, Docker, CI/CD และ Rollback)",
    promptText: `13 — 🚀 DEPLOYMENT / PRODUCTION
ตรวจสอบความพร้อมของโปรเจกต์สำหรับ Production โดยห้ามเปลี่ยน Business Logic
 
เริ่มจากการวิเคราะห์ก่อน ห้าม Deploy หรือเปลี่ยน Infrastructure ทันที
 
ตรวจสอบ
 
Environment
 
- Environment Variables
- Development
- Test
- Production
- Secret Management
- API URL
- Database URL
- OAuth Configuration
 
Build
 
- Production Build
- TypeScript
- Lint
- Test
- Bundle
- Environment
 
Security
 
- HTTPS
- CORS
- Cookie
- Security Headers
- Rate Limit
- Secret
 
Database
 
- Migration
- Backup
- Restore
- Connection Pool
- Production Schema
 
Infrastructure
 
- Docker
- Health Check
- Restart Policy
- Logging
- Monitoring
- CPU
- Memory
- Storage
 
CI/CD
 
- Build
- Test
- Deploy
- Migration
- Rollback
 
ตรวจสอบว่าหาก Deployment ครั้งใหม่มีปัญหา สามารถ Rollback ได้หรือไม่
 
ควรมี Health Check เช่น
 
GET /health
 
ข้อกำหนด
 
- ห้าม Deploy จริงโดยไม่ได้รับอนุญาต
- ห้ามลบ Production Data
- ห้ามเปลี่ยน Environment Secret
- ห้ามแก้ Business Logic
- ทุก Infrastructure Change ต้องอธิบายผลกระทบก่อน`
  },
    {
    id: "14",
    code: "14",
    icon: "📈",
    category: "Scalability",
    title: "14. Scalability",
    subtitle: "วิเคราะห์ขีดจำกัด คอขวด (Bottleneck) และแผนการ Scale ตามปริมาณผู้ใช้งาน",
    promptText: `14 — 📈 SCALABILITY
อันนี้เอาไว้ถามว่า
"ถ้าคนใช้เพิ่มขึ้น ระบบจะพังตรงไหน?"
 
ตรวจสอบ Scalability ของโปรเจกต์ทั้งหมด โดยห้ามเปลี่ยน Business Logic
 
เริ่มจากการวิเคราะห์ก่อน ห้ามเพิ่ม Infrastructure ทันที
 
วิเคราะห์ระบบในสถานการณ์
 
- 10 Users
- 100 Users
- 1,000 Users
- 10,000 Users
- 100,000 Users
 
ตรวจสอบ
 
Frontend
 
- Static Asset
- Image
- Video
- CDN
- Bundle Size
 
Backend
 
- CPU
- Memory
- Concurrent Request
- Connection
- API Bottleneck
- Rate Limit
- Stateless Architecture
 
Database
 
- Connection Pool
- Slow Query
- Index
- Read / Write Load
- Lock
- Transaction
- Connection Limit
 
Redis
 
- Cache
- Cache Hit Rate
- Memory
- TTL
- Invalidation
- Rate Limiting
- Queue
 
Queue
 
- Background Job
- Worker
- Retry
- Dead Letter Queue
- Queue Length
 
Infrastructure
 
- Horizontal Scaling
- Vertical Scaling
- Load Balancer
- CDN
- Health Check
- Auto Scaling
 
ให้ระบุ
 
- Current Bottleneck
- Potential Bottleneck
- Maximum Risk
- จุดที่ควร Scale
- จุดที่ยังไม่จำเป็นต้อง Scale
 
ห้ามเพิ่ม Infrastructure เพียงเพราะ "เผื่ออนาคต"
 
ให้เลือกตามข้อมูลและ Traffic ที่คาดการณ์ได้
 
ข้อกำหนด
 
- ห้ามเปลี่ยน Business Logic
- ห้ามเพิ่ม Service โดยไม่มีเหตุผล
- ห้ามใช้ Microservices เพียงเพื่อให้ระบบดูใหญ่
- ต้องอธิบาย Cost / Benefit
- วิเคราะห์ก่อนแก้`
  },
    {
    id: "15",
    code: "15",
    icon: "🛡️",
    category: "Security",
    title: "15. Production Security Review",
    subtitle: "ตรวจสอบความปลอดภัยและช่องโหว่ระดับ Production รอบด้าน 18 มิติ",
    promptText: `15 — 🛡️ PRODUCTION SECURITY REVIEW (18 DIMENSIONS)
ตรวจสอบ Security และช่องโหว่ของโปรเจกต์ทั้งหมดในระดับ Production โดยห้ามเปลี่ยน Business Logic, API Contract หรือ Authentication Flow โดยไม่ได้รับอนุญาต
 
เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที
 
เป้าหมาย
 
ตรวจสอบว่าผู้โจมตีสามารถทำอะไรกับระบบได้บ้าง ไม่ใช่ตรวจเพียงว่า "ระบบทำงานได้หรือไม่"
 
==================================================
1. Authentication
==================================================
 
ตรวจสอบ
 
- Login
- Register
- Logout
- Password Hashing
- Password Policy
- JWT
- Access Token
- Refresh Token
- Token Expiration
- Token Rotation
- Session
- Cookie
- OAuth
- Google Login
- GitHub Login
- Email Verification
- Password Reset
- Account Enumeration
- Brute Force
- Credential Stuffing
 
ทดสอบกรณี
 
- Login ผิดหลายครั้ง
- Token หมดอายุ
- Token ถูกแก้ไข
- Token ถูก Replay
- Refresh Token ถูกนำกลับมาใช้
- User Logout แล้ว Token เดิมยังใช้ได้หรือไม่
 
==================================================
2. Authorization / Access Control
==================================================
 
ตรวจสอบว่า User สามารถเข้าถึงเฉพาะ Resource ที่ตัวเองมีสิทธิ์เท่านั้น
 
ทดสอบ
 
User A → พยายามเข้าถึง → ข้อมูล User B
 
ตรวจสอบ
 
- IDOR
- BOLA
- RBAC
- Permission
- Role
- Admin Endpoint
- Ownership
- Resource Authorization
- API Authorization
 
ห้ามเชื่อเพียง Frontend ว่าซ่อน Button แล้วปลอดภัย ต้องตรวจสอบ Authorization ที่ Backend ด้วย
 
==================================================
3. API Security
==================================================
 
ตรวจสอบ Input Validation, DTO Validation, Rate Limiting, CORS, Security Headers, Sensitive Endpoints
 
==================================================
4. Injection & XSS
==================================================
 
ตรวจสอบ SQLi, NoSQLi, XSS, Command Injection, Path Traversal
 
==================================================
5. CSRF & Sensitive Data Exposure
==================================================
 
ตรวจสอบ HttpOnly, Secure, SameSite Cookie Flags, Sensitive Data In Responses/Logs
 
==================================================
6. Secrets & Environment & RLS
==================================================
 
ตรวจสอบ .env, API Keys, Supabase RLS Policies & Bucket Security
 
==================================================
7. Business Logic & Race Conditions
==================================================
 
ตรวจสอบ Price Tampering, Coupon Replay, Atomic Transactions & Concurrency
 
==================================================
8. Security Testing & Severity Grading
==================================================
 
จัดลำดับ Critical / High / Medium / Low / Informational พร้อม Root Cause และเสนอวิธีแก้ก่อนลงมือ`
  },
    {
    id: "16",
    code: "16",
    icon: "🧩",
    category: "Maintainability",
    title: "16. Maintainability Review",
    subtitle: "ตรวจสอบว่าโค้ดและโปรเจกต์ดูแลต่อในอนาคตได้ง่ายหรือไม่",
    promptText: `16. 🧩 Maintainability Review
เป้าหมาย: ตรวจสอบว่าโค้ดและโปรเจกต์ดูแลต่อในอนาคตได้ง่ายหรือไม่
ตรวจสอบ Maintainability ของโปรเจกต์ทั้งหมด
โดยห้ามเปลี่ยน Business Logic หรือพฤติกรรมของระบบ
โดยไม่ได้รับอนุญาต

เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที

เป้าหมาย

ตรวจสอบว่าโปรเจกต์สามารถดูแล แก้ไข และพัฒนาต่อได้ง่ายหรือไม่
โดยเฉพาะเมื่อมี Developer คนอื่นเข้ามารับช่วงต่อ

ไม่ใช่ตรวจเพียงว่า "โค้ดทำงานได้หรือไม่"

==================================================
1. Code Readability
==================================================

ตรวจสอบ

- Code อ่านเข้าใจง่ายหรือไม่
- Naming ของ Variable
- Naming ของ Function
- Naming ของ Component
- Naming ของ Class
- Naming ของ Method
- Naming ของ File
- Naming ของ Folder
- Function ที่ซับซ้อนเกินไป
- Conditional ที่อ่านยาก
- Nested Code ที่ลึกเกินไป
- Comment ที่ไม่จำเป็น
- Comment ที่ไม่ตรงกับ Code

ตรวจสอบว่า Developer คนอื่นสามารถอ่าน Code
และเข้าใจได้โดยไม่ต้องถามคนเขียนหรือไม่

==================================================
2. Function / Method
==================================================

ตรวจสอบ

- Function ที่ยาวเกินไป
- Function ที่ทำหลายหน้าที่
- Function ที่มี Parameter มากเกินไป
- Function ที่มี Nested Condition มากเกินไป
- Function ที่มี Side Effect
- Function ที่ควรแยกออกเป็น Function ย่อย

ตรวจสอบหลัก Single Responsibility

หนึ่ง Function ควรมีหน้าที่หลักที่ชัดเจน

==================================================
3. Component
==================================================

สำหรับ Frontend ตรวจสอบ

- Component ที่ใหญ่เกินไป
- Component ที่ทำหลายหน้าที่
- Component ที่มี Logic มากเกินไป
- Component ที่ควรแยกเป็น Component ย่อย
- Component ที่ใช้ซ้ำได้แต่ไม่ได้ทำเป็น Reusable Component
- Component ที่มี Props มากเกินไป
- Component ที่มี State มากเกินไป

ห้ามแยก Component เพียงเพื่อให้จำนวนไฟล์เพิ่มขึ้น
ต้องมีเหตุผลด้าน Maintainability หรือ Reusability

==================================================
4. Code Duplication
==================================================

ตรวจสอบ

- Code ที่เขียนซ้ำ
- Function ที่ทำงานเหมือนกัน
- Validation ที่ซ้ำ
- API Logic ที่ซ้ำ
- UI Logic ที่ซ้ำ
- Database Query ที่ซ้ำ
- Utility ที่ซ้ำ

หากพบ Code ซ้ำ

ให้วิเคราะห์ก่อนว่า

- ควรทำเป็น Shared Function หรือไม่
- ควรทำเป็น Utility หรือไม่
- ควรทำเป็น Component หรือไม่
- หรือการแยกออกจะทำให้ Code ซับซ้อนกว่าเดิม

อย่า Refactor Code ซ้ำทุกกรณีโดยอัตโนมัติ

==================================================
5. Folder Structure
==================================================

ตรวจสอบ

- Folder Structure
- Feature Structure
- Module Structure
- Shared Folder
- Component Folder
- Service Folder
- Utility Folder
- DTO
- Types
- Hooks
- Repository

ตรวจสอบว่าไฟล์ถูกจัดอยู่ในตำแหน่งที่เหมาะสมหรือไม่

==================================================
6. Architecture
==================================================

ตรวจสอบ

- Separation of Concerns
- Single Responsibility
- Dependency Direction
- Coupling
- Cohesion
- Abstraction
- Reusability
- Modularity

ตรวจสอบว่า

UI
ไม่ควรรับผิดชอบ Business Logic ทั้งหมด

Controller
ไม่ควรรับผิดชอบ Business Logic ทั้งหมด

Service
ไม่ควรรับผิดชอบทุกอย่าง

Database Logic
ไม่ควรกระจายอยู่ทั่วโปรเจกต์โดยไม่มีโครงสร้าง

==================================================
7. Documentation
==================================================

ตรวจสอบ

- README
- Installation
- Environment Setup
- Development Setup
- Production Setup
- API Documentation
- Database Documentation
- Architecture Documentation
- Authentication Flow
- Deployment Documentation

ตรวจสอบว่า Developer ใหม่สามารถ Clone Project
และเริ่มต้น Project ได้โดยไม่ต้องถามคนเขียนหรือไม่

==================================================
8. Technical Debt
==================================================

ค้นหา

- TODO
- FIXME
- Temporary Code
- Workaround
- Hardcoded Value
- Deprecated Code
- Legacy Code
- Code ที่รู้ว่ามีปัญหาแต่ยังไม่ได้แก้

จัดลำดับ

Critical
High
Medium
Low

==================================================
ข้อกำหนดสำคัญ
==================================================

- ห้าม Rewrite โปรเจกต์
- ห้ามเปลี่ยน Business Logic
- ห้ามเปลี่ยน API Contract
- ห้ามเปลี่ยน Database โดยไม่ได้รับอนุญาต
- ห้ามแยก File หรือ Component โดยไม่มีเหตุผล
- ห้ามเพิ่ม Abstraction ที่ไม่จำเป็น
- ต้องแสดง Root Cause
- ต้องอธิบายผลกระทบ
- ต้องเสนอแนวทางแก้ก่อน
- ต้องรอการอนุมัติจากผมก่อนแก้ไข

หลังแก้เสร็จให้สรุป

Before
↓
ปัญหา
↓
เหตุผล
↓
การแก้ไข
↓
After
↓
ผลต่อ Maintainability`
  },
    {
    id: "17",
    code: "17",
    icon: "🧪",
    category: "QA",
    title: "17. Edge Case / Boundary Case Review",
    subtitle: "ตรวจสอบ Edge Case และ Boundary Case ของโปรเจกต์ทั้งหมด",
    promptText: `17. 🧪 Edge Case / Boundary Case Review
ตรวจสอบ Edge Case และ Boundary Case ของโปรเจกต์ทั้งหมด
โดยห้ามเปลี่ยน Business Logic โดยไม่ได้รับอนุญาต

เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที

เป้าหมาย

ตรวจสอบระบบในสถานการณ์ที่ผิดปกติ
หรืออยู่นอกกรณีใช้งานปกติ

ไม่ใช่ทดสอบเฉพาะ Happy Path

==================================================
1. Input
==================================================

ตรวจสอบ

- Empty
- Null
- Undefined
- 0
- Negative Number
- Decimal
- String แทน Number
- Number แทน String
- Boolean ผิดประเภท
- String ยาวเกินไป
- Array ว่าง
- Array ขนาดใหญ่
- Object ว่าง
- Missing Field
- Extra Field

==================================================
2. Boundary
==================================================

ตรวจสอบ

- Minimum Value
- Maximum Value
- Minimum Length
- Maximum Length
- 0
- 1
- Maximum
- Maximum + 1
- วันที่ในอดีต
- วันที่ปัจจุบัน
- วันที่อนาคต

==================================================
3. Authentication
==================================================

ทดสอบ

- Login ผิด
- Password ผิด
- Email ไม่ถูกต้อง
- Account ไม่มีอยู่
- Account ถูก Disable
- Token หมดอายุ
- Token ไม่ถูกต้อง
- Logout แล้วใช้ Token เดิม
- Login พร้อมกันหลาย Device

==================================================
4. API
==================================================

ทดสอบ

- Request ซ้ำ
- Request พร้อมกัน
- Request ไม่มี Authorization
- Request ไม่มี Body
- Request Body ผิด Type
- Request ใหญ่เกินไป
- Endpoint ไม่มีอยู่
- HTTP Method ผิด

==================================================
5. Database
==================================================

ตรวจสอบ

- Data ไม่พบ
- Duplicate Data
- Foreign Key ไม่พบ
- Concurrent Update
- Transaction Failure
- Database Timeout
- Database Connection Failure

==================================================
6. User Flow
==================================================

จำลอง

- User กดย้อนกลับ
- User Refresh หน้า
- User เปิดหลาย Tab
- User ปิด Browser
- User Internet หลุด
- User กด Button ซ้ำ
- User Submit Form ซ้ำ
- User ใช้งาน Session หมดอายุ

==================================================
ข้อกำหนด

- ห้ามแก้ Business Logic เพียงเพื่อให้ Edge Case ผ่าน
- ต้องแยกว่าเป็น Bug หรือ Expected Behavior
- ต้องระบุ Impact
- ต้องระบุวิธีแก้
- ต้องรอการอนุมัติก่อนแก้ไข

หลังแก้ให้สรุป

Test Case
↓
ผลลัพธ์เดิม
↓
ปัญหา
↓
การแก้ไข
↓
ผลลัพธ์ใหม่`
  },
    {
    id: "18",
    code: "18",
    icon: "🔄",
    category: "Data Flow",
    title: "18. Data Flow Review",
    subtitle: "ตรวจสอบการเดินทางของข้อมูลตั้งแต่ Frontend → Backend → Database",
    promptText: `18. 🔄 Data Flow Review
ตรวจสอบ Data Flow ของโปรเจกต์ทั้งหมด
โดยห้ามเปลี่ยน Architecture หรือ Business Logic
โดยไม่ได้รับอนุญาต

เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที

เป้าหมาย

ทำความเข้าใจว่า Data เดินทางจาก User
ผ่าน Frontend → Backend → Database
และกลับมายัง User อย่างไร

==================================================
1. Frontend
==================================================

ตรวจสอบ

User Input
↓
Component
↓
State
↓
Hook
↓
API Client
↓
Request

ตรวจสอบว่า

- Data ถูก Validate หรือไม่
- Data ถูก Transform ที่ไหน
- Data ถูกเก็บใน State ที่ไหน
- มีการส่ง Data ซ้ำหรือไม่

==================================================
2. Backend
==================================================

ตรวจสอบ

Request
↓
Middleware
↓
Guard
↓
Pipe
↓
Controller
↓
Service
↓
Repository / ORM
↓
Database

ตรวจสอบว่าแต่ละ Layer มีหน้าที่อะไร

==================================================
3. Database
==================================================

ตรวจสอบ

- Data ถูกเก็บที่ไหน
- Relationship
- Foreign Key
- Transaction
- Query
- Index
- Data Transformation

==================================================
4. Response Flow
==================================================

ตรวจสอบ

Database
↓
Service
↓
Controller
↓
API Response
↓
Frontend
↓
UI

ตรวจสอบว่า Response มีข้อมูลเกินความจำเป็นหรือไม่

==================================================
5. Data Security
==================================================

ตรวจสอบ

- Sensitive Data
- Password
- Token
- Internal ID
- Personal Data
- Admin Data

ตรวจสอบว่า Data ถูกส่งไปยัง Client
โดยไม่จำเป็นหรือไม่

==================================================
6. Data Duplication
==================================================

ตรวจสอบ

- Data ถูก Fetch ซ้ำ
- Data ถูก Store ซ้ำ
- Data ถูก Transform ซ้ำ
- API ถูกเรียกซ้ำ
- Database Query ซ้ำ

==================================================
ข้อกำหนด

- ห้ามเปลี่ยน API Contract
- ห้ามเปลี่ยน Database Schema
- ห้ามเปลี่ยน Business Logic
- ต้องแสดง Data Flow ปัจจุบัน
- ต้องระบุจุดที่เป็น Bottleneck
- ต้องระบุจุดที่เกิด Data Duplication
- ต้องเสนอแนวทางก่อนแก้
- ต้องรอการอนุมัติ`
  },
    {
    id: "19",
    code: "19",
    icon: "🧠",
    category: "State",
    title: "19. State Management Review",
    subtitle: "ตรวจสอบการจัดการ State (Local, Global, Server, Form, URL, Cache) ทั้งระบบ",
    promptText: `19. 🧠 State Management Review
ตรวจสอบ State Management ของโปรเจกต์ทั้งหมด
โดยห้ามเปลี่ยน Business Logic หรือ UX

เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที

==================================================
1. State ที่ใช้งาน
==================================================

ตรวจสอบ

- Local State
- Global State
- Server State
- Form State
- URL State
- Cache State
- Session State
- Authentication State

==================================================
2. State Location
==================================================

สำหรับแต่ละ State ให้ตรวจสอบว่า

- State อยู่ถูก Component หรือไม่
- State ควรอยู่ Local หรือ Global
- State ถูกส่งผ่าน Props มากเกินไปหรือไม่
- มี Prop Drilling หรือไม่
- มี Global State ที่ไม่จำเป็นหรือไม่

==================================================
3. State Duplication
==================================================

ตรวจสอบ

- State เดียวกันถูกเก็บหลายที่หรือไม่
- Server Data ถูกเก็บซ้ำใน Client State หรือไม่
- Cache และ State ไม่ตรงกันหรือไม่
- State เก่าไม่ถูก Update หรือไม่

==================================================
4. Loading / Error State
==================================================

ตรวจสอบ

- Loading
- Error
- Empty
- Success
- Refetch
- Retry
- Stale Data

==================================================
5. React / Next.js
==================================================

ตรวจสอบ

- useState
- useReducer
- Context
- Server Component
- Client Component
- Server State
- Data Fetching
- Hydration

ตรวจสอบว่ามี State ที่ควรเป็น Server Data
แต่ถูกจัดการเป็น Client State โดยไม่จำเป็นหรือไม่

==================================================
ข้อกำหนด

- ห้ามเปลี่ยน UX
- ห้ามเปลี่ยน Business Logic
- ห้ามเพิ่ม State Management Library โดยไม่จำเป็น
- ห้ามย้าย State เพียงเพื่อให้ Code ดูสวย
- ต้องอธิบายผลกระทบก่อนแก้
- ต้องรอการอนุมัติ`
  },
    {
    id: "20",
    code: "20",
    icon: "🔌",
    category: "API",
    title: "20. API Design Review",
    subtitle: "ตรวจสอบ Endpoints, Requests, Responses, Status Codes, Security, Performance & Docs",
    promptText: `20. 🔌 API Design Review
ตรวจสอบ API Design ของโปรเจกต์ทั้งหมด
โดยห้ามเปลี่ยน API Contract โดยไม่ได้รับอนุญาต

เริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที

==================================================
1. Endpoint
==================================================

ตรวจสอบ

- Naming
- URL Structure
- HTTP Method
- REST Convention
- Resource Naming
- Nested Resource
- Versioning

==================================================
2. Request
==================================================

ตรวจสอบ

- Params
- Query
- Body
- Header
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
- Data
- Message
- Metadata
- Pagination
- Error Format

ตรวจสอบว่า API Response
มีข้อมูลมากเกินความจำเป็นหรือไม่

==================================================
4. HTTP Status Code
==================================================

ตรวจสอบ

- 200
- 201
- 204
- 400
- 401
- 403
- 404
- 409
- 422
- 429
- 500

ตรวจสอบว่า Status Code
ตรงกับสถานการณ์จริงหรือไม่

==================================================
5. Security
==================================================

ตรวจสอบ

- Authentication
- Authorization
- Rate Limit
- Input Validation
- Sensitive Data
- Admin Endpoint
- IDOR / BOLA

==================================================
6. API Performance
==================================================

ตรวจสอบ

- Duplicate Request
- N+1 Request
- Large Response
- Pagination
- Caching
- Compression

==================================================
7. Documentation
==================================================

ตรวจสอบ

- Swagger
- OpenAPI
- Request Example
- Response Example
- Error Example
- Authentication Documentation

==================================================
ข้อกำหนด

- ห้ามเปลี่ยน API Contract ทันที
- ต้องระบุ Breaking Change หากมี
- ห้ามเปลี่ยน Endpoint โดยไม่มีเหตุผล
- ห้ามเปลี่ยน Response โดยไม่แจ้งผลกระทบ
- ต้องเสนอแนวทางก่อนแก้
- ต้องรอการอนุมัติ`
  }
];

// Combined 41 Cards
export const MASTER_41_CARDS = [...CARDS_PART1, ...MASTER_CARDS_PART2];
