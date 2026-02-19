from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from schemas import StudyRequest, QuizRequest
import ai_engine

app = FastAPI(title="Study Buddy AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Study Buddy Backend is running!"}

@app.post("/api/explain")
def explain_topic(request: StudyRequest):
    try:
        explanation = ai_engine.explain_concept(request.text)
        return {"original_topic": request.text, "explanation": explanation}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/summarize")
def summarize_text(request: StudyRequest):
    try:
        summary = ai_engine.summarize_notes(request.text)
        return {"summary": summary}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/flashcards")
def create_flashcards(request: QuizRequest):
    try:
        flashcards = ai_engine.generate_flashcards(request.text)
        return {"flashcards": flashcards}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))