import { useState } from 'react'
import { summarizeNotes } from '../api'
import Card from './Card'

export default function SummarizeNotes() {
  const [notes, setNotes] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!notes.trim()) return
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const data = await summarizeNotes(notes.trim())
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="feature">
      <Card>
        <h2>📝 Summarize Notes</h2>
        <p className="feature-desc">
          Paste your study notes and get a concise summary to review quickly.
        </p>
        <form onSubmit={handleSubmit} className="form">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Paste your study notes here..."
            rows={6}
            disabled={loading}
          />
          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? 'Summarizing...' : 'Summarize'}
          </button>
        </form>
      </Card>

      {error && (
        <Card className="error-card">
          <p className="error-msg">{error}</p>
          <p className="error-hint">Make sure the backend is running on http://127.0.0.1:8000</p>
        </Card>
      )}

      {result && (
        <Card className="result-card">
          <h3>Summary</h3>
          <div className="result-content">
            <p>{result.summary}</p>
          </div>
        </Card>
      )}
    </div>
  )
}
