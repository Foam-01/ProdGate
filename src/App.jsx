import React, { useState, useEffect } from 'react'
import { MASTER_41_CARDS } from './data/checklistData'
import { MOBILE_CARDS, MOBILE_INTRO } from './data/mobileData'
import CardItem from './components/CardItem'
import DetailModal from './components/DetailModal'
import HomeScreen from './components/HomeScreen'
import RulesBanner from './components/RulesBanner'

const VIEWS = ['home', 'web', 'mobile']

function readView() {
  const v = window.location.hash.replace('#', '')
  return VIEWS.includes(v) ? v : 'home'
}

export default function App() {
  const [view, setView] = useState(readView)
  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(() => {
    const onHash = () => {
      setView(readView())
      setSelectedCard(null)
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const go = (v) => {
    window.location.hash = v === 'home' ? '' : v
    if (v === 'home') {
      setView('home')
      setSelectedCard(null)
      window.scrollTo(0, 0)
    }
  }

  const openCard = (c) => setSelectedCard(c)

  return (
    <div className={`app-layout theme-${view}`}>
      <header className="app-hero">
        <div className="app-hero-inner">
          <div className="app-hero-icon">📋</div>
          <div className="app-hero-text">
            <h1 className="app-hero-title">Developer Checklist &amp; AI Code Review Master</h1>
            <p className="app-hero-subtitle">รวมทุกคำสั่งตรวจสอบโค้ดและกฎการทำงาน ไว้ในที่เดียว</p>
          </div>
          {view !== 'home' && (
            <button className="hero-home-btn" onClick={() => go('home')}>
              ← หน้าแรก
            </button>
          )}
        </div>
      </header>

      {view === 'home' && <HomeScreen onSelect={go} />}

      {view === 'web' && (
        <main className="cards-scroll-container">
          <div className="cards-wrapper-grid-layout">
            <div className="grid-section-header">
              <h2 className="grid-section-title">
                <span>📋</span>
                <span>รายการการ์ด Review ทั้ง 41 ข้อ (คลิกที่การ์ดเพื่อดูรายละเอียด)</span>
              </h2>
              <span className="grid-section-count">รวมทั้งหมด {MASTER_41_CARDS.length} ข้อ</span>
            </div>

            <div className="compact-41-grid">
              {MASTER_41_CARDS.map((card) => (
                <CardItem key={card.id} card={card} onClickCard={openCard} />
              ))}
            </div>

            <RulesBanner />
          </div>
        </main>
      )}

      {view === 'mobile' && (
        <main className="cards-scroll-container">
          <div className="cards-wrapper-grid-layout">
            <div className="grid-section-header">
              <h2 className="grid-section-title">
                <span>📋</span>
                <span>รายการการ์ด Review ทั้ง {MOBILE_CARDS.length} ข้อ (คลิกที่การ์ดเพื่อดูรายละเอียด)</span>
              </h2>
              <span className="grid-section-count">รวมทั้งหมด {MOBILE_CARDS.length} ข้อ</span>
            </div>

            <p className="section-summary">{MOBILE_INTRO.summary}</p>

            <div className="compact-41-grid">
              {MOBILE_CARDS.map((card) => (
                <CardItem key={card.id} card={card} onClickCard={openCard} />
              ))}
            </div>

            <RulesBanner />
          </div>
        </main>
      )}

      <DetailModal
        card={selectedCard}
        isOpen={selectedCard !== null}
        onClose={() => setSelectedCard(null)}
        includeRulesDefault={false}
      />
    </div>
  )
}
