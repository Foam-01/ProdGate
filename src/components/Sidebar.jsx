import React from 'react'

export default function Sidebar({
  categories,
  selectedCategoryId,
  onSelectCategory,
  checkedState
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">
          <span>📋 Checklist Modules</span>
          <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
            {categories.length} ด้าน
          </span>
        </div>
      </div>

      <ul className="sidebar-nav-list">
        {categories.map((cat) => {
          const isActive = cat.id === selectedCategoryId
          const totalItems = cat.items.length
          const checkedCount = cat.items.filter(item => checkedState[item.id]).length

          return (
            <li key={cat.id}>
              <button
                className={`nav-item-btn ${isActive ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                <div className="nav-item-left">
                  <span className="nav-item-code">{cat.code}</span>
                  <span style={{ fontSize: '1.05rem', marginRight: '2px' }}>{cat.icon}</span>
                  <span className="nav-item-title">{cat.title}</span>
                </div>
                <span className="nav-item-badge">
                  {checkedCount}/{totalItems}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
