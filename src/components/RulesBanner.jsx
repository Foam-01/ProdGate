import React, { useState } from 'react'
import { MASTER_INTRO } from '../data/checklistData'

export default function RulesBanner() {
  const [rulesCopied, setRulesCopied] = useState(false)

  const handleCopyRulesOnly = () => {
    navigator.clipboard.writeText(MASTER_INTRO.rulesText).then(() => {
      setRulesCopied(true)
      setTimeout(() => setRulesCopied(false), 2000)
    })
  }

  return (
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

      <div className="how-to-use-box">
        <pre className="how-to-use-text">{MASTER_INTRO.howToUse}</pre>
      </div>

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

      <div className="golden-tip-box">
        <h3 style={{ color: 'var(--amber-text)', fontSize: '1.05rem', marginBottom: '8px', fontWeight: '700' }}>
          {MASTER_INTRO.goldenTipTitle}
        </h3>
        <pre className="golden-tip-text">{MASTER_INTRO.goldenTipText}</pre>
      </div>
    </div>
  )
}
