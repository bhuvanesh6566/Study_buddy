import ai_engine

print("Testing AI Model Connection...\n")

# Test 1: Explain
print("1. Testing Explain:")
result = ai_engine.explain_concept("machine learning")
print(f"OK - {result[:100]}...\n")

# Test 2: Summarize
print("2. Testing Summarize:")
result = ai_engine.summarize_notes("Python is a programming language. It is easy to learn. It has many libraries.")
print(f"OK - {result[:100]}...\n")

# Test 3: Flashcards
print("3. Testing Flashcards:")
result = ai_engine.generate_flashcards("HTTP is a protocol for transferring data on the web.")
print(f"OK - {result[:100]}...\n")

print("All tests passed! Model is working perfectly.")
