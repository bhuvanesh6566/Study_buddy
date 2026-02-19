import requests
import os
import json
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    print("No API Key")
    exit()

models = ["gemini-2.0-flash", "gemini-1.5-flash"]

for model in models:
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
    print(f"Testing {model}...")
    headers = {'Content-Type': 'application/json'}
    data = {
        "contents": [{"parts": [{"text": "Hello"}]}]
    }
    
    try:
        response = requests.post(url, headers=headers, json=data, timeout=10)
        print(f"Status: {response.status_code}")
        if response.status_code == 200:
            print("SUCCESS!")
            print(response.json())
            break
        else:
            print(f"Failed: {response.text}")
    except Exception as e:
        print(f"Error: {e}")
