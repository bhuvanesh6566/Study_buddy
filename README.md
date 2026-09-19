# AI-Powered Study Buddy 📚🤖

An AI-assisted study application for explaining concepts, summarizing notes, and generating flashcards.

## Features
- Explain concepts in simple language
- Summarize study material
- Generate Q&A flashcards

## Tech Stack
React + Vite • FastAPI • FLAN-T5

## Setup
### Backend
```bash
cd study_buddy_backend
pip install fastapi uvicorn transformers torch pydantic
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```
### Frontend
```bash
cd frontend
npm install
npm run dev
```
