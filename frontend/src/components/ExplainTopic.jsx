import { useState } from 'react'
import { explainTopic } from '../api'
import Card from './Card'

export default function ExplainTopic() {
  const [topic, setTopic] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!topic.trim()) return
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const data = await explainTopic(topic.trim())
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
        <h2>💡 Explain a Concept</h2>
        <p className="feature-desc">
          Enter any topic or concept and get a simple, easy-to-understand explanation.
        </p>
        <form onSubmit={handleSubmit} className="form">
          <textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Photosynthesis, Newton's Third Law, Machine Learning..."
            rows={3}
            disabled={loading}
          />
          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? 'Explaining...' : 'Explain'}
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
          <h3>Explanation</h3>
          <div className="result-content">
            <p>{result.explanation}</p>
          </div>
        </Card>
      )}
    </div>
  )
}
