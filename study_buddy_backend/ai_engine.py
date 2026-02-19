import os
from google import genai
from google.genai import types
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env file")

client = genai.Client(api_key=api_key)
print("Gemini API configured successfully!")

def generate_ai_response(prompt: str) -> str:
    try:
        response = client.models.generate_content(
            model='models/gemini-2.5-flash',
            contents=prompt
        )
        return response.text
    except Exception as e:
        raise Exception(f"AI Error: {str(e)}")

def explain_concept(topic: str) -> str:
    prompt = f"You are a friendly teacher. Explain '{topic}' to a first-year student in 4-6 sentences. Use simple language and include a real-world example."
    return generate_ai_response(prompt)

def summarize_notes(notes: str) -> str:
    prompt = f"Summarize the following study notes into 3-5 bullet points. Keep it clear and focused on main ideas.\n\nNotes:\n{notes}"
    return generate_ai_response(prompt)

def generate_flashcards(text: str) -> str:
    prompt = f"Create exactly 3 study flashcards from the text below. Format them as:\nQ: <question>\nA: <short answer>\n\nText:\n{text}"
    return generate_ai_response(prompt)
