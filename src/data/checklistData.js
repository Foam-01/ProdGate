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
