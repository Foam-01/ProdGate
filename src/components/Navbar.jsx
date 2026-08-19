import React from 'react'

export default function Navbar({
  searchQuery,
  setSearchQuery,
  onOpenRules,
  onOpenPromptBuilder,
  totalChecked,
  totalItemsCount
}) {
  const percent = totalItemsCount > 0 ? Math.round((totalChecked / totalItemsCount) * 100) : 0

  return (
    <header className="navbar">
      <div className="nav-brand" onClick={() => setSearchQuery('')}>
        <div className="nav-logo-icon">📋</div>
        <div>
          <h1 className="nav-title">Developer Checklist</h1>
          <p className="nav-subtitle">AI Code Review Master</p>
        </div>
      </div>

      <div className="nav-center">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="ค้นหา Checklist, Naming, Security, DB, Prompt..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="nav-actions">
        <button
          className="btn btn-outline-cyan"
          onClick={onOpenRules}
          title="กฎการทำงาน 24 ข้อสำหรับสั่ง AI"
        >
          <span>🧠</span>
          <span>กฎ 24 ข้อ</span>
        </button>

        <button
          className="btn btn-primary"
          onClick={onOpenPromptBuilder}
          title="สร้าง Custom Prompt เฉพาะจุด"
        >
          <span>⚡</span>
          <span>Prompt Builder</span>
        </button>

        <div className="progress-chip" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 12px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '999px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-mono)'
        }}>
          <span style={{ color: 'var(--accent-emerald)' }}>✓</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
            {totalChecked}/{totalItemsCount}
          </span>
          <span style={{ color: 'var(--text-muted)' }}>({percent}%)</span>
        </div>
      </div>
    </header>
  )
}
