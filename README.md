# AI-Powered Study Buddy

An AI tool that helps students understand concepts, summarize study notes, and generate flashcards on demand.

## Features

- **Explain** — Get simple, easy-to-understand explanations for any topic
- **Summarize** — Paste notes and get concise summaries
- **Flashcards** — Generate question-answer flashcards from text or topics

## Setup

### Backend (FastAPI)

```bash
cd study_buddy_backend
pip install fastapi uvicorn transformers torch pydantic
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

The backend loads the FLAN-T5 model on startup (first run may take a few minutes).

### Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
aiml2/
├── study_buddy_backend/
│   ├── main.py       # FastAPI app & endpoints
│   ├── ai_engine.py  # FLAN-T5 model calls
│   └── schemas.py    # Request/response models
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── api.js
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## API Endpoints

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| POST | /api/explain | `{ "text": "topic" }` | Explain a concept |
| POST | /api/summarize | `{ "text": "notes" }` | Summarize notes |
| POST | /api/flashcards | `{ "text": "content" }` | Generate flashcards |

cd study_buddy_backend && start /B uvicorn main:app --reload --host 127.0.0.1 --port 8000

cd study_buddy_backend; uvicorn main:app --reload --host 127.0.0.1 --port 8000