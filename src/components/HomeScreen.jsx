import React from 'react'
import { MASTER_41_CARDS } from '../data/checklistData'
import { MOBILE_CARDS } from '../data/mobileData'

const OPTIONS = [
  {
    key: 'web',
    icon: '🌐',
    title: 'Web Checklist',
    desc: 'Checklist สำหรับตรวจโปรเจกต์เว็บ แบ่งเป็นด้านต่าง ๆ พร้อม Prompt พร้อมใช้',
    count: MASTER_41_CARDS.length,
    tone: 'tone-web',
  },
  {
    key: 'mobile',
    icon: '📱',
    title: 'Mobile / Flutter Checklist',
    desc: 'Checklist สำหรับตรวจโปรเจกต์ Flutter แบ่งเป็นด้านต่าง ๆ พร้อม Prompt พร้อมใช้',
    count: MOBILE_CARDS.length,
    tone: 'tone-mobile',
  },
]

export default function HomeScreen({ onSelect }) {
  return (
    <main className="cards-scroll-container">
      <div className="cards-wrapper-grid-layout">
        <div className="home-intro">
          <h2 className="home-title">เลือกชุด Checklist ที่ต้องการ</h2>
          <p className="home-subtitle">กดเข้าไปเพื่อดูรายการและรายละเอียดข้างใน</p>
        </div>

        <div className="home-grid">
          {OPTIONS.map((o) => (
            <button key={o.key} className={`home-tile ${o.tone}`} onClick={() => onSelect(o.key)}>
              <span className="home-tile-icon">{o.icon}</span>
              <span className="home-tile-title">{o.title}</span>
              <span className="home-tile-desc">{o.desc}</span>
              <span className="home-tile-foot">
                <span className="home-tile-count">{o.count} รายการ</span>
                <span className="home-tile-go">เข้าดู ➔</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
