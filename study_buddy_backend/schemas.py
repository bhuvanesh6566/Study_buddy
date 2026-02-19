from pydantic import BaseModel

class StudyRequest(BaseModel):
    text: str

class QuizRequest(BaseModel):
    text: str
    num_questions: int = 3