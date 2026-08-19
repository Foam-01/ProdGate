import React, { useState } from 'react'
import { GENERAL_RULES_FORMATTED_TEXT } from '../data/checklistData'

export default function PromptBuilderModal({ isOpen, onClose, categories }) {
  const [selectedItems, setSelectedItems] = useState({})
  const [includeRules, setIncludeRules] = useState(true)
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handleToggleItem = (itemId) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  // Gather selected items
  const selectedList = []
  categories.forEach(cat => {
    cat.items.forEach(item => {
      if (selectedItems[item.id]) {
        selectedList.push({
          categoryTitle: cat.title,
          categoryCode: cat.code,
          ...item
        })
      }
    })
  })

  // Format custom prompt text
  let generatedPrompt = `ตรวจสอบโค้ดโปรเจกต์นี้ในหัวข้อเฉพาะเจาะจงต่อไปนี้ โดยห้ามเปลี่ยน Business Logic หรือ API Contract โดยไม่ได้รับอนุญาต\n\nเริ่มจากการวิเคราะห์ก่อน ห้ามแก้ไขทันที\n\nหัวข้อที่ต้องตรวจสอบ:\n`

  if (selectedList.length === 0) {
    generatedPrompt += `(โปรดเลือกหัวข้อที่ต้องการตรวจสอบด้านล่าง)\n`
  } else {
    selectedList.forEach(item => {
      generatedPrompt += `- [${item.categoryCode}] ${item.id}: ${item.text}\n`
    })
  }

  if (includeRules) {
    generatedPrompt += `\n${GENERAL_RULES_FORMATTED_TEXT}`
  }

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <span>⚡</span>
            <span>Custom Prompt Builder (สร้าง Prompt รวมเฉพาะจุด)</span>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            เลือกข้อที่ต้องการตรวจเช็กข้ามหลายหมวดหมู่ เพื่อสร้าง Prompt สั่ง AI เพียงครั้งเดียว
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Left Column: Item Selector */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.2)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '16px',
              maxHeight: '440px',
              overflowY: 'auto'
            }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', marginBottom: '12px' }}>
                1. ติ๊กเลือกหัวข้อที่ต้องการตรวจ ({selectedList.length} ข้อที่เลือก)
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {categories.map(cat => (
                  <div key={cat.id}>
                    <div style={{
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '6px'
                    }}>
                      {cat.icon} {cat.code}. {cat.title}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {cat.items.map(item => {
                        const isSelected = !!selectedItems[item.id]

                        return (
                          <div
                            key={item.id}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '6px 10px',
                              background: isSelected ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                              border: '1px solid',
                              borderColor: isSelected ? 'rgba(56, 189, 248, 0.3)' : 'transparent',
                              borderRadius: 'var(--radius-md)',
                              fontSize: '0.825rem',
                              cursor: 'pointer'
                            }}
                            onClick={() => handleToggleItem(item.id)}
                          >
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => {}}
                              style={{ accentColor: 'var(--accent-cyan)' }}
                            />
                            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.75rem' }}>
                              {item.id}
                            </span>
                            <span style={{ color: 'var(--text-primary)' }}>{item.text}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Output Prompt Preview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)' }}>
                  2. Prompt รวมที่สร้างขึ้น
                </h4>
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

              <pre className="prompt-code-block" style={{ flex: 1, maxHeight: '340px' }}>
                {generatedPrompt}
              </pre>

              <button
                className="btn btn-primary"
                onClick={handleCopyPrompt}
                disabled={selectedList.length === 0}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>📋</span>
                <span>{copied ? 'คัดลอก Custom Prompt เรียบร้อย!' : 'Copy Generated Prompt'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
