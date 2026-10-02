import React from 'react'

const TONE_COUNT = 6

function toneOf(text = '') {
  let sum = 0
  for (const ch of text) sum += ch.codePointAt(0)
  return sum % TONE_COUNT
}

export default function CardItem({ card, onClickCard }) {
  return (
    <div className={`compact-card-item tone-${toneOf(card.category)}`} onClick={() => onClickCard(card)}>
      <div className="card-top-row">
        <span className="card-num-badge">{card.badge || `ข้อ ${card.code}`}</span>
        <span className="card-category-tag">{card.category}</span>
      </div>

      <div className="card-middle-content">
        <span className="card-main-icon">{card.icon}</span>
        <div>
          <h3 className="card-main-title">{card.title}</h3>
          <p className="card-main-subtitle">{card.subtitle}</p>
        </div>
      </div>

      <div className="card-bottom-action">
        <span>คลิกเพื่อดูรายละเอียด & Copy Prompt</span>
        <span>➔</span>
      </div>
    </div>
  )
}
