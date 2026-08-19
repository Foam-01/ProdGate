import React, { useState, useEffect } from 'react'
import { MASTER_INTRO } from '../data/checklistData'

export default function DetailModal({ card, isOpen, onClose, includeRulesDefault }) {
  const [includeRules, setIncludeRules] = useState(includeRulesDefault)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setIncludeRules(includeRulesDefault)
  }, [includeRulesDefault, card])

  if (!isOpen || !card) return null

  const fullTextToCopy = includeRules
    ? `${card.promptText}\n\n${MASTER_INTRO.rulesText}`
    : card.promptText

  const handleCopy = () => {
    navigator.clipboard.writeText(fullTextToCopy).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-code-badge">ข้อ {card.code}</span>
            <span className="modal-icon">{card.icon}</span>
            <div>
              <h2 className="modal-heading">{card.title}</h2>
              <p className="modal-subheading">{card.subtitle}</p>
            </div>
          </div>

          <button className="close-btn" onClick={onClose} title="ปิด (Esc)">
            ✕
          </button>
        </div>

        {/* Modal Controls Bar - Single Copy Button Here */}
        <div className="modal-controls-bar">
          <label className="toggle-switch-label">
            <span>แนบกฎการทำงาน 24 ข้อต่อท้าย</span>
            <div
              className={`toggle-switch ${includeRules ? 'active' : ''}`}
              onClick={() => setIncludeRules(!includeRules)}
            >
              <div className="toggle-switch-circle"></div>
            </div>
          </label>

          <button
            className={`btn ${copied ? 'btn-success' : 'btn-primary'}`}
            onClick={handleCopy}
          >
            <span>📋</span>
            <span>{copied ? 'คัดลอกเรียบร้อย!' : 'Copy Prompt'}</span>
          </button>
        </div>

        {/* Modal Body: Prompt Display */}
        <div className="modal-prompt-body">
          <pre className="prompt-text-content">
            {fullTextToCopy}
          </pre>
        </div>

        {/* Modal Footer: Status Only (No duplicate copy button) */}
        <div className="modal-footer">
          <span className="footer-status">
            {copied ? '✅ คัดลอกลง Clipboard เรียบร้อยแล้ว' : includeRules ? '📌 แนบกฎการทำงาน 24 ข้อต่อท้ายแล้ว' : '📄 เฉพาะคำสั่งของข้อนี้'}
          </span>
        </div>
      </div>
    </div>
  )
}
