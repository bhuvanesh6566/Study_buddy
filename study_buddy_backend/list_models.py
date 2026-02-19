import google.generativeai as genai
import os
from dotenv import load_dotenv
import sys

# Redirect stdout to a file
sys.stdout = open("models_output.txt", "w")
sys.stderr = sys.stdout

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)

print("--- BEGIN MODELS LIST ---")
try:
    for m in genai.list_models():
        supported = m.supported_generation_methods
        print(f"Name: {m.name}")
        print(f"Supported methods: {supported}")
        if 'generateContent' in supported:
            print(f"  -> CAN USE FOR GENERATION")
        else:
            print(f"  -> CANNOT USE")
        print("-" * 20)
except Exception as e:
    print(f"ListModels Error: {e}")

print("--- END MODELS LIST ---")
