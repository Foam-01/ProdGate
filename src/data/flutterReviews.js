// Flutter review prompts, same structure as the web cards:
// goal -> check list -> "analyze first, do not edit" -> requirements.

const COMMON_RULES = [
  'ต้องเปิดดูโค้ดจริงก่อนสรุปทุกข้อ ห้ามเดาจากชื่อไฟล์ ชื่อคลาส หรือชื่อฟังก์ชัน และทุกข้อสรุปต้องมี Evidence (ไฟล์ / ฟังก์ชัน / บรรทัด)',
  'ถ้าหาโค้ดที่เกี่ยวข้องไม่พบ ให้บอกว่า NOT FOUND ห้ามสร้างข้อมูลขึ้นมาเอง',
  'ห้ามเปลี่ยน Business Logic, API Contract และห้ามลบ Feature โดยไม่ได้รับอนุญาต',
  'ห้าม Rewrite หรือเปลี่ยน Architecture / State Management / เพิ่ม Library เพียงเพราะเป็น Best Practice ต้องมี Evidence ว่ามีปัญหาจริง',
  'ผลตรวจแต่ละข้อแยกเป็น PASS / ISSUE / WARNING / N/A / NEEDS MORE EVIDENCE',
  'แต่ละ Issue ต้องระบุ Root Cause, Impact, ระดับความเสี่ยง Critical / High / Medium / Low',
  'ต้องเสนอวิธีแก้อย่างน้อย 1 วิธี พร้อมข้อดี ข้อเสีย และ Risk ของการแก้ไข',
  'ต้องระบุไฟล์ที่จะแก้ และเสนอแผนก่อนลงมือ รอการอนุมัติจากผมก่อนแก้',
  'ถ้าไม่พบปัญหา ให้บอกว่า "ไม่พบปัญหา" และถ้าไม่จำเป็นต้องแก้ ให้บอกว่า "ไม่จำเป็นต้องแก้"',
  'ถ้าพบ Issue ที่ไม่อยู่ในรายการตรวจ ให้ตรวจและรายงานเพิ่มด้วย',
]

const section = ([name, items]) => `${name}\n\n${items.map((i) => `- ${i}`).join('\n')}`

function review({ code, icon, category, title, subtitle, goal, topic, constraint, sections, extra = [] }) {
  const header = `F${code} — ${icon} ${title.toUpperCase()}`
  const rules = [...extra, ...COMMON_RULES].map((r) => `- ${r}`).join('\n')
  return {
    id: `f-${code}`,
    code,
    badge: `FLUTTER ${code}`,
    group: 'review',
    icon,
    category,
    title: `F${code}. ${title}`,
    subtitle,
    promptText: [
      header,
      `เป้าหมาย\n\n${goal}`,
      `ตรวจสอบ${topic}ของแอป Flutter ทั้งหมด โดย${constraint}`,
      'เริ่มจากการตรวจสอบและวิเคราะห์ก่อน ห้ามแก้ไขทันที',
      sections.map(section).join('\n\n'),
      `ข้อกำหนด\n\n${rules}`,
    ].join('\n\n'),
  }
}

export const FLUTTER_REVIEW_CARDS = [
  review({
    code: '01', icon: '✍️', category: 'Copywriting', title: 'UI Text / Copywriting',
    subtitle: 'ตรวจข้อความทุกจุดบนหน้าจอ ปุ่ม Error Empty Loading Dialog ฯลฯ',
    goal: 'ทำให้ข้อความในแอปเป็นธรรมชาติ กระชับ และเหมือน Product จริง ไม่ใช่ข้อความที่ AI สร้างขึ้น',
    topic: ' UI Text และ Copywriting', constraint: 'ห้ามเปลี่ยนโครงสร้าง UI และฟังก์ชันการทำงาน',
    sections: [
      ['หน้าจอและองค์ประกอบ', ['Screen Text', 'Button', 'AppBar', 'Navigation', 'Heading', 'Placeholder', 'Label', 'Tooltip']],
      ['สถานะและข้อความแจ้ง', ['Error', 'Success', 'Empty', 'Loading', 'Dialog', 'Bottom Sheet', 'Snackbar', 'Toast', 'Notification', 'Permission', 'Offline', 'Session Expired', 'API Error']],
      ['หน้าที่ต้องตรวจ', ['Login', 'Register', 'Forgot Password', 'Profile', 'Settings']],
      ['มุมมองที่ต้องตรวจ', ['ไทย / อังกฤษ ปนกันอย่างสม่ำเสมอหรือไม่', 'ศัพท์เทคนิคที่ผู้ใช้ไม่เข้าใจ', 'ข้อความที่ฟังดูเป็น AI', 'ความยาวเกินจำเป็น (Verbosity)', 'อ่านง่ายบนจอมือถือ', 'ชัดเจนว่าผู้ใช้ต้องทำอะไรต่อ', 'ข้อความ Error บอกวิธีแก้หรือไม่ (Error Recovery)', 'ข้อความ Hardcode ในโค้ดที่ควรแยกไปไฟล์ข้อความ']],
    ],
  }),
  review({
    code: '02', icon: '🎨', category: 'Design System', title: 'Design System / UI Consistency',
    subtitle: 'Typography สี Spacing Component Theme Dark/Light Mode',
    goal: 'ให้ UI ของทั้งแอปใช้ภาษาดีไซน์เดียวกัน ไม่มี Style กระจัดกระจาย',
    topic: ' Design System และความสม่ำเสมอของ UI', constraint: 'ห้ามเปลี่ยน Layout หลักและฟังก์ชันการทำงาน',
    sections: [
      ['Foundation', ['Typography', 'Color', 'Spacing', 'Radius', 'Elevation', 'Icon', 'ThemeData / ColorScheme', 'ค่า Hardcode (สี / ขนาด / Padding) ที่ควรอยู่ใน Theme']],
      ['Component', ['Button', 'Input', 'Card', 'Dialog', 'Bottom Sheet', 'Component Consistency', 'Widget ที่ทำซ้ำหลายที่ควรแยกเป็น Component กลาง']],
      ['Theme', ['Dark Mode', 'Light Mode', 'การสลับ Theme', 'Contrast ในทั้งสองโหมด']],
    ],
  }),
  review({
    code: '03', icon: '🧭', category: 'UX', title: 'Mobile UX / User Flow',
    subtitle: 'Navigation, Back, Deep Link, Offline, App Resume, App Kill',
    goal: 'ให้ผู้ใช้ใช้งานแอปได้ลื่น เข้าใจ และไม่ติดขัดในทุก Flow',
    topic: ' UX และ User Flow', constraint: 'ห้ามลบ Feature และห้ามเปลี่ยน Flow ธุรกิจโดยไม่ได้รับอนุญาต',
    sections: [
      ['Navigation', ['Navigation', 'Back (ปุ่ม Back / Swipe Back)', 'Deep Link']],
      ['สถานะของหน้าจอ', ['Loading', 'Empty', 'Error', 'Success']],
      ['การโต้ตอบ', ['Keyboard', 'Gesture', 'Swipe', 'Refresh', 'Dialog', 'Bottom Sheet']],
      ['สถานการณ์พิเศษ', ['Offline', 'Permission', 'App Resume', 'App Kill (เปิดแอปใหม่แล้วกลับมาที่เดิมได้หรือไม่)']],
    ],
  }),
  review({
    code: '04', icon: '📐', category: 'Responsive', title: 'Responsive / Adaptive UI',
    subtitle: 'จอเล็ก/ใหญ่ Tablet แนวตั้ง/นอน Safe Area Dynamic Text',
    goal: 'ให้แอปแสดงผลถูกต้องในทุกขนาดหน้าจอและทุกการตั้งค่าของผู้ใช้',
    topic: ' Responsive และ Adaptive UI', constraint: 'ห้ามเปลี่ยนดีไซน์หลักและฟังก์ชันการทำงาน',
    sections: [
      ['ขนาดและทิศทางหน้าจอ', ['Small Screen', 'Large Screen', 'Tablet', 'Portrait', 'Landscape', 'Foldable / Large Layout']],
      ['พื้นที่ระบบ', ['Safe Area', 'Notch', 'Status Bar', 'Navigation Bar', 'Keyboard (ไม่บังช่องกรอก)']],
      ['การตั้งค่าผู้ใช้', ['Dynamic Text', 'Accessibility Font (ขยายตัวอักษร)']],
      ['Overflow', ['RenderFlex Overflow', 'ค่า Fixed Width / Height ที่อาจทำให้พัง', 'ใช้ LayoutBuilder / MediaQuery / Flexible อย่างเหมาะสมหรือไม่']],
    ],
  }),
  review({
    code: '05', icon: '🚀', category: 'Performance', title: 'Mobile Performance',
    subtitle: 'Startup, FPS, Jank, Rebuild, List, Memory, Battery, App Size',
    goal: 'หาคอขวดด้านประสิทธิภาพของแอปจากการวัดจริง ไม่ใช่การเดา',
    topic: ' Performance', constraint: 'ห้ามเปลี่ยนพฤติกรรมของระบบ และห้ามลบ Feature เพื่อให้เร็วขึ้น',
    sections: [
      ['Startup', ['Cold Start', 'Warm Start', 'First Screen']],
      ['Rendering', ['FPS', 'Jank', 'Frame Drop', 'Widget Rebuild', 'Build Cost', 'Rendering', 'Animation', 'Large Widget Tree']],
      ['List และข้อมูลจำนวนมาก', ['Large List', 'Grid', 'Sliver', 'Pagination', 'Lazy Loading']],
      ['Network และข้อมูล', ['API Time', 'Request Count', 'Payload', 'Database']],
      ['ทรัพยากร', ['Memory', 'CPU', 'Battery', 'App Size', 'Asset Size']],
    ],
    extra: [
      'ต้องวัดก่อนเสนอ Optimization (Flutter DevTools / Profile Mode) ถ้าวัดไม่ได้ให้บอกว่า Not Measured ห้ามสร้างตัวเลขเอง',
      'ห้ามเริ่มด้วยการเพิ่ม Cache / Isolate / Library ต้องหา Bottleneck ก่อน',
    ],
  }),
  review({
    code: '06', icon: '🔐', category: 'Security', title: 'Mobile Security',
    subtitle: 'Auth, Token, Secure Storage, HTTPS, Pinning, WebView, Logs',
    goal: 'หาช่องโหว่ด้านความปลอดภัยของแอปมือถือ อันนี้ให้ความสำคัญสูงมาก',
    topic: ' Security', constraint: 'ห้ามเปลี่ยน Business Logic หรือ Authentication Flow โดยไม่ได้รับอนุญาต',
    sections: [
      ['Authentication / Authorization', ['Authentication', 'Authorization', 'Token', 'Refresh Token']],
      ['ข้อมูลลับ', ['Secure Storage', 'API Key', 'Secret (ตรวจว่าไม่ถูก Hardcode หรือหลุดขึ้น Git)', 'Sensitive Data']],
      ['การสื่อสาร', ['HTTPS', 'TLS', 'Certificate', 'Certificate Pinning']],
      ['พื้นผิวโจมตี', ['Deep Link', 'WebView', 'Clipboard', 'Screenshot', 'File Access', 'Permission']],
      ['Build และ Log', ['Logs (ไม่มีข้อมูลสำคัญ)', 'Crash Report (ไม่มีข้อมูลสำคัญ)', 'Debug Build', 'Reverse Engineering / Obfuscation']],
    ],
    extra: ['ห้ามลด Security เพื่อแก้ปัญหาอื่น และห้าม Hardcode Secret', 'ห้ามสร้าง Security Finding โดยไม่มี Evidence'],
  }),
  review({
    code: '07', icon: '💾', category: 'Local Data', title: 'Local Data / Storage',
    subtitle: 'SQLite, Isar, Hive, SharedPreferences, Migration, Corruption',
    goal: 'ให้ข้อมูลในเครื่องถูกเก็บ อ่าน และอัปเกรดอย่างถูกต้องและปลอดภัย',
    topic: ' Local Data และ Storage', constraint: 'ห้ามเปลี่ยน Schema หรือโครงสร้างข้อมูลโดยไม่ได้รับอนุญาต',
    sections: [
      ['ชนิดที่ใช้', ['SQLite', 'Isar', 'Hive', 'SharedPreferences', 'Secure Storage', 'File', 'Cache']],
      ['โครงสร้างและการใช้งาน', ['Schema', 'Migration', 'Query', 'Index', 'Serialization', 'Write และ Read ใช้ Key / Database / Schema Version เดียวกันหรือไม่']],
      ['ความเสี่ยง', ['Storage Size', 'Corruption', 'Sensitive Data (เก็บถูกที่หรือไม่)']],
    ],
  }),
  review({
    code: '08', icon: '🏪', category: 'Production', title: 'Production / Store Readiness',
    subtitle: 'Android, iOS และ Store: Signing, Version, Privacy, Data Safety',
    goal: 'ตรวจว่าแอปพร้อมปล่อยขึ้น Google Play และ App Store',
    topic: ' Production และ Store Readiness', constraint: 'ห้ามเปลี่ยน Package Name / Bundle ID / Signing โดยไม่ได้รับอนุญาต',
    sections: [
      ['Android', ['Release Build', 'AAB', 'Signing', 'Keystore', 'Package Name', 'Target SDK', 'Permission', 'Version Code', 'ProGuard / R8']],
      ['iOS', ['Release Build', 'Bundle ID', 'Certificate', 'Provisioning Profile', 'Signing', 'Version', 'Build Number']],
      ['Store', ['Icon', 'Screenshot', 'Description', 'Privacy Policy', 'Data Safety', 'Age Rating', 'Permission Description', 'Account Deletion', 'Crash', 'Analytics', 'Release Notes']],
    ],
    extra: ['ห้ามเปิดเผยหรือ Commit Keystore / Certificate / รหัสผ่านใดๆ'],
  }),
  review({
    code: '09', icon: '🧱', category: 'Architecture', title: 'Code Quality & Architecture',
    subtitle: 'โครงสร้างโฟลเดอร์ การแบ่ง Layer ขนาด Widget Lint Null Safety',
    goal: 'ให้โค้ด Flutter อ่านง่าย แยกหน้าที่ชัด และดูแลต่อได้',
    topic: ' Code Quality และ Architecture', constraint: 'ห้ามเปลี่ยนพฤติกรรมของระบบ และห้าม Rewrite โครงสร้างทั้งหมด',
    sections: [
      ['โครงสร้าง', ['โครงสร้างโฟลเดอร์ (feature-first / layer-first)', 'การแบ่ง Presentation / Domain / Data', 'Dependency ข้าม Layer ที่ไม่ควรมี', 'Dependency Injection']],
      ['Widget', ['Widget ใหญ่เกินไป (build ยาว)', 'Logic ปนอยู่ใน UI', 'ใช้ const Constructor', 'Key ที่เหมาะสม']],
      ['คุณภาพโค้ด', ['Naming', 'Duplicate Code', 'Dead Code', 'Magic Number / Hardcode', 'Null Safety (ใช้ ! โดยไม่จำเป็น)', 'analysis_options.yaml / Lint', 'dart format']],
    ],
  }),
  review({
    code: '10', icon: '🧪', category: 'Testing', title: 'Testing & QA',
    subtitle: 'Unit, Widget, Golden, Integration Test, Mock, Coverage',
    goal: 'ให้มั่นใจว่าแอปมีการทดสอบที่ป้องกัน Regression ได้จริง',
    topic: ' Testing และ Quality Assurance', constraint: 'ห้ามแก้ Logic ของแอปเพื่อให้ Test ผ่าน',
    sections: [
      ['ประเภท Test', ['Unit Test', 'Widget Test', 'Golden Test', 'Integration Test (integration_test)', 'End-to-End']],
      ['คุณภาพ Test', ['Test Coverage ของ Logic สำคัญ (Auth, Payment, Data)', 'Mock / Fake ที่ใช้', 'Test ที่ Flaky', 'Edge Case และ Error Case', 'Test ที่ไม่ได้ Assert อะไรจริง']],
      ['กระบวนการ', ['CI รัน Test อัตโนมัติ', 'Test Data / Fixture', 'วิธีรัน Test บนเครื่องและบน CI']],
    ],
  }),
  review({
    code: '11', icon: '🚨', category: 'Error Handling', title: 'Error Handling & Crash Reporting',
    subtitle: 'try/catch, Exception, Global Error, Crashlytics, ข้อความ Error',
    goal: 'ให้แอปจัดการข้อผิดพลาดอย่างปลอดภัย ไม่ค้าง ไม่ Crash และบอกผู้ใช้ได้เหมาะสม',
    topic: ' Error Handling', constraint: 'ห้ามกลืน Error เงียบๆ และห้ามเปลี่ยน Business Logic',
    sections: [
      ['ระดับโค้ด', ['try / catch ครอบคลุมหรือไม่', 'catch แล้วไม่ทำอะไร (Swallow Error)', 'Custom Exception / Failure', 'async / await ที่ไม่มี Error Path', 'Loading ที่อาจค้างเมื่อเกิด Exception']],
      ['ระดับแอป', ['FlutterError.onError', 'PlatformDispatcher.onError / runZonedGuarded', 'Error Widget / หน้าจอ Fallback']],
      ['ผู้ใช้', ['ข้อความ Error ที่เข้าใจได้', 'ปุ่ม Retry / ทางกลับ', 'Timeout', 'No Internet']],
    ],
  }),
  review({
    code: '12', icon: '📊', category: 'Observability', title: 'Observability (Logging / Analytics / Crash)',
    subtitle: 'Logging, Crashlytics/Sentry, Analytics, Performance Monitoring',
    goal: 'ให้รู้ได้ว่าแอปมีปัญหาอะไรบนเครื่องผู้ใช้จริงโดยไม่รั่วข้อมูลสำคัญ',
    topic: ' Observability', constraint: 'ห้ามเพิ่ม SDK ติดตามผู้ใช้โดยไม่ได้รับอนุญาต',
    sections: [
      ['Logging', ['ใช้ print / debugPrint ปนใน Release หรือไม่', 'Log Level', 'ข้อมูลสำคัญหลุดใน Log (Token, Password, PII)']],
      ['Crash / Monitoring', ['Crashlytics / Sentry', 'Non-fatal Error Reporting', 'Performance Monitoring', 'Release / Version / User Context ที่แนบไปกับ Crash']],
      ['Analytics', ['Event ที่สำคัญของ Flow หลัก', 'Naming ของ Event', 'Consent / Privacy']],
    ],
  }),
  review({
    code: '13', icon: '🧵', category: 'State', title: 'State Management',
    subtitle: 'Bloc / Riverpod / Provider / GetX: Owner, Rebuild, Dispose, Race',
    goal: 'ให้ State ของแอปถูกต้อง คาดเดาได้ และไม่ทำให้ Rebuild เกินจำเป็น',
    topic: ' State Management', constraint: 'ห้ามเปลี่ยน State Management Library และห้ามเปลี่ยนพฤติกรรมของ Feature',
    sections: [
      ['Ownership', ['ใครเป็นเจ้าของ State แต่ละตัว', 'State ซ้ำซ้อน (Duplicate State)', 'Derived State ที่ควรคำนวณแทนเก็บ']],
      ['การอัปเดต', ['State Update Timing', 'Immutable State', 'Rebuild เกินจำเป็น (Selector / Consumer / BlocBuilder)', 'Race Condition จาก async หลายตัว']],
      ['Lifecycle', ['dispose Controller / Stream / Subscription', 'State ค้างหลังออกจากหน้า', 'การใช้ context หลัง await (mounted)']],
    ],
  }),
  review({
    code: '14', icon: '🗺️', category: 'Navigation', title: 'Navigation / Routing / Deep Link',
    subtitle: 'go_router / Navigator, Route Guard, Back Stack, Deep Link',
    goal: 'ให้การเปลี่ยนหน้าถูกต้องและปลอดภัยในทุกสถานะของผู้ใช้',
    topic: ' Navigation และ Routing', constraint: 'ห้ามเปลี่ยนโครงสร้างเส้นทางหลักโดยไม่ได้รับอนุญาต',
    sections: [
      ['Routing', ['การประกาศ Route', 'Named Route / Path Parameter', 'ส่งข้อมูลระหว่างหน้า (Type Safety)', 'Route ที่ไม่มีอยู่ (404)']],
      ['Guard และ Back Stack', ['Auth Guard / Redirect', 'Back Stack หลัง Login / Logout', 'ปุ่ม Back ของ Android', 'Navigation หลัง async (context.mounted)']],
      ['Deep Link', ['Android App Links / iOS Universal Links', 'Validate Parameter จาก Deep Link', 'Deep Link ตอนยังไม่ Login']],
    ],
  }),
  review({
    code: '15', icon: '🌐', category: 'API', title: 'API Integration',
    subtitle: 'Dio/http, Interceptor, Timeout, Retry, JSON Parsing, Contract',
    goal: 'ให้การเรียก API ถูกต้อง ตรงตาม Contract และรับมือข้อผิดพลาดได้',
    topic: ' การเชื่อมต่อ API', constraint: 'ห้ามเปลี่ยน API Contract และห้ามเปลี่ยน Endpoint โดยไม่ได้รับอนุญาต',
    sections: [
      ['Request', ['Base URL (มาจาก Config ที่ถูกต้อง)', 'HTTP Method', 'Header / Authorization', 'Request Body / Content-Type', 'Query / Path Parameter']],
      ['Response', ['Status Code Handling', 'JSON Parsing / DTO / Model', 'Nullable และ Field ที่ไม่ตรง Contract', 'Error Response ของ Backend']],
      ['ความทนทาน', ['Timeout', 'Retry / Backoff', 'Interceptor (Token Refresh / Logging)', 'Cancel Request เมื่อออกจากหน้า', 'Duplicate Request']],
    ],
    extra: ['ต้องเทียบ Flutter Request กับ Backend Contract ถ้ามีเอกสารหรือโค้ดฝั่ง Backend และระบุจุดที่ไม่ตรงกัน'],
  }),
  review({
    code: '16', icon: '🔀', category: 'Data Flow', title: 'Data Flow',
    subtitle: 'API/Local → Repository → State → Widget → UI',
    goal: 'ให้รู้ว่าข้อมูลไหลจากต้นทางถึงหน้าจออย่างไร และผิดเพี้ยนตรงไหน',
    topic: ' Data Flow', constraint: 'ห้ามเปลี่ยนพฤติกรรมของระบบ',
    sections: [
      ['เส้นทางข้อมูล', ['API / Local Data', 'Repository', 'State', 'State Update', 'Widget Rebuild', 'UI']],
      ['จุดเสี่ยง', ['การแปลงข้อมูล (Mapping / Parsing) หลายจุด', 'ข้อมูลซ้ำหรือไม่ตรงกันระหว่าง Layer', 'Source of Truth มีหลายที่', 'Cache ที่ล้าสมัย']],
    ],
  }),
  review({
    code: '17', icon: '📝', category: 'Forms', title: 'Forms & Validation',
    subtitle: 'Form, Validator, Input Formatter, Keyboard, Submit State',
    goal: 'ให้การกรอกและส่งฟอร์มถูกต้อง ปลอดภัย และใช้งานง่าย',
    topic: ' Forms และ Validation', constraint: 'ห้ามเปลี่ยนกฎธุรกิจของ Validation โดยไม่ได้รับอนุญาต',
    sections: [
      ['Validation', ['Validator ครบทุกช่อง', 'Trim / Normalize ข้อมูล', 'ข้อความ Error ชัดเจน', 'Validate ซ้ำฝั่ง Backend']],
      ['การใช้งาน', ['Keyboard Type / Input Action', 'Input Formatter', 'Focus / Next Field', 'Autofill', 'ซ่อน/แสดงรหัสผ่าน']],
      ['การส่ง', ['ป้องกันกดซ้ำ (Double Submit)', 'Loading / Disabled State', 'เก็บค่าในฟอร์มเมื่อเกิด Error', 'Dispose TextEditingController']],
    ],
  }),
  review({
    code: '18', icon: '📴', category: 'Offline', title: 'Offline / Sync / Cache Strategy',
    subtitle: 'ใช้งานตอนไม่มีเน็ต Sync Conflict Cache และ Retry',
    goal: 'ให้แอปทำงานอย่างสมเหตุสมผลเมื่อเน็ตไม่ดีหรือไม่มีเน็ต',
    topic: ' Offline, Sync และ Cache', constraint: 'ห้ามเพิ่ม Infrastructure หรือ Library ใหม่จนกว่าจะมีเหตุผลรองรับ',
    sections: [
      ['Offline', ['ตรวจสถานะเครือข่าย', 'หน้าจอที่ใช้ได้/ไม่ได้เมื่อ Offline', 'ข้อความแจ้งผู้ใช้', 'Queue การส่งข้อมูลที่ค้าง']],
      ['Cache', ['อะไรถูก Cache / ที่ไหน', 'อายุ Cache / Invalidate', 'Cache โตไม่จำกัดหรือไม่']],
      ['Sync', ['Conflict Resolution', 'Sync ซ้ำ / ตกหล่น', 'Retry เมื่อกลับมาออนไลน์']],
    ],
  }),
  review({
    code: '19', icon: '🔔', category: 'Notification', title: 'Push Notification',
    subtitle: 'FCM/APNs, Permission, Token, Foreground/Background, Tap Handling',
    goal: 'ให้การแจ้งเตือนทำงานครบทุกสถานะของแอปและเคารพการตั้งค่าผู้ใช้',
    topic: ' Push Notification', constraint: 'ห้ามเปลี่ยน Payload Contract กับ Backend โดยไม่ได้รับอนุญาต',
    sections: [
      ['การตั้งค่า', ['FCM / APNs Configuration', 'Permission Request (Android 13+ / iOS)', 'Notification Channel (Android)', 'ไอคอนและเสียง']],
      ['Token', ['การขอและส่ง Token ไป Backend', 'Token Refresh', 'ลบ Token ตอน Logout']],
      ['พฤติกรรม', ['Foreground', 'Background', 'Terminated', 'Tap แล้วไปหน้าที่ถูกต้อง (Deep Link)', 'Denied / Permanently Denied']],
    ],
  }),
  review({
    code: '20', icon: '📦', category: 'Dependency', title: 'Dependency / Package Review',
    subtitle: 'pubspec.yaml, เวอร์ชัน, Package ที่เลิกดูแล, License, Platform Support',
    goal: 'ให้ Package ที่ใช้มีเหตุผล ปลอดภัย และไม่ทำให้ Build พัง',
    topic: ' Dependency และ Package', constraint: 'ห้ามเพิ่ม ลบ หรืออัปเกรด Package โดยไม่ได้รับอนุญาต',
    sections: [
      ['pubspec.yaml', ['เวอร์ชันที่ Lock / ช่วงเวอร์ชัน', 'Package ที่ไม่ได้ใช้', 'Package ที่ซ้ำหน้าที่', 'dependency_overrides', 'dev_dependencies ปนใน dependencies']],
      ['สุขภาพของ Package', ['เลิกดูแล (Discontinued / ไม่อัปเดตนาน)', 'Null Safety / Dart 3', 'License', 'ผลต่อขนาดแอป', 'รองรับ Android / iOS / Platform ที่ใช้']],
      ['ความปลอดภัย', ['Package ที่มีช่องโหว่ที่ทราบ', 'Package ที่ขอ Permission เกินจำเป็น']],
    ],
  }),
  review({
    code: '21', icon: '🏗️', category: 'Build', title: 'Build Config / Flavors / Environment',
    subtitle: 'dev/staging/prod, .env, dart-define, Gradle, Xcode, CI/CD',
    goal: 'ให้ Build ของแต่ละ Environment ใช้ค่าถูกต้องและทำซ้ำได้',
    topic: ' Build Configuration', constraint: 'ห้ามเปลี่ยนค่า Production หรือ Signing โดยไม่ได้รับอนุญาต',
    sections: [
      ['Environment', ['Development / Staging / Production', 'Flavor / Scheme', '.env / --dart-define', 'Base URL ต่อ Environment', 'ค่า Default และ Override']],
      ['Native Build', ['build.gradle / Gradle Version', 'AndroidManifest', 'Info.plist', 'Podfile / Xcode Configuration', 'minSdk / Deployment Target']],
      ['CI/CD', ['Pipeline Build และ Test', 'การเก็บ Secret ใน CI', 'Version / Build Number อัตโนมัติ', 'Reproducible Build']],
    ],
    extra: ['ห้ามแสดงค่า Secret จริงในรายงาน'],
  }),
  review({
    code: '22', icon: '🔌', category: 'Platform', title: 'Platform Integration (Android / iOS)',
    subtitle: 'Platform Channel, Plugin, Native Code, Permission ต่างแพลตฟอร์ม',
    goal: 'ให้ฟีเจอร์ที่พึ่ง Native ทำงานถูกต้องทั้ง Android และ iOS',
    topic: ' Platform Integration', constraint: 'ห้ามเปลี่ยนพฤติกรรมของ Feature บนแพลตฟอร์มใดแพลตฟอร์มหนึ่งโดยไม่ได้รับอนุญาต',
    sections: [
      ['Native', ['Platform Channel (MethodChannel / EventChannel)', 'Native Code (Kotlin / Swift)', 'Plugin Version กับ OS Version']],
      ['Permission และ Config', ['Permission ใน AndroidManifest / Info.plist ครบหรือไม่', 'Runtime Permission Flow แยกตามแพลตฟอร์ม', 'Background Mode / Capability']],
      ['ความต่างของแพลตฟอร์ม', ['พฤติกรรมที่ต่างกัน Android vs iOS', 'OS Version เก่า', 'Device เฉพาะรุ่น']],
    ],
  }),
  review({
    code: '23', icon: '♿', category: 'Accessibility', title: 'Accessibility',
    subtitle: 'Semantics, Screen Reader, Contrast, Touch Target, Font Scaling',
    goal: 'ให้ผู้ใช้ทุกกลุ่มใช้แอปได้',
    topic: ' Accessibility', constraint: 'ห้ามเปลี่ยนดีไซน์หลักโดยไม่จำเป็น',
    sections: [
      ['Screen Reader', ['Semantics Label', 'TalkBack / VoiceOver', 'ลำดับการโฟกัส', 'รูปภาพที่มีความหมายมี Description']],
      ['การมองเห็น', ['Color Contrast', 'ไม่ใช้สีอย่างเดียวสื่อความหมาย', 'Font Scaling / Dynamic Text', 'Dark Mode']],
      ['การสัมผัส', ['Touch Target ขนาดขั้นต่ำ', 'ระยะห่างปุ่ม', 'Gesture ที่ต้องมีทางเลือกอื่น']],
    ],
  }),
  review({
    code: '24', icon: '🌏', category: 'Localization', title: 'Localization / i18n',
    subtitle: 'ARB/intl, ภาษาไทย-อังกฤษ, รูปแบบวันที่ ตัวเลข สกุลเงิน',
    goal: 'ให้แอปรองรับหลายภาษาและรูปแบบท้องถิ่นได้ถูกต้อง',
    topic: ' Localization', constraint: 'ห้ามเปลี่ยนความหมายของข้อความเดิม',
    sections: [
      ['ข้อความ', ['ข้อความ Hardcode ที่ยังไม่แยก', 'ไฟล์ ARB / intl', 'Plural / Gender', 'ข้อความที่ต่อ String เอง']],
      ['รูปแบบท้องถิ่น', ['วันที่ / เวลา / ปีพุทธศักราช', 'ตัวเลข / สกุลเงิน', 'Locale Fallback', 'การเปลี่ยนภาษาตอนใช้งาน']],
      ['Layout', ['ข้อความยาวขึ้นแล้ว Overflow', 'ฟอนต์รองรับภาษาไทย', 'RTL (ถ้าจำเป็น)']],
    ],
  }),
  review({
    code: '25', icon: '🧩', category: 'Edge Case', title: 'Edge Case / Boundary Case',
    subtitle: 'ค่าว่าง ค่ามากสุด เน็ตหลุด กดรัว หมุนจอ ขัดจังหวะ',
    goal: 'ค้นหากรณีสุดโต่งที่ทำให้แอปพังหรือแสดงผลผิด',
    topic: ' Edge Case และ Boundary Case', constraint: 'ห้ามเปลี่ยน Business Logic โดยไม่ได้รับอนุญาต',
    sections: [
      ['ข้อมูล', ['null / ว่าง / List ว่าง', 'ข้อความยาวมาก / อักขระพิเศษ / Emoji', 'ตัวเลขติดลบ / ศูนย์ / ใหญ่มาก', 'วันที่และ Timezone ขอบเขต']],
      ['พฤติกรรมผู้ใช้', ['กดซ้ำรัวๆ', 'ย้อนกลับกลางการโหลด', 'หมุนหน้าจอระหว่างทำรายการ', 'สลับแอปแล้วกลับมา']],
      ['ระบบ', ['เน็ตหลุดกลางคัน', 'Permission ถูกเพิกถอน', 'พื้นที่เก็บข้อมูลเต็ม', 'ระบบฆ่าแอปใน Background']],
    ],
  }),
  review({
    code: '26', icon: '🧮', category: 'Business Logic', title: 'Business Logic',
    subtitle: 'กฎธุรกิจ การคำนวณ เงื่อนไข สิทธิ์ ในฝั่งแอป',
    goal: 'ตรวจว่ากฎธุรกิจในแอปถูกต้องและไม่กระจายหรือซ้ำซ้อน',
    topic: ' Business Logic', constraint: 'ห้ามแก้ Business Logic เอง ให้รายงานและรออนุมัติ',
    sections: [
      ['ความถูกต้อง', ['การคำนวณ (ราคา ส่วนลด ภาษี ปัดเศษ)', 'เงื่อนไข / สถานะ / State Machine', 'สิทธิ์การใช้งานตาม Role']],
      ['ตำแหน่งของ Logic', ['Logic ปนอยู่ใน Widget', 'Logic ซ้ำหลายที่', 'Logic ที่ควรอยู่ฝั่ง Backend']],
      ['การเปลี่ยนแปลง', ['จุดที่แก้ได้ยาก / เสี่ยงพัง', 'ผลกระทบข้าม Feature']],
    ],
    extra: ['ต้องถามผมเมื่อกฎธุรกิจไม่ชัดเจน ห้ามเดาเอง'],
  }),
  review({
    code: '27', icon: '🔄', category: 'Lifecycle', title: 'App Lifecycle & Background',
    subtitle: 'Resume/Pause/Kill, Background Task, Timer, Stream, Isolate',
    goal: 'ให้แอปทำงานถูกต้องเมื่อถูกพักหรือกลับมา และไม่กินทรัพยากรโดยไม่จำเป็น',
    topic: ' App Lifecycle และงานเบื้องหลัง', constraint: 'ห้ามเปลี่ยนพฤติกรรมของ Feature',
    sections: [
      ['Lifecycle', ['WidgetsBindingObserver / AppLifecycleState', 'Resume แล้วรีเฟรชข้อมูลหรือ Token', 'Pause แล้วหยุดงานที่ไม่จำเป็น', 'Cold Start จาก Notification / Deep Link']],
      ['งานเบื้องหลัง', ['Timer / Periodic Task', 'Stream / Subscription ที่ไม่ Cancel', 'Isolate / compute', 'Background Fetch / Workmanager']],
      ['ทรัพยากร', ['Polling ที่ถี่เกิน', 'Location / GPS ที่เปิดค้าง', 'ผลต่อ Battery']],
    ],
  }),
  review({
    code: '28', icon: '🔋', category: 'Resources', title: 'Resource Efficiency (Memory / Battery / App Size)',
    subtitle: 'Memory Leak, Battery Drain, ขนาดแอป, Asset และ Image',
    goal: 'ให้แอปประหยัดหน่วยความจำ แบตเตอรี่ และพื้นที่ติดตั้ง',
    topic: ' การใช้ทรัพยากร', constraint: 'ห้ามลบ Feature เพื่อประหยัดทรัพยากร',
    sections: [
      ['Memory', ['Controller / Stream / Listener ที่ไม่ Dispose', 'Image ขนาดใหญ่ / Decode ใหญ่กว่าที่แสดง', 'List ใหญ่ / Cache โตไม่จำกัด', 'WebView / Animation']],
      ['Battery', ['Location / GPS', 'Polling / Timer', 'Background Task / Sync', 'Animation ที่รันตลอด']],
      ['App Size', ['Asset / Font / Image ที่ไม่ได้ใช้', 'Package ที่ใหญ่', 'การ Split ABI / Deferred Components', 'Tree Shaking / Obfuscation']],
    ],
    extra: ['ต้องวัดก่อนเสนอ ถ้าวัดไม่ได้ให้บอกว่า Not Measured ห้ามสร้างตัวเลขเอง'],
  }),
  review({
    code: '29', icon: '🛡️', category: 'Reliability', title: 'Reliability / Backup / Data Recovery',
    subtitle: 'ข้อมูลหาย แอปพัง Backup ของผู้ใช้ และการกู้คืน',
    goal: 'ให้แอปไม่ทำข้อมูลผู้ใช้หาย และกู้คืนได้เมื่อเกิดปัญหา',
    topic: ' Reliability และ Data Recovery', constraint: 'ห้ามเพิ่ม Infrastructure ใหม่จนกว่าจะมีเหตุผลรองรับ',
    sections: [
      ['ความทนทาน', ['จุดที่ข้อมูลอาจหายเมื่อแอปถูกปิดกลางคัน', 'Transaction / การเขียนข้อมูลแบบ Atomic', 'ข้อมูล Draft ที่ยังไม่ส่ง']],
      ['การกู้คืน', ['Backup (Android Auto Backup / iCloud)', 'การย้ายเครื่อง / ติดตั้งใหม่', 'การกู้คืนเมื่อฐานข้อมูลเสีย']],
      ['การอัปเดต', ['Migration ข้ามหลายเวอร์ชัน', 'Force Update / Version Gate', 'Rollback ที่ทำได้']],
    ],
  }),
  review({
    code: '30', icon: '🔑', category: 'Auth', title: 'Authentication & Session',
    subtitle: 'Login → Token → Secure Storage → Refresh → Logout ครบทุก Layer',
    goal: 'ตรวจระบบ Login และ Session แบบ End-to-End ไม่ใช่แค่ API ตอบ 200',
    topic: ' Authentication และ Session', constraint: 'ห้ามเปลี่ยน Authentication Flow โดยไม่ได้รับอนุญาต',
    sections: [
      ['Login', ['Input / Validation', 'Login Function', 'API Endpoint / Method / Header / Body', 'Base URL และ Environment', 'Response Parsing']],
      ['Token และ Session', ['Access Token', 'Refresh Token / Token Expiration', 'Secure Storage (เก็บ อ่าน ลบ)', 'Authorization Header ในทุก Request', 'Unauthorized (401) Handling', 'Session Expiry']],
      ['State และ Navigation', ['Auth State', 'Navigation Guard / Redirect', 'Logout (ล้าง Token / State / Cache)', 'Auto Login ตอนเปิดแอป']],
    ],
    extra: ['ต้อง Trace: Input → Validation → Request → Response → Token → Storage → State → Navigation และห้ามสรุปว่า Login ถูกต้องเพียงเพราะ API ตอบ HTTP 200'],
  }),
  review({
    code: '31', icon: '🧠', category: 'Architecture', title: 'Architecture & Technology Recommendation',
    subtitle: 'Architecture ปัจจุบัน ข้อจำกัด และเมื่อไหร่ควรเปลี่ยน พร้อม Trade-off',
    goal: 'ประเมิน Architecture และ Technology ของแอปด้วย Evidence ไม่ใช่ความชอบ',
    topic: ' Architecture และ Technology', constraint: 'ห้ามเสนอเปลี่ยน Architecture / Framework / Database เพียงเพราะโค้ดไม่สวย',
    sections: [
      ['ปัจจุบัน', ['Architecture ที่ใช้อยู่', 'State Management / Navigation / Network / Storage ที่เลือก', 'เหตุผลที่น่าจะเลือก']],
      ['การประเมิน', ['ปัญหาจริงที่เกิดขึ้น (มี Evidence)', 'ข้อจำกัดของ Design ปัจจุบัน', 'ทางเลือกอื่น', 'Trade-off ของแต่ละทาง', 'ต้นทุนการเปลี่ยน / Risk']],
      ['ADR', ['ถ้าเสนอเปลี่ยน ให้เขียน ADR: Context, Decision, Alternatives, Consequence, Revisit Condition']],
    ],
    extra: ['ห้ามสร้าง ADR ให้เรื่องเล็กๆ ใช้เฉพาะ Decision ที่กระทบ Architecture'],
  }),
  review({
    code: '32', icon: '📚', category: 'Maintainability', title: 'Maintainability / Documentation / DX',
    subtitle: 'README, วิธีรัน, Comment, Onboarding, ความง่ายในการดูแลต่อ',
    goal: 'ให้คนใหม่เข้ามารัน ทำความเข้าใจ และแก้โค้ดได้โดยไม่ต้องถามบ่อย',
    topic: ' Maintainability, Documentation และ Developer Experience', constraint: 'ห้ามเปลี่ยนพฤติกรรมของแอป',
    sections: [
      ['เอกสาร', ['README (ติดตั้ง รัน Build ต่อ Environment)', 'เอกสาร Architecture / โครงสร้างโฟลเดอร์', 'เอกสาร API ที่ใช้', 'Comment ที่อธิบาย "ทำไม" ในจุดซับซ้อน']],
      ['Developer Experience', ['ขั้นตอน Setup ครั้งแรก', 'Script / Makefile ที่ช่วยงาน', 'Lint / Format / Pre-commit', 'Hot Reload ใช้ได้ปกติ']],
      ['การดูแลต่อ', ['จุดที่ Coupling สูง', 'Technical Debt ที่เสี่ยง', 'Version ของ Flutter / Dart ที่ล็อกไว้ (fvm / .tool-versions)']],
    ],
  }),
]
