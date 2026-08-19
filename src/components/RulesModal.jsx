import React, { useState } from 'react'
import { GENERAL_RULES, AI_PROMPT_FRAMING, GENERAL_RULES_FORMATTED_TEXT } from '../data/checklistData'

export default function RulesModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handleCopyRules = () => {
    navigator.clipboard.writeText(GENERAL_RULES_FORMATTED_TEXT).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <span>🧠</span>
            <span>กฎการทำงาน 24 ข้อ & วิธีสั่ง AI แบบ Senior Developer</span>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {/* Section 1: AI Prompt Framing Guide (What to say vs What not to say) */}
          <div style={{
            background: 'rgba(99, 102, 241, 0.08)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            borderRadius: 'var(--radius-lg)',
            padding: '18px'
          }}>
            <h3 style={{ fontSize: '1.05rem', color: 'var(--accent-indigo)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>⭐</span>
              <span>เทคนิคการใช้คำสั่งเปลี่ยน AI จาก "คนเขียนโค้ด" → "Senior Code Reviewer"</span>
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
              เวลาสั่งงาน AI อย่าใช้คำสั่งลอยๆ ที่เปิดโอกาสให้มันรื้อระบบทั้งหมดโดยไม่จำเป็น ให้ใช้คำสั่งแบบล็อกขอบเขต (Constraint-based prompting) ดังนี้:
            </p>

            <table className="framing-table">
              <thead>
                <tr>
                  <th>อย่าพูดแบบนี้ ❌</th>
                  <th>ให้พูดแบบนี้แทน ✅</th>
                  <th>ประโยชน์ที่ได้รับ</th>
                </tr>
              </thead>
              <tbody>
                {AI_PROMPT_FRAMING.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <span className="dont-tag">"{item.dont}"</span>
                    </td>
                    <td>
                      <span className="do-tag">"{item.do}"</span>
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>{item.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 2: The 24 Master Working Rules */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>📜</span>
                <span>กฎการทำงาน 24 ข้อ (Master Rules)</span>
              </h3>

              <button className="btn btn-outline-cyan" onClick={handleCopyRules}>
                <span>📋</span>
                <span>{copied ? 'คัดลอกแล้ว!' : 'คัดลอกเฉพาะกฎ 24 ข้อ'}</span>
              </button>
            </div>

            <div className="rules-grid">
              {GENERAL_RULES.map((rule, idx) => (
                <div key={idx} className="rule-card">
                  <span className="rule-number">#{String(idx + 1).padStart(2, '0')}</span>
                  <span>{rule.replace(/^\d+\.\s*/, '')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
