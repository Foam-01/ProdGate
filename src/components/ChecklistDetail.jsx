import React, { useState } from 'react'
import { GENERAL_RULES_FORMATTED_TEXT } from '../data/checklistData'

export default function ChecklistDetail({
  category,
  checkedState,
  onToggleItem,
  onToggleAllInCategory
}) {
  const [includeRules, setIncludeRules] = useState(true)
  const [copied, setCopied] = useState(false)

  if (!category) {
    return (
      <div className="main-view" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>เลือกหมวดหมู่ทางด้านซ้ายเพื่อดูรายละเอียด Checklist และ Prompt</p>
      </div>
    )
  }

  const items = category.items || []
  const checkedCount = items.filter(item => checkedState[item.id]).length
  const isAllChecked = items.length > 0 && checkedCount === items.length
  const percent = items.length > 0 ? Math.round((checkedCount / items.length) * 100) : 0

  // Combine Prompt with General Rules if toggled
  const fullPromptText = includeRules
    ? `${category.prompt}\n\n${GENERAL_RULES_FORMATTED_TEXT}`
    : category.prompt

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(fullPromptText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <div className="main-view">
      {/* Category Overview Banner */}
      <div className="overview-banner">
        <div className="banner-header">
          <div className="category-code-tag">
            <span>{category.code}</span>
            <span>•</span>
            <span>{category.badge}</span>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            ID: {category.id}
          </span>
        </div>

        <h2 className="banner-title">
          <span>{category.icon}</span>
          <span>{category.code}. {category.title}</span>
        </h2>

        <p className="banner-subtitle">{category.subtitle}</p>

        {category.objective && (
          <div className="banner-meta">
            <div className="meta-chip">
              <span style={{ color: 'var(--accent-cyan)' }}>🎯 เป้าหมาย:</span>
              <span>{category.objective}</span>
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="progress-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            className="btn btn-secondary"
            style={{ padding: '4px 10px', fontSize: '0.8rem' }}
            onClick={() => onToggleAllInCategory(category.id, !isAllChecked)}
          >
            {isAllChecked ? 'ยกเลิกการเลือกทั้งหมด' : 'เลือกทั้งหมดในหมวดนี้'}
          </button>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${percent}%` }}></div>
        </div>
        <div className="progress-text">
          {checkedCount} / {items.length} ตรวจสอบแล้ว ({percent}%)
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="detail-grid">
        {/* Left Column: Interactive Checkpoints */}
        <div className="card">
          <div className="card-title">
            <span>📋 รายการตรวจสอบ ({items.length} ข้อ)</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)' }}>
              {checkedCount} เสร็จสิ้น
            </span>
          </div>

          <div className="checklist-items-container">
            {items.map((item) => {
              const isChecked = !!checkedState[item.id]

              return (
                <div
                  key={item.id}
                  className={`checklist-item ${isChecked ? 'checked' : ''}`}
                  onClick={() => onToggleItem(item.id)}
                >
                  <div className="custom-checkbox">
                    {isChecked && '✓'}
                  </div>
                  <span className="item-id-badge">{item.id}</span>
                  <span className="item-text">{item.text}</span>
                </div>
              )
            })}
          </div>

          {/* Guidelines & Constraints Info */}
          {category.constraints && (
            <div style={{
              marginTop: '12px',
              padding: '12px',
              background: 'rgba(244, 63, 94, 0.08)',
              border: '1px solid rgba(244, 63, 94, 0.2)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.8rem'
            }}>
              <strong style={{ color: 'var(--accent-rose)', display: 'block', marginBottom: '4px' }}>
                ⚠️ ข้อกำหนดสำคัญ:
              </strong>
              <ul style={{ paddingLeft: '16px', color: 'var(--text-secondary)' }}>
                {category.constraints.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column: AI Review Prompt Card */}
        <div className="prompt-card">
          <div className="prompt-card-header">
            <div className="prompt-card-title">
              <span>📝 Prompt สำเร็จรูป</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>
                (พร้อมคัดลอกส่งให้ AI)
              </span>
            </div>

            <div className="prompt-actions">
              <label className="toggle-switch-label">
                <span>แนบกฎ 24 ข้อ</span>
                <div
                  className={`toggle-switch ${includeRules ? 'active' : ''}`}
                  onClick={() => setIncludeRules(!includeRules)}
                >
                  <div className="toggle-switch-circle"></div>
                </div>
              </label>
            </div>
          </div>

          {/* Code View */}
          <pre className="prompt-code-block">
            {fullPromptText}
          </pre>

          {/* Prompt Footer & Copy Button */}
          <div className="prompt-card-footer">
            <div>
              {copied ? (
                <span className="prompt-copied-toast">
                  <span>✅</span>
                  <span>คัดลอก Prompt เรียบร้อยแล้ว!</span>
                </span>
              ) : (
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {includeRules ? 'รวมกฎการทำงาน 24 ข้อต่อท้ายแล้ว' : 'ส่งเฉพาะ Prompt ของหมวดนี้'}
                </span>
              )}
            </div>

            <button className="btn btn-primary" onClick={handleCopyPrompt}>
              <span>📋</span>
              <span>{copied ? 'คัดลอกแล้ว' : 'Copy Prompt'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
