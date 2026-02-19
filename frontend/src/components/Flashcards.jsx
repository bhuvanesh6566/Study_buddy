import { useState } from 'react'
import { createFlashcards } from '../api'
import Card from './Card'

function parseFlashcards(text) {
  if (!text || typeof text !== 'string') return []
  const raw = text.trim()
  const pairs = []

  // Split by Q: or Q. - each block may contain "Question ... Answer ..."
  const blocks = raw.split(/\s*(?=Q[:\.]\s|Question\s)/i).filter(Boolean)
  for (const block of blocks) {
    const qMatch = block.match(/(?:Q[:\.]\s|Question\s)([^A]+?)(?=\s*A[:\.]\s|Answer\s|$)/is)
    const aMatch = block.match(/(?:\s*A[:\.]\s|Answer\s)(.+)/is)
    const question = qMatch ? qMatch[1].trim() : block.split(/A[:\.]|Answer/i)[0]?.replace(/^Q[:\.]\s?|Question\s?/i, '').trim() || block
    const answer = aMatch ? aMatch[1].trim() : ''
    if (question) pairs.push({ question, answer })
  }

  if (pairs.length > 0) return pairs

  // Fallback: line pairs or single block
  const lines = raw.split(/[\n\r]+/).map((s) => s.trim()).filter(Boolean)
  for (let j = 0; j < lines.length; j += 2) {
    const q = (lines[j] || '').replace(/^\d+[\.\)]\s*/, '')
    const a = (lines[j + 1] || '').replace(/^\d+[\.\)]\s*/, '')
    if (q) pairs.push({ question: q, answer: a })
  }

  return pairs.length ? pairs : [{ question: raw, answer: '' }]
}

export default function Flashcards() {
  const [text, setText] = useState('')
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [flipped, setFlipped] = useState(new Set())
  const [current, setCurrent] = useState(0)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) return
    setLoading(true)
    setError('')
    setCards([])
    setFlipped(new Set())
    setCurrent(0)
    try {
      const data = await createFlashcards(text.trim())
      const parsed = Array.isArray(data.flashcards)
        ? data.flashcards
        : parseFlashcards(data.flashcards)
      setCards(parsed)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function toggleFlip(idx) {
    setFlipped((prev) => new Set([...prev, idx]))
  }

  if (cards.length > 0) {
    const c = cards[current]
    return (
      <div className="feature">
        <Card>
          <h2>🃏 Flashcards</h2>
          <div className="flashcard-container">
            <div
              className={`flashcard ${flipped.has(current) ? 'flipped' : ''}`}
              onClick={() => toggleFlip(current)}
            >
              <div className="flashcard-face front">
                <span className="flashcard-label">Question</span>
                <p>{c.question}</p>
              </div>
              <div className="flashcard-face back">
                <span className="flashcard-label">Answer</span>
                <p>{c.answer || '(No answer parsed)'}</p>
              </div>
            </div>
          </div>
          <div className="flashcard-nav">
            <button
              onClick={() => setCurrent((i) => Math.max(0, i - 1))}
              disabled={current === 0}
              className="btn btn-secondary"
            >
              ← Previous
            </button>
            <span className="flashcard-count">
              {current + 1} / {cards.length}
            </span>
            <button
              onClick={() => setCurrent((i) => Math.min(cards.length - 1, i + 1))}
              disabled={current === cards.length - 1}
              className="btn btn-secondary"
            >
              Next →
            </button>
          </div>
          <button
            onClick={() => {
              setCards([])
              setText('')
            }}
            className="btn btn-ghost"
          >
            Create new flashcards
          </button>
        </Card>
      </div>
    )
  }

  return (
    <div className="feature">
      <Card>
        <h2>🃏 Create Flashcards</h2>
        <p className="feature-desc">
          Enter text or a topic to generate flashcards with questions and answers.
        </p>
        <form onSubmit={handleSubmit} className="form">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste text or describe a topic..."
            rows={5}
            disabled={loading}
          />
          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? 'Generating...' : 'Generate Flashcards'}
          </button>
        </form>
      </Card>

      {error && (
        <Card className="error-card">
          <p className="error-msg">{error}</p>
          <p className="error-hint">Make sure the backend is running on http://127.0.0.1:8000</p>
        </Card>
      )}
    </div>
  )
}
