import sys
import os

# Redirect stdout to a file immediately
sys.stdout = open("test_ai_output.txt", "w", encoding='utf-8')
sys.stderr = sys.stdout

print("Starting test_ai.py...", flush=True)

try:
    from dotenv import load_dotenv
    load_dotenv()
    print(f"API Key present: {bool(os.getenv('GEMINI_API_KEY'))}", flush=True)

    import ai_engine
    print("ai_engine imported.", flush=True)

    print("\nTesting explain_concept('Quantum Computing')...", flush=True)
    explanation = ai_engine.explain_concept("Quantum Computing")
    print(f"Response (FIRST 100 chars):\n{explanation[:100]}...", flush=True)

    print("\nTesting summarize_notes('Photosynthesis is the process used by plants...')...", flush=True)
    summary = ai_engine.summarize_notes("Photosynthesis is the process used by plants to convert light energy into chemical energy.")
    print(f"Response (FIRST 100 chars):\n{summary[:100]}...", flush=True)

    print("Test complete.", flush=True)

except Exception as e:
    print(f"\nCRITICAL ERROR: {e}", flush=True)
    import traceback
    traceback.print_exc()

sys.stdout.close()
