import React from 'react'

export default function CardItem({ card, onClickCard }) {
  return (
    <div className="compact-card-item" onClick={() => onClickCard(card)}>
      <div className="card-top-row">
        <span className="card-num-badge">ข้อ {card.code}</span>
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
