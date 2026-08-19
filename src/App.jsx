import React, { useState } from 'react'
import { MASTER_INTRO, MASTER_41_CARDS } from './data/checklistData'
import CardItem from './components/CardItem'
import DetailModal from './components/DetailModal'

export default function App() {
  const [selectedCard, setSelectedCard] = useState(null)
  const [rulesCopied, setRulesCopied] = useState(false)

  const handleCopyRulesOnly = () => {
    navigator.clipboard.writeText(MASTER_INTRO.rulesText).then(() => {
      setRulesCopied(true)
      setTimeout(() => setRulesCopied(false), 2000)
    })
  }

  return (
    <div className="app-layout">
      {/* Main Container: 41 Cards Grid on Top, Master Rules at Bottom */}
      <main className="cards-scroll-container">
        <div className="cards-wrapper-grid-layout">

          {/* Grid Section Header (Top of Page) */}
          <div className="grid-section-header">
            <h2 className="grid-section-title">
              <span>📋</span>
              <span>รายการการ์ด Review ทั้ง 41 ข้อ (คลิกที่การ์ดเพื่อดูรายละเอียด)</span>
            </h2>
            <span className="grid-section-count">
              รวมทั้งหมด {MASTER_41_CARDS.length} ข้อ
            </span>
          </div>

          {/* 41 Compact Cards Grid View */}
          <div className="compact-41-grid">
            {MASTER_41_CARDS.map((card) => (
              <CardItem
                key={card.id}
                card={card}
                onClickCard={(c) => setSelectedCard(c)}
              />
            ))}
          </div>

          {/* Master Introductory & Rules Banner Card (Moved to Bottom) */}
          <div id="card-rules" className="rules-master-banner" style={{ marginTop: '24px' }}>
            <div className="banner-head-row">
              <h2 className="banner-main-title">
                <span>🧠</span>
                <span>{MASTER_INTRO.title}</span>
              </h2>
              <button className="btn btn-primary" onClick={handleCopyRulesOnly}>
                <span>📋</span>
                <span>{rulesCopied ? 'คัดลอกเรียบร้อย!' : 'คัดลอกกฎ 24 ข้อ'}</span>
              </button>
            </div>

            {/* How to use text box */}
            <div className="how-to-use-box">
              <pre className="how-to-use-text">{MASTER_INTRO.howToUse}</pre>
            </div>

            {/* 24 Rules Grid */}
            <div>
              <h3 style={{ color: 'var(--blue-dark)', fontSize: '1.1rem', marginBottom: '12px', fontWeight: '700' }}>
                {MASTER_INTRO.rulesTitle}
              </h3>
              <div className="rules-grid-view">
                {MASTER_INTRO.rulesList.map((r, i) => (
                  <div key={i} className="rule-pill">
                    {r}
                  </div>
                ))}
              </div>
            </div>

            {/* Golden Tip Box */}
            <div className="golden-tip-box">
              <h3 style={{ color: 'var(--amber-text)', fontSize: '1.05rem', marginBottom: '8px', fontWeight: '700' }}>
                {MASTER_INTRO.goldenTipTitle}
              </h3>
              <pre className="golden-tip-text">
                {MASTER_INTRO.goldenTipText}
              </pre>
            </div>
          </div>

        </div>
      </main>

      {/* Pop-up Detail Modal */}
      <DetailModal
        card={selectedCard}
        isOpen={selectedCard !== null}
        onClose={() => setSelectedCard(null)}
        includeRulesDefault={false}
      />
    </div>
  )
}
