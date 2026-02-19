const API_BASE = '/api'

async function fetchAPI(endpoint, body) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }))
    throw new Error(err.detail || 'Request failed')
  }
  return res.json()
}

export async function explainTopic(text) {
  return fetchAPI('/explain', { text })
}

export async function summarizeNotes(text) {
  return fetchAPI('/summarize', { text })
}

export async function createFlashcards(text, numQuestions = 3) {
  return fetchAPI('/flashcards', { text, num_questions: numQuestions })
}
