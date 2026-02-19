import google.generativeai as genai
import os
from dotenv import load_dotenv
import sys

# Redirect stdout to a file
sys.stdout = open("test_output.txt", "w")
sys.stderr = sys.stdout

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

if not api_key or "PLACE_YOUR" in api_key:
    print("INVALID API KEY")
    exit()

try:
    genai.configure(api_key=api_key)
except Exception as e:
    print(f"Configuration Error: {e}")
    exit()

models_to_try = [
    "gemini-1.5-flash",
    "gemini-pro", 
    "models/gemini-1.5-flash",
    "models/gemini-pro"
]

print("Starting model test...")

for model_name in models_to_try:
    print(f"Trying {model_name}...")
    try:
        model = genai.GenerativeModel(model_name)
        response = model.generate_content("Hello")
        print(f"SUCCESS with {model_name}")
        print(f"Response: {response.text}")
        break
    except Exception as e:
        print(f"FAILED {model_name}: {e}")

print("Test complete.")
