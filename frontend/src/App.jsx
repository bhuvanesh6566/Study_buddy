import { useState } from 'react'
import ExplainTopic from './components/ExplainTopic'
import SummarizeNotes from './components/SummarizeNotes'
import Flashcards from './components/Flashcards'
import './App.css'

const TABS = [
  { id: 'explain', label: 'Explain', icon: '💡' },
  { id: 'summarize', label: 'Summarize', icon: '📝' },
  { id: 'flashcards', label: 'Flashcards', icon: '🃏' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('explain')

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">
            <span className="logo-icon">📚</span>
            AI Study Buddy
          </h1>
          <p className="tagline">Understand concepts. Summarize notes. Master with flashcards.</p>
        </div>
      </header>

      <nav className="tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="main">
        {activeTab === 'explain' && <ExplainTopic />}
        {activeTab === 'summarize' && <SummarizeNotes />}
        {activeTab === 'flashcards' && <Flashcards />}
      </main>

      <footer className="footer">
        <p>AI-Powered Study Buddy — Learn smarter, not harder</p>
      </footer>
    </div>
  )
}
